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