import { StyleSheet, Text, View,  } from "react-native";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ExerciseListItem({ exercise }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {capitalize(exercise.muscle)} | {capitalize(exercise.equipment)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});


export default ExerciseListItem;