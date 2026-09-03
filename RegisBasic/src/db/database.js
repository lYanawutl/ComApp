export const DATABASE_NAME = "register_basic.db";

export async function initDB(db) {
  await db.execAsync(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            surname TEXT NOT NULL,
            student_id TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL UNIQUE,
            password_salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            create_at TEXT NOT NULL
        );
    `);
}

export function liststudents(db) {
  return db.getAllAsync(
    `SELECT id, name, surname, student_id, username, substr(password_hash, 1, 16) AS hash_review FROM students ORDER BY id DESC`,
  );
}
