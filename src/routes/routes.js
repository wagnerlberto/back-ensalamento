import { Router } from 'express';
import { createMatutino, insertMatutino, selectAllMatutino, selectByIdMatutino, updateMatutino, deleteMatutino } 
  from '../controllers/matutino.js';

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

router.get('/matutino', async (req, res) => {
  const matutino = await selectAllMatutino();
  res
    .status(201)
    .json(matutino);
});

router.get('/matutino/:id', async (req, res) => {
  const id = req.params.id;
  const matutino = await selectByIdMatutino(id);
  res
    .status(201)
    .json(matutino);
});

router.put('/matutino/:id', async (req, res) => {
  const id = req.params.id;
  const matutino = req.body;
  await updateMatutino(id, matutino);
  res
    .status(201)
    .send('Matutino updated');
});

router.delete('/matutino/:id', async (req, res) => {
  const id = req.params.id;
  await deleteMatutino(id);
  res
    .status(201)
    .send('Matutino deleted');
});

export default router;