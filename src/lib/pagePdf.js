const PAGE_META = {
  '/': { title: 'ShareTab', filename: 'sharetab-home' },
  '/about': { title: 'About Us', filename: 'sharetab-about-us' },
  '/sprint-1/market-research': {
    title: 'Market Research',
    filename: 'sharetab-sprint-1-market-research',
  },
  '/sprint-1/business-strategy': {
    title: 'Business Strategy',
    filename: 'sharetab-sprint-1-business-strategy',
  },
  '/sprint-1/project-charter': {
    title: 'Project Charter',
    filename: 'sharetab-sprint-1-project-charter',
  },
  '/sprint-1/contributions': {
    title: 'Contribution Statements & AI Disclosure',
    filename: 'sharetab-sprint-1-contributions',
  },
  '/sprint-2/business-case': {
    title: 'Business Case',
    filename: 'sharetab-sprint-2-business-case',
  },
  '/sprint-2/estimation-appendix': {
    title: 'Estimation Appendix',
    filename: 'sharetab-sprint-2-estimation-appendix',
  },
  '/sprint-2/roi-analysis': {
    title: 'ROI Analysis',
    filename: 'sharetab-sprint-2-roi-analysis',
  },
}

const LETTER = {
  width: 612,
  height: 792,
  marginLeft: 54,
  marginRight: 54,
  contentTop: 66,
  contentBottom: 738,
}

const COLORS = {
  ink: 24,
  muted: 92,
  rule: 184,
  lightRule: 220,
  fill: 244,
}

function cleanText(value) {
  return String(value || '')
    .replace(/[\u2010-\u2015]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function directRows(section) {
  if (!section) return []
  return [...section.rows]
}

export class LetterPdfDocument {
  constructor(pdf, { title }) {
    this.pdf = pdf
    this.title = cleanText(title)
    this.pageNumber = 0
    this.y = LETTER.contentTop
    this.addPage(false)
  }

  get contentWidth() {
    return LETTER.width - LETTER.marginLeft - LETTER.marginRight
  }

  addPage(createNew = true) {
    if (createNew) this.pdf.addPage('letter', 'portrait')
    this.pageNumber += 1
    this.y = LETTER.contentTop
    this.drawHeader()
  }

  drawHeader() {
    const { pdf } = this
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8)
    pdf.setTextColor(COLORS.ink)
    pdf.text('SHARETAB', LETTER.marginLeft, 31)

    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(COLORS.muted)
    pdf.text('LIVING PROJECT PORTAL', LETTER.marginLeft + 52, 31)

    pdf.setDrawColor(COLORS.rule)
    pdf.setLineWidth(0.6)
    pdf.line(LETTER.marginLeft, 42, LETTER.width - LETTER.marginRight, 42)
  }

  ensureSpace(height) {
    if (this.y + height <= LETTER.contentBottom) return
    this.addPage()
  }

  setType(size, style = 'normal', color = COLORS.ink) {
    this.pdf.setFont('helvetica', style)
    this.pdf.setFontSize(size)
    this.pdf.setTextColor(color)
  }

  wrappedLines(text, width, size, style = 'normal') {
    this.setType(size, style)
    return this.pdf.splitTextToSize(cleanText(text), width)
  }

  addDocumentTitle(title) {
    const text = cleanText(title)
    const lines = this.wrappedLines(text, this.contentWidth, 22, 'bold')
    const lineHeight = 27
    this.ensureSpace(lines.length * lineHeight + 22)
    this.setType(22, 'bold')
    this.pdf.text(lines, LETTER.marginLeft, this.y, { lineHeightFactor: lineHeight / 22 })
    this.y += lines.length * lineHeight + 8

    this.pdf.setDrawColor(COLORS.ink)
    this.pdf.setLineWidth(1.2)
    this.pdf.line(LETTER.marginLeft, this.y, LETTER.marginLeft + 42, this.y)
    this.y += 18
  }

  addHeading(text, level = 2) {
    const settings = {
      1: { size: 16, gapBefore: 16, gapAfter: 8, style: 'bold' },
      2: { size: 14, gapBefore: 18, gapAfter: 7, style: 'bold' },
      3: { size: 11.5, gapBefore: 12, gapAfter: 5, style: 'bold' },
      4: { size: 10, gapBefore: 10, gapAfter: 4, style: 'bold' },
    }[Math.min(Math.max(level, 1), 4)]

    const lines = this.wrappedLines(text, this.contentWidth, settings.size, settings.style)
    const lineHeight = settings.size * 1.25
    this.ensureSpace(settings.gapBefore + lines.length * lineHeight + settings.gapAfter + 20)
    this.y += settings.gapBefore
    this.setType(settings.size, settings.style)
    this.pdf.text(lines, LETTER.marginLeft, this.y, { lineHeightFactor: 1.25 })
    this.y += lines.length * lineHeight + settings.gapAfter
  }

  addLabel(text) {
    const label = cleanText(text).toUpperCase()
    if (!label) return
    const lines = this.wrappedLines(label, this.contentWidth, 7.5, 'bold')
    this.ensureSpace(lines.length * 10 + 35)
    this.y += 4
    this.setType(7.5, 'bold', COLORS.muted)
    this.pdf.text(lines, LETTER.marginLeft, this.y, { lineHeightFactor: 1.3 })
    this.y += lines.length * 10 + 3
  }

  addParagraph(text, options = {}) {
    const value = cleanText(text)
    if (!value) return

    const {
      indent = 0,
      size = 9.5,
      style = 'normal',
      color = COLORS.ink,
      gapAfter = 8,
      width = this.contentWidth - indent,
    } = options
    const lineHeight = size * 1.42
    const lines = this.wrappedLines(value, width, size, style)
    let index = 0

    while (index < lines.length) {
      const remainingHeight = LETTER.contentBottom - this.y
      let lineCount = Math.floor(remainingHeight / lineHeight)
      if (lineCount < 2) {
        this.addPage()
        lineCount = Math.floor((LETTER.contentBottom - this.y) / lineHeight)
      }

      const chunk = lines.slice(index, index + lineCount)
      this.setType(size, style, color)
      this.pdf.text(chunk, LETTER.marginLeft + indent, this.y, { lineHeightFactor: 1.42 })
      this.y += chunk.length * lineHeight
      index += chunk.length
      if (index < lines.length) this.addPage()
    }

    this.y += gapAfter
  }

  addList(items, ordered = false) {
    items.forEach((item, index) => {
      const prefix = ordered ? `${index + 1}.` : '-'
      const value = cleanText(item)
      if (!value) return

      const indent = 15
      const lines = this.wrappedLines(value, this.contentWidth - indent, 9.5)
      const lineHeight = 13.5
      this.ensureSpace(lines.length * lineHeight + 4)
      this.setType(9.5, 'normal')
      this.pdf.text(prefix, LETTER.marginLeft, this.y)
      this.pdf.text(lines, LETTER.marginLeft + indent, this.y, { lineHeightFactor: 1.42 })
      this.y += lines.length * lineHeight + 4
    })
    this.y += 3
  }

  addQuote(text, cite = '') {
    const quoteText = cleanText(text).replace(/^"\s*/, '').replace(/\s*"$/, '')
    const width = this.contentWidth - 28
    const lines = this.wrappedLines(`"${quoteText}"`, width, 9.25, 'italic')
    const citeLines = cite ? this.wrappedLines(cleanText(cite), width, 7.5) : []
    const height = lines.length * 13 + citeLines.length * 10 + 20
    this.ensureSpace(height)

    const top = this.y - 3
    this.pdf.setDrawColor(COLORS.ink)
    this.pdf.setLineWidth(1.4)
    this.pdf.line(LETTER.marginLeft, top, LETTER.marginLeft, top + height - 8)

    this.setType(9.25, 'italic')
    this.pdf.text(lines, LETTER.marginLeft + 16, this.y, { lineHeightFactor: 1.4 })
    this.y += lines.length * 13 + 5

    if (citeLines.length) {
      this.setType(7.5, 'normal', COLORS.muted)
      this.pdf.text(citeLines, LETTER.marginLeft + 16, this.y, { lineHeightFactor: 1.3 })
      this.y += citeLines.length * 10
    }
    this.y += 10
  }

  addTable(table) {
    const headerRows = directRows(table.tHead)
    const bodyRows = directRows(table.tBodies[0])
    const sourceRows = [...headerRows, ...bodyRows]
    if (!sourceRows.length) return

    const columnCount = Math.max(...sourceRows.map((row) => row.cells.length))
    if (!columnCount) return

    const lengths = Array(columnCount).fill(8)
    sourceRows.forEach((row) => {
      Array.from(row.cells).forEach((cell, index) => {
        lengths[index] = Math.max(lengths[index], Math.min(cleanText(cell.textContent).length, 56))
      })
    })

    const minimumWidth = Math.min(74, this.contentWidth / columnCount)
    const flexibleWidth = this.contentWidth - minimumWidth * columnCount
    const totalWeight = lengths.reduce((sum, length) => sum + Math.sqrt(length), 0)
    const widths = lengths.map((length) => minimumWidth + flexibleWidth * (Math.sqrt(length) / totalWeight))
    const padding = 5
    const fontSize = columnCount >= 4 ? 7.4 : 8
    const lineHeight = fontSize * 1.35

    const prepareRow = (row) => {
      const cells = Array.from({ length: columnCount }, (_, index) => cleanText(row.cells[index]?.textContent || ''))
      const lines = cells.map((cell, index) => this.wrappedLines(cell, widths[index] - padding * 2, fontSize))
      return { lines, height: Math.max(22, ...lines.map((cellLines) => cellLines.length * lineHeight + padding * 2)) }
    }

    const preparedHeader = headerRows.length ? prepareRow(headerRows[0]) : null
    const drawRow = (prepared, isHeader = false) => {
      this.ensureSpace(prepared.height)
      let x = LETTER.marginLeft
      prepared.lines.forEach((lines, index) => {
        if (isHeader) {
          this.pdf.setFillColor(COLORS.fill)
          this.pdf.rect(x, this.y, widths[index], prepared.height, 'F')
        }
        this.pdf.setDrawColor(COLORS.lightRule)
        this.pdf.setLineWidth(0.45)
        this.pdf.rect(x, this.y, widths[index], prepared.height)
        this.setType(fontSize, isHeader ? 'bold' : 'normal', COLORS.ink)
        if (lines.length) {
          this.pdf.text(lines, x + padding, this.y + padding + fontSize, { lineHeightFactor: 1.35 })
        }
        x += widths[index]
      })
      this.y += prepared.height
    }

    const drawHeader = () => {
      if (preparedHeader) drawRow(preparedHeader, true)
    }

    this.ensureSpace((preparedHeader?.height || 0) + 34)
    drawHeader()
    bodyRows.forEach((row) => {
      const prepared = prepareRow(row)
      if (this.y + prepared.height > LETTER.contentBottom) {
        this.addPage()
        drawHeader()
      }
      drawRow(prepared)
    })
    this.y += 12
  }

  addCardGap() {
    this.y += 5
  }

  finish() {
    const pageCount = this.pdf.getNumberOfPages()
    for (let page = 1; page <= pageCount; page += 1) {
      this.pdf.setPage(page)
      this.pdf.setDrawColor(COLORS.rule)
      this.pdf.setLineWidth(0.5)
      this.pdf.line(LETTER.marginLeft, 756, LETTER.width - LETTER.marginRight, 756)

      this.setType(7.5, 'normal', COLORS.muted)
      this.pdf.text('CS 4390 / 5388 - Software Project Management | The University of Texas at El Paso', LETTER.marginLeft, 772)
      this.pdf.text(`Page ${page} of ${pageCount}`, LETTER.width - LETTER.marginRight, 772, { align: 'right' })
    }
  }
}

function elementText(element) {
  return cleanText(element.textContent)
}

function isExcluded(element) {
  return (
    ['BUTTON', 'SCRIPT', 'STYLE', 'SVG', 'NOSCRIPT', 'IMG'].includes(element.tagName) ||
    element.matches('[data-pdf-exclude], .breadcrumb, .sr-only')
  )
}

function renderElement(element, writer, state) {
  if (!element || element.nodeType !== 1 || isExcluded(element)) return

  const tag = element.tagName.toLowerCase()
  const text = elementText(element)

  if (element.classList.contains('card')) writer.ensureSpace(85)

  if (/^h[1-6]$/.test(tag)) {
    if (cleanText(text).toLowerCase() === state.title.toLowerCase() && !state.skippedPageHeading) {
      state.skippedPageHeading = true
      return
    }
    writer.addHeading(text, Math.min(Number(tag[1]), 4))
    return
  }

  if (tag === 'p') {
    if (element.classList.contains('eyebrow') && !state.skippedPageHeading) return
    if (element.classList.contains('label') || element.classList.contains('eyebrow')) writer.addLabel(text)
    else writer.addParagraph(text)
    return
  }

  if (tag === 'ul' || tag === 'ol') {
    const items = [...element.children]
      .filter((child) => child.tagName === 'LI')
      .map((child) => elementText(child))
    writer.addList(items, tag === 'ol')
    return
  }

  if (tag === 'table') {
    writer.addTable(element)
    return
  }

  if (tag === 'figure' && element.querySelector('blockquote')) {
    writer.addQuote(
      elementText(element.querySelector('blockquote')),
      elementText(element.querySelector('figcaption')),
    )
    return
  }

  if (tag === 'blockquote') {
    writer.addQuote(text)
    return
  }

  if (tag === 'details') {
    const summary = element.querySelector(':scope > summary')
    if (summary) writer.addHeading(elementText(summary), 4)
    Array.from(element.children)
      .filter((child) => child !== summary)
      .forEach((child) => renderElement(child, writer, state))
    writer.addCardGap()
    return
  }

  if (tag === 'summary') return

  if (element.classList.contains('badge') || element.classList.contains('label')) {
    writer.addLabel(text)
    return
  }

  if (tag === 'a') return

  Array.from(element.children).forEach((child) => renderElement(child, writer, state))
  if (element.classList.contains('card')) writer.addCardGap()
}

export async function buildPagePdf(content, pathname) {
  const metadata = PAGE_META[pathname] || {
    title: cleanText(content.querySelector('h1, h2')?.textContent) || 'ShareTab Document',
    filename: 'sharetab-document',
  }
  const { jsPDF } = await import('jspdf')
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'letter', compress: true })
  const writer = new LetterPdfDocument(pdf, metadata)

  pdf.setProperties({
    title: metadata.title,
    subject: 'ShareTab Living Project Portal',
    author: 'ShareTab Team 8',
    creator: 'ShareTab Living Project Portal',
  })

  writer.addDocumentTitle(metadata.title)
  const state = { title: metadata.title, skippedPageHeading: false }
  const root = content.firstElementChild || content
  renderElement(root, writer, state)
  writer.finish()
  return { pdf, filename: `${metadata.filename}.pdf` }
}

export async function downloadPagePdf(content, pathname) {
  const { pdf, filename } = await buildPagePdf(content, pathname)
  pdf.save(filename)
}
