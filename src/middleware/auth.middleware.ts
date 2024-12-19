import { NextFunction, Request, Response } from 'express';

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { token } = req.cookies;
  if (token === 'abc123token') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
