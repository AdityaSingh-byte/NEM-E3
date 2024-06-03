// /routes/bookRoutes.js
import express from 'express';
import { generatePDF } from '../controllers/pdfController.js';
import auth from '../middleware/authMiddleware.js';


const PdfRoutes = express.Router();

PdfRoutes.post('/generate-pdf',  generatePDF);

export default PdfRoutes;
