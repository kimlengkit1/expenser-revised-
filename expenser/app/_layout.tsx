import { useState, useEffect } from "react";
import { Slot, useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate async auth check
    setTimeout(() => {
      setIsAuthenticated(false); // or true
    }, 1000);
  }, []);

  useEffect(() => {
    if (isAuthenticated === null) {
      // still loading
      return;
    }

    if (isAuthenticated) {
      router.replace("/(app)/home");
    } else {
      router.replace("/(auth)/signin");
    }
  }, [isAuthenticated]);

  // Always render something immediately
  // Show loading indicator while auth state is unknown
  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // After redirecting, render <Slot /> so the navigator mounts
  return <Slot />;
}

