import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <FlatList 
        data={exercises}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(exercise, index) => exercise.name + index}
        renderItem={({item}) => <ExerciseListItem exercise={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    padding: 10,
  }
});
