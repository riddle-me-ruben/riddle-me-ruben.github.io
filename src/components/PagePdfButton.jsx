import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Download, LoaderCircle } from 'lucide-react'

const PAGE_FILENAMES = {
  '/': 'sharetab-home',
  '/about': 'sharetab-about-us',
  '/sprint-1/market-research': 'sharetab-sprint-1-market-research',
  '/sprint-1/business-strategy': 'sharetab-sprint-1-business-strategy',
  '/sprint-1/project-charter': 'sharetab-sprint-1-project-charter',
  '/sprint-1/contributions': 'sharetab-sprint-1-contributions',
  '/sprint-2/business-case': 'sharetab-sprint-2-business-case',
  '/sprint-2/estimation-appendix': 'sharetab-sprint-2-estimation-appendix',
  '/sprint-2/roi-analysis': 'sharetab-sprint-2-roi-analysis',
  '/sprint-2/change-log': 'sharetab-sprint-2-change-log',
}

export default function PagePdfButton() {
  const [exporting, setExporting] = useState(false)
  const { pathname } = useLocation()

  async function downloadPage() {
    const content = document.querySelector('[data-pdf-content]')
    if (!content || exporting) return

    setExporting(true)
    const collapsedDetails = [...content.querySelectorAll('details:not([open])')]
    const adjustedBlocks = []
    collapsedDetails.forEach((detail) => detail.setAttribute('open', ''))

    try {
      await document.fonts.ready
      await new Promise((resolve) => requestAnimationFrame(resolve))

      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4', hotfixes: ['px_scaling'] })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const pageHeightInDocument = content.scrollWidth * (pageHeight / pageWidth)
      const contentTop = content.getBoundingClientRect().top
      const blocks = [...content.querySelectorAll('[data-pdf-block], .card, .research-disclosure, .data-table-wrap')]
      const blockRows = []
      blocks.forEach((block) => {
        const top = block.getBoundingClientRect().top
        const currentRow = blockRows.at(-1)
        if (currentRow && Math.abs(currentRow.top - top) < 3) currentRow.blocks.push(block)
        else blockRows.push({ top, blocks: [block] })
      })

      blockRows.forEach((row) => {
        const bounds = row.blocks.map((block) => block.getBoundingClientRect())
        const rowTop = Math.min(...bounds.map((bound) => bound.top))
        const rowBottom = Math.max(...bounds.map((bound) => bound.bottom))
        const top = rowTop - contentTop
        const positionOnPage = top % pageHeightInDocument
        const rowHeight = rowBottom - rowTop
        if (rowHeight < pageHeightInDocument * 0.9 && positionOnPage + rowHeight > pageHeightInDocument - 24) {
          const addedSpace = pageHeightInDocument - positionOnPage + 24
          row.blocks.forEach((block) => {
            const previousMargin = block.style.marginTop
            const computedMargin = Number.parseFloat(getComputedStyle(block).marginTop) || 0
            block.style.marginTop = `${computedMargin + addedSpace}px`
            adjustedBlocks.push([block, previousMargin])
          })
        }
      })

      const canvas = await html2canvas(content, {
        backgroundColor: '#050806',
        scale: 1.4,
        useCORS: true,
        logging: false,
      })

      const sliceHeight = Math.floor(canvas.width * (pageHeight / pageWidth))
      let offset = 0
      let pageNumber = 0

      while (offset < canvas.height) {
        if (pageNumber > 0) pdf.addPage()
        pdf.setFillColor(5, 8, 6)
        pdf.rect(0, 0, pageWidth, pageHeight, 'F')
        const currentSliceHeight = Math.min(sliceHeight, canvas.height - offset)
        const pageCanvas = document.createElement('canvas')
        pageCanvas.width = canvas.width
        pageCanvas.height = currentSliceHeight
        const context = pageCanvas.getContext('2d')
        context.drawImage(canvas, 0, offset, canvas.width, currentSliceHeight, 0, 0, canvas.width, currentSliceHeight)

        const renderedHeight = currentSliceHeight * (pageWidth / canvas.width)
        pdf.addImage(pageCanvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageWidth, renderedHeight)
        offset += currentSliceHeight
        pageNumber += 1
      }

      const filename = PAGE_FILENAMES[pathname] || 'sharetab-page'
      pdf.setProperties({ title: filename.replaceAll('-', ' ') })
      pdf.save(`${filename}.pdf`)
    } finally {
      adjustedBlocks.forEach(([block, previousMargin]) => {
        block.style.marginTop = previousMargin
      })
      collapsedDetails.forEach((detail) => detail.removeAttribute('open'))
      setExporting(false)
    }
  }

  return (
    <button type="button" onClick={downloadPage} disabled={exporting} className="btn btn-ghost disabled:opacity-60">
      {exporting ? <LoaderCircle size={16} className="animate-spin" /> : <Download size={16} />}
      {exporting ? 'Preparing PDF' : 'Download PDF'}
    </button>
  )
}
