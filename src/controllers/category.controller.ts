import axios from 'axios';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${environment}` });

const addCategoryFromSubmitService = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    await axios.post(
      `${process.env.SUBMIT_SERVICE_URL}/submit-service/category`,
      {
        category,
      },
    );

    res.status(201).json({ message: 'Category added successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoriesFromSubmitService = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `${process.env.SUBMIT_SERVICE_URL}/submit-service/category`,
    );
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { addCategoryFromSubmitService, getCategoriesFromSubmitService };
