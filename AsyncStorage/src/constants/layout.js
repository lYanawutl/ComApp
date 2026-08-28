import { Platform, StatusBar } from 'react-native';

export const TOP_INSET = Platform.select({
  ios: 56, // เผื่อ notch
  android: (StatusBar.currentHeight ?? 24) + 10,
  default: 24, // สำหรับเว็บ
});

export const BOTTOM_INSET = Platform.select({
  ios: 28,
  android: 14,
  default: 14,
});
