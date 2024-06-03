
import express from 'express';
const router = express.Router();
import upload from '../middleware/upload.js';
import { createPDF, getPDFs, downloadPDF, viewPDF } from '../controllers/pdfController.js';

router.post('/create-pdf', upload.fields([
    { name: 'frontCover', maxCount: 1 },
    { name: 'backCover', maxCount: 1 },
    { name: 'internalPages', maxCount: 10 }
]), createPDF);

router.get('/pdfs', getPDFs);
router.get('/download/:id', downloadPDF);
router.get('/view/:id', viewPDF);

export default router;
