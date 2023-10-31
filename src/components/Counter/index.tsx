import { styles } from "./styles";
import { Text, View } from "react-native";

type Props = {
  name: string;
  textColor: string;
};

export function Counter({ name, textColor }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>{name}</Text>
      <View style={styles.numberView}>
        <Text style={styles.numberText}>0</Text>
      </View>
    </View>
  );
}
