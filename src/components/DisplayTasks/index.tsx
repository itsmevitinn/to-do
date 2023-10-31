import { styles } from "./styles";
import { FlatList, View } from "react-native";
import { Counter } from "../Counter";
import { EmptyComponent } from "../EmptyComponent";
import { useState } from "react";
import { Task } from "../Task";
import { TaskType } from "../../types/task";

type Props = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export function DisplayTasks({ tasks, setTasks }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Counter name="Created" textColor="#4EA8DE" quantity={tasks.length} />
        <Counter
          name="Done"
          textColor="#8284FA"
          quantity={tasks.filter((task) => task.done == true).length}
        />
      </View>
      <FlatList
        style={{ marginBottom: 32 }}
        data={tasks}
        ListEmptyComponent={EmptyComponent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Task task={item} setTasks={setTasks} />}
      />
    </View>
  );
}
