import { openDb } from '../../databases/configDB.js';

export async function createMatutino() {
  const db = await openDb();
  const sql = `
    CREATE TABLE IF NOT EXISTS Matutino (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      disciplina TEXT,
      dia_da_semana TEXT,
      sala TEXT,
      professor TEXT
    )
  `;
  await db.exec(sql);
}

export async function insertMatutino(matutino) {
  const db = await openDb();
  const sql = `
    INSERT INTO Matutino 
    (disciplina, dia_da_semana, sala, professor) 
    VALUES 
    (?, ?, ?, ?) 
  `;
  await db.run(sql, [matutino.disciplina, matutino.diaDaSemana, matutino.sala, matutino.professor]);
}

export async function selectAllMatutino() {
  const db = await openDb();
  const sql = `
    SELECT disciplina, dia_da_semana, sala, professor 
    FROM Matutino 
    ORDER BY disciplina ASC, dia_da_semana ASC, sala ASC 
  `;
  const matutino = await db.all(sql);
  return matutino;
}
