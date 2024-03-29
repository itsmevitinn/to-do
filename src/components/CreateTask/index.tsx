import { styles } from "./styles";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";
import { TaskType } from "../../types/task";
import uuid from "uuid";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export function CreateTask({ setTasks }: Props) {
  const [description, setDescription] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleTaskAdd(description: string) {
    if (description == "") {
      return Alert.alert("You can't add an empty task!");
    }
    setTasks((prevTasks) => [
      { id: uuid.v4(), description: description, done: false },
      ...prevTasks,
    ]);
    setDescription("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#808080"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, isFocused && { borderColor: "#5E60CE" }]}
        placeholder="Add a new task"
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTaskAdd(description)}
      >
        <Image
          alt="Plus icon"
          source={require("../../assets/images/plus.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
