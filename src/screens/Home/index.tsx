import { styles } from "./styles";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { CreateTask } from "../../components/CreateTask";
import { DisplayTasks } from "../../components/DisplayTasks";
import { TaskType } from "../../types/task";

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <View style={styles.container}>
      <Header />
      <CreateTask setTasks={setTasks} />
      <DisplayTasks tasks={tasks} setTasks={setTasks} />
    </View>
  );
}
