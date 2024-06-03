import express from 'express';
import dotenv, { config } from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

import multer from 'multer';
import PdfRoutes from './routes/pdfRoutes.js';
import auth from './middleware/authMiddleware.js';

config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;
const db_uri = process.env.DB_URI || null;

const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(upload.fields([
  { name: 'frontImage' },
  { name: 'backImage' },
  { name: 'insertedImages' },
  { name: 'internalBackgroundImage' }
]));

app.use(cors());
app.get('/', async (req, res) => {
  try {
    res.send('this is home route');
  } catch (err) {
    console.log(err);
  }
});
app.use('/', authRoutes);
app.use('/user', userRouter);
app.use('/api/books', PdfRoutes);

app.listen(port, async () => {
  try {
    await connectDB(db_uri);
    console.log(`Server is connected to the MongoDB`);
    console.log('server is running on port ' + port);
  } catch (err) {
    console.log(err);
  }
});
