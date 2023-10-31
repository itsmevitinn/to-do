import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function EmptyComponent() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/clipboard.png")} />
      <Text style={styles.title}>You don't have tasks registered yet</Text>
      <Text style={styles.description}>
        Create tasks and organize your to-do items
      </Text>
    </View>
  );
}
