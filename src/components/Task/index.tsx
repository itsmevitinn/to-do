import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  description: string;
};

export function Task({ description }: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(toggleCheckBox);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BouncyCheckbox
          onPress={(isChecked) => setToggleCheckBox(isChecked)}
          style={styles.checkBox}
          size={18}
          fillColor="#5E60CE"
        />
        <Text style={styles.description}>{description}</Text>
        <Image source={require("../../../assets/trash.png")} />
      </View>
    </View>
  );
}
