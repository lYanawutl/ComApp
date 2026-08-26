import { Platform, StatusBar } from "react-native";

// คำนวณระยะขอบปลอดภัยด้านบนเอง โดยไม่ใช้ react-native-safe-area-context
// iOS      : เผื่อ notch / Dynamic Island
// Android  : ใช้ความสูงของแถบสถานะจริง แล้วบวกระยะหายใจอีกเล็กน้อย
export const TOP_INSET = Platform.select({
  ios: 56,
  android: (StatusBar.currentHeight ?? 24) + 10,
  default: 24,
});

export const BOTTOM_INSET = Platform.select({
  ios: 28,
  android: 14,
  default: 14,
});
