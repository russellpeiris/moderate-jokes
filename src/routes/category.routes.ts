import { Router } from 'express';
import {
  addCategoryFromSubmitService,
  getCategoriesFromSubmitService,
} from '../controllers/category.controller';

export const categoryRouter = Router();

categoryRouter.post('/', addCategoryFromSubmitService);
categoryRouter.get('/', getCategoriesFromSubmitService);
