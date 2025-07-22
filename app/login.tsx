import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet,Alert,SafeAreaView,StatusBar} from 'react-native';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../backend/firebase'; // Import Firebase auth
import { useRouter } from 'expo-router'; // or 'next/navigation' if using Next.js
// Import image at the top
const toothImage = require('../assets/images/tooth.png');

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('dia@gmail.com');
  const [password, setPassword] = useState<string>('12345678');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // ลบ session ก่อนหน้าก่อน
      await signOut(auth);
      console.log('Previous session cleared');
      
      // ทำการ login ใหม่
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login success:', userCredential.user.email);
      router.push('/(tabs)/home'); // ✅ เปลี่ยนไปหน้า home ใน tabs
    } catch (error: any) {
      console.error('Login error:', error.message);
      Alert.alert('เข้าสู่ระบบล้มเหลว', error.message);
    }
  };

//   const handleRegister = () => {
//     router.push('/register'); // ✅ ถ้ามีหน้า register ให้ไปหน้านั้น
//   };


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Image source={toothImage} style={styles.logo} />

        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity> */}

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#0099ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
  },
  registerText: {
    color: '#444',
    fontWeight: '600',
  },
  forgotText: {
    marginTop: 12,
    color: '#888',
    textDecorationLine: 'underline',
  },
});
