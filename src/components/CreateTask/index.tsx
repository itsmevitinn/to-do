import { styles } from "./styles";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export function CreateTask({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleTaskAdd(newTask: string) {
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#808080"
        value={task}
        onChangeText={setTask}
        style={[styles.input, isFocused && { borderColor: "#5E60CE" }]}
        placeholder="Add a new task"
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTaskAdd(task)}
      >
        <Image alt="Plus button" source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
}
