import axios from 'axios';
import { Request, Response } from 'express';

const deleteJokeFromSubmitService = async (req: Request, res: Response) => {
  try {
    const { jokeId } = req.body;
    await axios.delete(`${process.env.SUBMIT_SERVICE_URL}/jokes/${jokeId}`);
    res.status(200).json({ message: 'Joke deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getRandomeJokeFromSubmitService = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `${process.env.SUBMIT_SERVICE_URL}/submit-service/jokes`,
    );
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateAndSendToDeliverService = async (req: Request, res: Response) => {
  try {
    const { jokeId, joke, status, category } = req.body;

    await axios.delete(`${process.env.SUBMIT_SERVICE_URL}/jokes/${jokeId}`);
    await axios.post(
      `${process.env.DELIVER_SERVICE_URL}/deliver-service/jokes`,
      {
        jokeId,
        joke,
        status,
        category,
      },
    );
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export {
  deleteJokeFromSubmitService,
  getRandomeJokeFromSubmitService,
  updateAndSendToDeliverService,
};
