import axios from 'axios';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${environment}` });

const deleteJokeFromSubmitService = async (req: Request, res: Response) => {
  try {
    const { jokeId } = req.params;
    await axios.delete(
      `${process.env.SUBMIT_SERVICE_URL}/submit-service/jokes/${jokeId}`,
    );
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
    const { jokeId, joke, category } = req.body;

    const deleteRes = await axios.delete(
      `${process.env.SUBMIT_SERVICE_URL}/submit-service/jokes/${jokeId}`,
    );
    if (deleteRes.status !== 200) {
      res.status(500).json({ message: 'Failed to delete joke' });
    } else {
      const deliverRes = await axios.post(
        `${process.env.DELIVER_SERVICE_URL}/deliver-service/jokes`,
        {
          jokeId,
          joke,
          category,
        },
      );

      if (deliverRes.status !== 201) {
        res.status(500).json({ message: 'Failed to update joke' });
      } else {
        res.status(201).json({ message: 'Joke updated successfully' });
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export {
  deleteJokeFromSubmitService,
  getRandomeJokeFromSubmitService,
  updateAndSendToDeliverService,
};
