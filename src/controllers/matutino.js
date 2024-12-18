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
    SELECT id, disciplina, dia_da_semana, sala, professor 
    FROM Matutino 
    ORDER BY disciplina ASC, dia_da_semana ASC, sala ASC 
  `;
  const matutino = await db.all(sql);
  return matutino;
}

export async function selectByIdMatutino(id) {
  const db = await openDb();
  const sql = `
    SELECT id, disciplina, dia_da_semana, sala, professor
    FROM Matutino
    WHERE id = ?
  `;
  const matutino = await db.get(sql, id);
  return matutino;
}

export async function selectFilteredMatutino(valorAProcurar) {
  const db = await openDb();
  const sql = `
    SELECT id, disciplina, dia_da_semana, sala, professor 
    FROM Matutino 
    WHERE disciplina LIKE '%' || ? || '%'
    OR dia_da_semana LIKE '%' || ? || '%'
    OR professor LIKE '%' || ? || '%'
    ORDER BY disciplina ASC, dia_da_semana ASC, sala ASC 
  `;
  const matutino = await db.all(sql, valorAProcurar, valorAProcurar, valorAProcurar);
  return matutino;
}

export async function updateMatutino(id, matutino) {
  const db = await openDb();
  const sql = `
    UPDATE Matutino
    SET disciplina = ?, dia_da_semana = ?, sala = ?, professor = ?
    WHERE id = ?
  `;
  await db.run(sql, [matutino.disciplina, matutino.diaDaSemana, matutino.sala, matutino.professor, id]);
}

export async function deleteMatutino(id) {
  const db = await openDb();
  const sql = `
    DELETE FROM Matutino
    WHERE id = ?
  `;
  await db.run(sql, id);
}
