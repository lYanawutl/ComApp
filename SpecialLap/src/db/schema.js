export const DATABASE_NAME = "expense.db";

const SEED_CATEGORIES = [
  ["เงินเดื่อน", "income", "#3Fb950"],
  ["รายได้เสริม", "income", "#2F81F2"],
  ["อาหาร", "expense", "#F0A93B"],
  ["เดินทาง", "expense", "#61DAF8"],
  ["ที่พัก", "expense", "#A371F7"],
  ["ของใช้", "expense", "#DB6D28"],
  ["บังเทิง", "expense", "#BD61A2"],
  ["อื่นๆ", "expense", "#8B949E"],
];

export async function initDB(db) {
  await db.execAsync(
    `PRAGMA journal_mode = WAL;
     PRAGMA foreign_keys = ON;

     CREATE TABLE IF NOT EXISTS categories(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL UNIQUE,
         kind TEXT NOT NULL CHECK (kind IN ('income', 'expense')),
         color TEXT NOT NULL
     );

     CREATE TABLE IF NOT EXISTS transactions (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
         amount INTEGER NOT NULL CHECK ( amount > 0 ),
         note TEXT NOT NULL DEFAULT '',
         spent_at TEXT NOT NULL,
         create_at INTEGER NOT NULL
     );

     CREATE INDEX IF NOT EXISTS idx_tx_spent_at ON transactions( spent_at );
     CREATE INDEX IF NOT EXISTS idx_tx_category ON transactions( category_id );`,
  );

  const row = await db.getFirstAsync("SELECT COUNT(*) AS n FROM categories");
  if (row.n > 0) return;

  await db.withTransactionAsync(async () => {
    for (const [name, kind, color] of SEED_CATEGORIES) {
      await db.runAsync(
        "INSERT INTO categories(name, kind, color) VALUES(?, ?, ?)",
        [name, kind, color],
      );
    }
  });
}
