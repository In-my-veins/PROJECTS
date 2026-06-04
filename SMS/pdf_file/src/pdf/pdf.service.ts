import { Injectable } from '@nestjs/common';
import PDFDocument = require('pdfkit');

@Injectable()
export class PdfService {

  generatePdf() {

    const doc = new PDFDocument({ margin: 50 });

    doc.rect(30, 30, 550, 750).stroke();

    doc.fontSize(20).text('INVOICE', { align: 'center' });

    doc.moveDown();

    doc.fontSize(12).text('Invoice Number: INV-001');
    doc.text('Date: 2026-05-14');

    doc.moveDown();

    doc.fontSize(14).text('Bill To:', { underline: true });
    doc.fontSize(12).text('John Doe');
    doc.text('john@example.com');
    doc.text('Kigali, Rwanda');

    doc.moveDown();

    const items = [
      { name: 'Laptop', qty: 1, price: 500 },
      { name: 'Mouse', qty: 2, price: 10 },
      { name: 'Keyboard', qty: 1, price: 30 },
      { name: 'Monitor', qty: 2, price: 200 },
      { name: 'USB Cable', qty: 3, price: 5 },
      { name: 'Headphones', qty: 1, price: 50 },
      { name: 'Charger', qty: 2, price: 20 },
      { name: 'Desk Lamp', qty: 1, price: 15 },
      { name: 'Mouse Pad', qty: 4, price: 3 },
      { name: 'Speaker', qty: 1, price: 80 },
    ];

    let y = doc.y;

    const itemX = 50;
    const qtyX = 250;
    const priceX = 350;
    const totalX = 450;

    doc.fontSize(12);

    doc.text('Item', itemX, y);
    doc.text('Qty', qtyX, y);
    doc.text('Price', priceX, y);
    doc.text('Total', totalX, y);

    y += 20;

    let grandTotal = 0;

    for (const item of items) {
      const total = item.qty * item.price;
      grandTotal += total;

      doc.text(item.name, itemX, y);
      doc.text(String(item.qty), qtyX, y);
      doc.text(String(item.price), priceX, y);
      doc.text(String(total), totalX, y);

      y += 20;
    }

    doc.moveDown(2);

    doc.fontSize(14).text(`Total: ${grandTotal}`, { align: 'right' });

    doc.end();

    return doc;
  }
}