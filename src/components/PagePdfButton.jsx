import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FileDown, LoaderCircle, TriangleAlert } from 'lucide-react'
import { downloadPagePdf } from '../lib/pagePdf.js'

export default function PagePdfButton() {
  const [exporting, setExporting] = useState(false)
  const [failed, setFailed] = useState(false)
  const { pathname } = useLocation()

  async function downloadPage() {
    const content = document.querySelector('[data-pdf-content]')
    if (!content || exporting) return

    setExporting(true)
    setFailed(false)

    try {
      await document.fonts.ready
      await downloadPagePdf(content, pathname)
    } catch (error) {
      console.error('Unable to generate PDF', error)
      setFailed(true)
    } finally {
      setExporting(false)
    }
  }

  return (
    <button
      type="button"
      onClick={downloadPage}
      disabled={exporting}
      className="btn btn-primary disabled:opacity-60"
      title="Download this page as a formatted US Letter document"
    >
      {exporting ? (
        <LoaderCircle size={16} className="animate-spin" />
      ) : failed ? (
        <TriangleAlert size={16} />
      ) : (
        <FileDown size={16} />
      )}
      {exporting ? 'Formatting PDF' : failed ? 'Try PDF again' : 'Download PDF'}
    </button>
  )
}
