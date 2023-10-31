import { styles } from "./styles";
import { FlatList, View, Text, Image } from "react-native";
import { Counter } from "../Counter";
import { EmptyComponent } from "../EmptyComponent";
import { Task } from "../Task";

type Props = {
  tasks: string[];
};

export function DisplayTasks({ tasks }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Counter name="Created" textColor="#4EA8DE" />
        <Counter name="Done" textColor="#8284FA" />
      </View>
      <FlatList
        style={{ marginBottom: 32 }}
        data={tasks}
        ListEmptyComponent={EmptyComponent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Task description={item} />}
      />
    </View>
  );
}
