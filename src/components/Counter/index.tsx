import { styles } from "./styles";
import { Text, View } from "react-native";

type Props = {
  name: string;
  textColor: string;
  quantity: number;
};

export function Counter({ name, textColor, quantity }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>{name}</Text>
      <View style={styles.numberView}>
        <Text style={styles.numberText}>{quantity}</Text>
      </View>
    </View>
  );
}
