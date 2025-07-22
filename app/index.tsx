import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// หน้านี้เป็น fallback หรือ loading page
export default function IndexPage() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
      <Text style={styles.loadingText}>กำลังโหลด...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});
