import { Router } from 'express';
import {
  deleteJokeFromSubmitService,
  getRandomeJokeFromSubmitService,
  updateAndSendToDeliverService,
} from '../controllers/jokes.controller';

const jokesRouter = Router();

jokesRouter.get('/', getRandomeJokeFromSubmitService);

jokesRouter.delete('/:jokeId', deleteJokeFromSubmitService);

jokesRouter.patch('/', updateAndSendToDeliverService);

export { jokesRouter };
