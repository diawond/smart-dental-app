import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// ข้อมูลตัวอย่างนัดหมาย - สามารถแทนที่ด้วยข้อมูลจริงจาก API
const appointments = [
  { date: 'July 15, 2024', time: '10:00 AM', status: 'Confirmed' },
  { date: 'June 20, 2024', time: '2:30 PM', status: 'Completed' },
  { date: 'May 5, 2024', time: '11:15 AM', status: 'Completed' },
];

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    console.log('🚀 Button pressed! Starting navigation...');
    try {
      // เปลี่ยนจาก '../app/newbooking' เป็น '/newbooking'
      router.push('/newbooking');
      console.log('✅ Router.push called successfully');
    } catch (error) {
      console.error('❌ Navigation error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {/* ส่วนหัวหน้า - Header Section */}
        <Text style={styles.header}>Home</Text>

        {/* ข้อความต้อนรับ - Welcome Message */}
        <Text style={styles.welcome}>Welcome, Ethan</Text>

        {/* ปุ่มจองนัดหมายใหม่ - New Appointment Button */}
        <TouchableOpacity
          style={styles.appointmentButton}
          onPress={handleBookAppointment}
          activeOpacity={0.7} // เพิ่มเพื่อให้เห็นว่าปุ่มถูกกด
        >
          <Text style={styles.buttonText}>Book a New Appointment</Text>
        </TouchableOpacity>

        {/* ส่วนแสดงนัดหมายล่าสุด - Recent Appointments Section */}
        <Text style={styles.sectionTitle}>Recent Appointments</Text>

        {/* รายการนัดหมาย - Appointments List */}
        <FlatList
          data={appointments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.appointmentItem}>
              <View>
                <Text style={styles.appointmentDate}>{item.date}</Text>
                <Text style={styles.appointmentTime}>{item.time}</Text>
              </View>
              <Text style={styles.appointmentStatus}>{item.status}</Text>
            </View>
          )}
        />

        {/* ส่วนเคล็ดลับ - Tips Section */}
        <Text style={styles.sectionTitle}>Dental Tips</Text>
        <View style={styles.tipContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.tipTitle}>Tip of the Day</Text>
            <Text style={styles.tipBold}>
              Brush twice a day for 2 minutes each time.
            </Text>
            <Text style={styles.tipText}>
              Proper brushing helps remove plaque and prevent cavities.
            </Text>
          </View>
          {/* รูปภาพประกอบเคล็ดลับ - Tip Illustration */}
          <Image
            source={require('../../assets/images/tooth.png')} // ใช้รูปที่มีอยู่แน่นอน
            style={styles.tipImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // === SAFE AREA STYLES - สไตล์ Safe Area ===
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // === LAYOUT STYLES - สไตล์การจัดวาง ===
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10, // ลด padding top สำหรับ Android
    paddingBottom: 80, // เพิ่ม padding bottom สำหรับ tab bar
    backgroundColor: '#fff',
  },

  // === HEADER STYLES - สไตล์ส่วนหัว ===
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#888',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },

  // === BUTTON STYLES - สไตล์ปุ่ม ===
  appointmentButton: {
    backgroundColor: '#0099ff', // สีฟ้า - เปลี่ยนได้ตามต้องการ
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  // === SECTION STYLES - สไตล์หัวข้อแต่ละส่วน ===
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },

  // === APPOINTMENT LIST STYLES - สไตล์รายการนัดหมาย ===
  appointmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // เส้นแบ่งใต้แต่ละรายการ
  },
  appointmentDate: {
    fontWeight: '600',
  },
  appointmentTime: {
    color: '#555',
  },
  appointmentStatus: {
    color: '#555',
    fontWeight: '600',
  },

  // === TIP SECTION STYLES - สไตล์ส่วนเคล็ดลับ ===
  tipContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff8f0', // สีพื้นหลังอ่อนๆ
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  tipTitle: {
    fontSize: 14,
    color: '#888',
  },
  tipBold: {
    fontWeight: '700',
    marginVertical: 4,
  },
  tipText: {
    fontSize: 13,
    color: '#666',
  },
  tipImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
    resizeMode: 'contain', // รูปภาพจะปรับขนาดให้พอดี
  },
});

