import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../backend/firebase';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: 'Ethan Johnson',
    email: 'dia@gmail.com',
    phone: '+1 234 567 8900',
    age: '28',
    gender: 'Male',
    allergiesMeds: 'None',
    allergiesFoods: 'None',
    lastVisit: '2024-06-20',
    dentalConditions: 'None',
    chronicIllnesses: 'None',
    specialNeeds: 'None',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
      router.replace('/login');
    } catch (error: any) {
      console.error('Logout error:', error.message);
      Alert.alert('Error', 'Failed to logout');
    }
  };

  const handleSave = () => {
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="#dc3545" />
          </TouchableOpacity>
        </View>

        {/* Profile Picture */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={60} color="#666" />
          </View>
          <Text style={styles.userName}>{form.name}</Text>
          <Text style={styles.userEmail}>{form.email}</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={(value) => handleChange('name', value)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, styles.disabledInput]}
              value={form.email}
              editable={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={form.phone}
              onChangeText={(value) => handleChange('phone', value)}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value={form.age}
                onChangeText={(value) => handleChange('age', value)}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.label}>Gender</Text>
              <TextInput
                style={styles.input}
                value={form.gender}
                onChangeText={(value) => handleChange('gender', value)}
              />
            </View>
          </View>
        </View>

        {/* Medical Information */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Medical Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Allergies to Medications</Text>
            <TextInput
              style={styles.textArea}
              value={form.allergiesMeds}
              onChangeText={(value) => handleChange('allergiesMeds', value)}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Food Allergies</Text>
            <TextInput
              style={styles.textArea}
              value={form.allergiesFoods}
              onChangeText={(value) => handleChange('allergiesFoods', value)}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Dental Conditions</Text>
            <TextInput
              style={styles.textArea}
              value={form.dentalConditions}
              onChangeText={(value) => handleChange('dentalConditions', value)}
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  formSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  disabledInput: {
    backgroundColor: '#f8f9fa',
    color: '#666',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    height: 80,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
