// app/_layout.tsx
import { Stack, useRouter, useSegments } from 'expo-router';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../backend/firebase'; // ✅ ให้แน่ใจว่า path ตรงกับไฟล์ของคุณ

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const segments = useSegments(); // ตัวอย่าง: ['/login'], ['/home']

  useEffect(() => {
    // เพิ่มการตรวจสอบว่า auth มีค่าหรือไม่
    if (!auth) {
      console.error('❌ Firebase auth is undefined');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      console.log('🔐 onAuthStateChanged:', user?.email);
      setIsLoggedIn(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading) {
      const currentPath = segments.join('/') || 'index';

      console.log('🔍 Current path:', currentPath, 'Is logged in:', isLoggedIn);
      console.log('🔍 Segments:', segments);

      // เพิ่มเงื่อนไข: อย่าบล็อกหน้า newbooking
      if (!isLoggedIn && !currentPath.includes('login') && !currentPath.includes('newbooking')) {
        console.log('Redirecting to login...');
        router.replace('/login');
      } else if (isLoggedIn && (currentPath.includes('login') || currentPath === 'index' || currentPath === '')) {
        console.log('Redirecting to tabs...');
        router.replace('/(tabs)/home'); // เปลี่ยนไปหน้า home ใน tabs
      }
    }
  }, [loading, isLoggedIn, segments]);

  if (loading) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="newbooking" options={{ headerShown: true, title: 'Book New Appointment' }} />
      <Stack.Screen name="bookingResult" options={{ headerShown: true, title: 'Booking Result' }} />
    </Stack>
  );
}
