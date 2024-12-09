import { openDb } from '../../databases/configDB.js';

export async function createMatutino() {
  const db = await openDb();
  const sql = `
    CREATE TABLE IF NOT EXISTS Matutino (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    )
  `;
  await db.exec(sql);
}