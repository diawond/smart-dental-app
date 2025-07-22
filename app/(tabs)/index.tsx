// app/(tabs)/index.tsx - Default tab (redirect to home)
import { Redirect } from 'expo-router';

export default function TabsIndex() {
  return <Redirect href="/(tabs)/home" />;
}
