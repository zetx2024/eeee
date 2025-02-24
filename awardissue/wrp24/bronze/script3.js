// URL of the PDF you want to view
const pdfUrl = 'https://yrjournal.org/awardissue/wrp24/bronze/jarif_diya.pdf';

// Initialize PDF.js
const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';

// Asynchronously download PDF
pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log('PDF loaded');
    renderPage(1);
}).catch(error => {
    console.error('Error loading PDF:', error);
});

let pdfDoc = null;
let pageNum = 1;

// Function to render page
function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        const scale = 1.5; // Scale factor for zoom
        const viewport = page.getViewport({ scale });

        // Prepare canvas using PDF page dimensions
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext).promise.then(() => {
            console.log('Page rendered');
        }).catch(error => {
            console.error('Error rendering page:', error);
        });
    }).catch(error => {
        console.error('Error getting page:', error);
    });
}

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());
