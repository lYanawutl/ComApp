// ทุกคีย์ขึ้นต้นด้วย 'todo:' เพื่อให้กรองเป็นกลุ่มได้
// โดยไม่แตะข้อมูลที่ไลบรารีอื่นเก็บไว้
export const PREFIX = 'todo:';

export const KEYS = {
  ITEMS: `${PREFIX}items`,
  FILTER: `${PREFIX}filter`,
};
