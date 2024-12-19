import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {
  // jwt has not been used since it is not the focus
  const { email, password } = req.body;
  if (email === 'admin@admin.com' && password === 'admin123') {
    res.cookie('token', 'abc123token', { httpOnly: true });
    res.json({
      message: 'Login successful',
      token: 'abc123token',
    });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
};

export { login };
