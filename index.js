const PDFKit = require('pdfkit');
const fs = require('fs');

const pdf = new PDFKit();

// header
pdf.image('image.png', 50, 50, { width: 50 })
    .text('Company', 120, 50, { align: 'right' })
    .text('Address, 0', 200, 70, { align: 'right' })
    .text('City - State - Country', 200, 85, { align: 'right' });

// main

// footer
pdf.fontSize(12)
    .text('Company Name', 50, 695, { align: 'center' });

pdf.pipe(fs.createWriteStream('file.pdf'));
pdf.end();