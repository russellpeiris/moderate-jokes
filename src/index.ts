import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import { authRouter } from './routes/auth.routes';
import { categoryRouter } from './routes/category.routes';
import { jokesRouter } from './routes/jokes.routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/moderator/auth', authRouter);
app.use('/moderator/jokes', jokesRouter);
app.use('/moderator/category', categoryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
