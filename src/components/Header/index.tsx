import { styles } from "./styles";
import { View, Image } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        alt="Todo"
        source={require("../../assets/images/logo.png")}
      ></Image>
    </View>
  );
}
