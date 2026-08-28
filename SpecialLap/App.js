import { Suspense } from 'react';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { SQLiteProvider } from 'expo-sqlite';

import ExpenseScreen from './ExpenseScreen';
import { DATABASE_NAME, initDb } from './db';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />

      {/*
        SQLiteProvider เปิดไฟล์ฐานข้อมูลให้ครั้งเดียว แล้วส่งต่อให้ทุกหน้าจอ
        - databaseName คือชื่อไฟล์ ถ้ายังไม่มีจะถูกสร้างให้เอง
        - onInit ทำงานตอนเปิดไฟล์ และเสร็จก่อนที่หน้าจอจะเริ่ม query
        - useSuspense ทำให้ระหว่างรอ แสดง fallback ของ Suspense แทน
      */}
      <Suspense fallback={<Loading />}>
        <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb} useSuspense>
          <ExpenseScreen />
        </SQLiteProvider>
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#61DAFB" />
      <Text style={styles.text}>กำลังเตรียมฐานข้อมูล...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  text: { color: '#8B949E', fontSize: 14 },
});
