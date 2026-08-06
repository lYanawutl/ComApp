import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ========== ใบงาน ข้อ 8: แยก vs รวม state ==========
export default function Ex8StatePatterns({navigation}) {
  // ===== STATE =====
  // (1) แบบแยก: 3 ตัวแปรอิสระ
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // (2) แบบรวม: ออบเจกต์เดียว
  const [status, setStatus] = useState({ loading: false, error: null, data: null });

  // (3) โหลดแบบแยก — ต้องสั่ง setter หลายตัวให้ครบทุกจุด
  const loadSeparate = () => {
    setLoading(true);
    setError(null);
    setData(null);

    setTimeout(() => {
      const ok = Math.random() > 0.5;
      setLoading(false);
      if (ok) {
        setData('ข้อมูลผู้ใช้ #' + Math.floor(Math.random() * 100));
      } else {
        setError('เชื่อมต่อเซิร์ฟเวอร์ไม่สำเร็จ');
      }
    }, 800);
  };

  // (4) โหลดแบบรวม — เขียนทับทั้งก้อนในครั้งเดียว
  const loadCombined = () => {
    setStatus({ loading: true, error: null, data: null });

    setTimeout(() => {
      const ok = Math.random() > 0.5;
      setStatus({
        loading: false,
        error: ok ? null : 'เชื่อมต่อเซิร์ฟเวอร์ไม่สำเร็จ',
        data: ok ? 'ข้อมูลผู้ใช้ #' + Math.floor(Math.random() * 100) : null,
      });
    }, 800);
  };

  return (
    <View style={s.container}>
      <View style={s.panel}>
        <Text style={s.panelTitle}>แบบแยก (3 state)</Text>
        {/* (5) */}
        <Text style={s.result}>
          {loading
            ? 'กำลังโหลด...'
            : error
            ? '❌ ' + error
            : data
            ? '✅ ' + data
            : 'ยังไม่โหลด'}
        </Text>
        <TouchableOpacity style={s.btn} onPress={loadSeparate}>
          <Text style={s.btnText}>โหลดข้อมูล</Text>
        </TouchableOpacity>
      </View>

      <View style={s.panel}>
        <Text style={s.panelTitle}>แบบรวม (1 object)</Text>
        {/* (6) */}
        <Text style={s.result}>
          {status.loading
            ? 'กำลังโหลด...'
            : status.error
            ? '❌ ' + status.error
            : status.data
            ? '✅ ' + status.data
            : 'ยังไม่โหลด'}
        </Text>
        <TouchableOpacity style={s.btn} onPress={loadCombined}>
          <Text style={s.btnText}>โหลดข้อมูล</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  panel: {
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  panelTitle: { color: '#61dafb', fontSize: 16, fontWeight: '700' },
  result: { color: '#c9d1d9', fontSize: 18, fontWeight: '600' },
  btn: {
    backgroundColor: '#238636',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});