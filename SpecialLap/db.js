// ---------------------------------------------------------------------------
// ทุกอย่างที่เกี่ยวกับฐานข้อมูลอยู่ในไฟล์นี้ไฟล์เดียว
// หน้าจอจะไม่เขียน SQL เอง แต่เรียกฟังก์ชันในไฟล์นี้แทน
// ---------------------------------------------------------------------------

// ตั้งชื่อไฟล์ไม่ให้ซ้ำกับโปรเจกต์อื่น ถ้าใช้ชื่อเดียวกันแล้วรันบน Expo Go
// ตารางของทั้งสองโปรเจกต์จะไปปนอยู่ในไฟล์เดียวกันโดยไม่มีข้อความเตือน
export const DATABASE_NAME = 'expense_basic.db';

// เรียกครั้งเดียวตอนเปิดฐานข้อมูล ผ่าน prop onInit ของ SQLiteProvider
export async function initDb(db) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS expenses (
      id       INTEGER PRIMARY KEY AUTOINCREMENT,
      title    TEXT    NOT NULL,
      amount   INTEGER NOT NULL,
      spent_at TEXT    NOT NULL
    );
  `);
}

// อ่านหลายแถว -> getAllAsync คืนอาเรย์ของอ็อบเจกต์
export function listExpenses(db) {
  return db.getAllAsync('SELECT * FROM expenses ORDER BY id DESC');
}

// อ่านแถวเดียว -> getFirstAsync คืนอ็อบเจกต์ หรือ null ถ้าไม่เจอ
export async function totalExpense(db) {
  const row = await db.getFirstAsync('SELECT SUM(amount) AS total FROM expenses');
  return row?.total ?? 0;   // ถ้ายังไม่มีข้อมูลเลย SUM จะคืน null
}

// เขียนข้อมูล -> runAsync คืน { lastInsertRowId, changes }
// ค่าที่มาจากผู้ใช้ต้องส่งผ่านเครื่องหมาย ? เสมอ ห้ามต่อสตริง
export async function addExpense(db, title, amount) {
  const today = new Date().toISOString().slice(0, 10);   // '2026-08-28'
  const result = await db.runAsync(
    'INSERT INTO expenses (title, amount, spent_at) VALUES (?, ?, ?)',
    [title, amount, today]
  );
  return result.lastInsertRowId;
}

export async function deleteExpense(db, id) {
  const result = await db.runAsync('DELETE FROM expenses WHERE id = ?', [id]);
  return result.changes;   // ควรได้ 1 ถ้าได้ 0 แปลว่าหา id นั้นไม่เจอ
}
