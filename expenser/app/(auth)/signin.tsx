import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
    const router = useRouter();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{
                marginBottom: 20,
                fontSize: 24,
            }}>Sign In Screen</Text>
            <Button
                title="Sign In"
                onPress={() => {
                    // Handle sign-in logic here
                    router.replace("/(app)/home");
                }}
            />
        </View>
    );
}