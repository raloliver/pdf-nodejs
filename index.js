const PDFKit = require('pdfkit');
const fs = require('fs');

const pdf = new PDFKit();

pdf.pipe(fs.createWriteStream('file.pdf'));
pdf.end();