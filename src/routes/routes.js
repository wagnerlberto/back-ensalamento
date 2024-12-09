import { Router } from 'express';
import { createMatutino } from '../controllers/matutino.js';

const router = Router();

createMatutino();

router.get('/', (req, res) => {
  res.send('API is running');
});

export default router;