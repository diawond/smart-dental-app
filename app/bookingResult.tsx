import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const bookingResultScreen = () => {
  const router = useRouter();
  // Get the booking parameters from the route
  const params = useLocalSearchParams();

  // Log the received parameters for debugging
  React.useEffect(() => {
    if (params) {
      console.log("Booking parameters received:", params);
    }
  }, [params]);

  const handleGoToHome = () => {
    router.push("/(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🎉 สำเร็จแล้ว!</Text>
          <Text style={styles.subtitle}>หน้าจองนัดหมายทำงานได้แล้ว!</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>✅ Navigation สำเร็จ!</Text>
          <Text style={styles.infoText}>
            ตอนนี้ปุ่ม "Book a New Appointment" ทำงานได้แล้ว{"\n\n"}
            หน้านี้จะใช้สำหรับ:{"\n"}• เลือกวันและเวลา{"\n"}•
            เลือกประเภทการรักษา{"\n"}• ยืนยันการจอง{"\n"}• แสดงรายการนัดหมาย
          </Text>
        </View>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={handleGoToHome}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>🏠 กลับหน้าหลัก</Text>
        </TouchableOpacity>

        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderTitle}>📅 ฟอร์มจองนัดหมาย</Text>
          <Text style={styles.placeholderText}>
            (จะเพิ่มฟอร์มจริงในภายหลัง)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default bookingResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0099ff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    fontWeight: "600",
  },
  infoBox: {
    backgroundColor: "#e8f5e8",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#28a745",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
  homeButton: {
    backgroundColor: "#0099ff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  placeholderBox: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#dee2e6",
    borderStyle: "dashed",
    alignItems: "center",
  },
  placeholderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
});
