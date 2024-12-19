import { Router } from 'express';
import { createMatutino, insertMatutino, selectAllMatutino, selectByIdMatutino, selectFilteredMatutino, updateMatutino, deleteMatutino } 
  from '../controllers/matutino.js';

const router = Router();

createMatutino();

router.get('/', (req, res) => {
  res.send('API is running');
});

router.post('/matutino', (req, res) => {
  try{
    const matutino = req.body;

    // Validação básica dos dados
    if (!matutino.disciplina) {
      return res.status(400).json({ 
        error: 'O campo disciplina é obrigatório.'
      });
    }

    insertMatutino(matutino);

    // Responder com os dados inseridos
    res
      .status(201)
      .json({
        message: 'Dados inseridos com sucesso'
      });
  }catch (error) {
    console.error('Erro na inserção:', error);

    // // Tratamento de erros específicos
    // if (error.code === '23505') {
    //   // Exemplo: erro de chave única
    //   return res.status(409).json({ 
    //     error: 'Já existe um registro similar',
    //     detalhes: error.detail
    //   });
    // }

    // Erro genérico do servidor
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      mensagem: error.message 
    });
  }
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

router.get('/ensalamentoM/:procurar', async (req, res) => {
  const procurar = req.params.procurar;
  const matutino = await selectFilteredMatutino(procurar);
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
    .json({
      message: 'Dados alterados com sucesso'
    });
});

router.delete('/matutino/:id', async (req, res) => {
  const id = req.params.id;
  await deleteMatutino(id);
  res
    .status(201)
    .json({
      message: 'Dados excluídos com sucesso'
    });
});

export default router;