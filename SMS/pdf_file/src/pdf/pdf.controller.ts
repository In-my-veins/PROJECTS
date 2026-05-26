import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {

  constructor(private readonly pdfService: PdfService) {}

  @Get()
  createPdf(@Res() res: Response) {

    const doc = this.pdfService.generatePdf();

    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);

  }
}