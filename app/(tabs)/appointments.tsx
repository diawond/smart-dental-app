import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TABS = ['Upcoming', 'Past', 'Canceled'];

const appointments = [
  { id: '1', title: 'Cleaning', doctor: 'Dr. Emily Carter', time: '10:00 AM', date: 'July 25, 2025' },
  { id: '2', title: 'Checkup', doctor: 'Dr. Emily Carter', time: '11:00 AM', date: 'July 30, 2025' },
  { id: '3', title: 'Filling', doctor: 'Dr. Smith Johnson', time: '2:00 PM', date: 'Aug 5, 2025' },
];

export default function AppointmentsScreen() {
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  const renderItem = ({ item }: { item: typeof appointments[0] }) => (
    <View style={styles.appointmentItem}>
      <View style={styles.iconWrapper}>
        <Ionicons name="calendar-outline" size={24} color="#007bff" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.doctor}>{item.doctor}</Text>
        <Text style={styles.datetime}>{item.date} • {item.time}</Text>
      </View>
      <View style={styles.statusWrapper}>
        <Text style={styles.statusText}>Confirmed</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Text style={styles.header}>Appointments</Text>
        
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabItem, selectedTab === tab && styles.activeTab]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Appointments List */}
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80, // เพิ่มพื้นที่สำหรับ tab bar
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  appointmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#e7f3ff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  doctor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  datetime: {
    fontSize: 12,
    color: '#999',
  },
  statusWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#e8f5e8',
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#2d7a2d',
    fontWeight: '500',
  },
});
