import express from 'express';
import router from './routes/routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const corsOptions = {
  origin: '*'
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

https.createServer({
  key: fs.readFileSync('src/SSL/code.key'),
  cert: fs.readFileSync('src/SSL/code.crt'),
// Usar a porta 443 em produção
// }, app).listen(443, () => console.log('Server listening on port 443'));
}, app).listen(3001, () => console.log('Server listening on port 3001'));
