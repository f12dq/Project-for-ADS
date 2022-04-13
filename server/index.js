import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/PostRoutes.js';
import userRouter from './routes/UserRoutes.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/Posts', postRoutes);
app.use("/User", userRouter);

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.h8z4m.mongodb.net/feedbackit?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
