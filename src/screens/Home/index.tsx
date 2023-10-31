import { styles } from "./styles";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { CreateTask } from "../../components/CreateTask";
import { DisplayTasks } from "../../components/DisplayTasks";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleTaskAdd(newTask: string) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <CreateTask setTasks={setTasks} />
      <DisplayTasks tasks={tasks} />
    </View>
  );
}
