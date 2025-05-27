import { Text, View, Button } from "react-native";
import '../global.css';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>You shouldn't be on this screen.</Text>
    </View>
  );
}
