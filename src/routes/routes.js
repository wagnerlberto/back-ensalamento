import { Router } from 'express';
import { createMatutino, insertMatutino } from '../controllers/matutino.js';

const router = Router();

createMatutino();

router.get('/', (req, res) => {
  res.send('API is running');
});

router.post('/matutino', (req, res) => {
  const matutino = req.body;
  insertMatutino(matutino);
  res
    .status(201)
    .send('Matutino created');
});

export default router;