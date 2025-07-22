import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FILTERS = ['All Chats', 'Unread', 'My Doctors'];

const messages = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    message: 'Your appointment has been confirmed for tomorrow at 10 AM.',
    time: '10 min ago',
    avatar: '👩‍⚕️', // ใช้ emoji แทนรูปภาพ
    category: 'doctor',
    unread: true,
  },
  {
    id: '2',
    name: 'Bright Smiles Dental',
    message: 'Thank you for choosing our clinic. See you soon!',
    time: '2 hrs ago',
    avatar: '🏥',
    category: 'clinic',
    unread: false,
  },
  {
    id: '3',
    name: 'Dr. Smith Johnson',
    message: 'Please remember to brush twice daily.',
    time: '1 day ago',
    avatar: '👨‍⚕️',
    category: 'doctor',
    unread: false,
  },
];

export default function MessagesScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All Chats');

  const renderMessage = ({ item }: { item: typeof messages[0] }) => (
    <TouchableOpacity style={styles.messageItem}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>{item.avatar}</Text>
      </View>
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.senderName}>{item.name}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <Text style={[styles.messageText, item.unread && styles.unreadMessage]}>
          {item.message}
        </Text>
      </View>
      {item.unread && <View style={styles.unreadBadge} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Text style={styles.header}>Messages</Text>
        
        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterItem,
                selectedFilter === filter && styles.activeFilter,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Messages List */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
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
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f8f9fa',
  },
  activeFilter: {
    backgroundColor: '#007bff',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatar: {
    fontSize: 24,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  senderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  unreadMessage: {
    fontWeight: '500',
    color: '#333',
  },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007bff',
    marginLeft: 8,
  },
});
