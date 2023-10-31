import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Alert } from "react-native";
import { TaskType } from "../../types/task";

type Props = {
  task: TaskType;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export function Task({ task, setTasks }: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function handleRemoveTask() {
    Alert.alert("Delete", "Are you sure you want to delete this task?", [
      {
        text: "Yes",
        onPress: () =>
          setTasks((prevTasks) => prevTasks.filter((item) => item != task)),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  }

  function handleTaskChecked(isChecked: boolean) {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id == task.id ? { ...item, done: isChecked } : item
      )
    );
    setToggleCheckBox(isChecked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BouncyCheckbox
          onPress={(isChecked) => handleTaskChecked(isChecked)}
          size={18}
          fillColor="#5E60CE"
        />
        <Text
          style={[
            styles.description,
            toggleCheckBox && {
              textDecorationLine: "line-through",
              color: "#808080",
            },
          ]}
        >
          {task.description}
        </Text>
        <TouchableOpacity onPress={handleRemoveTask}>
          <Image source={require("../../assets/images/trash.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
