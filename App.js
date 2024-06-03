import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>

      <Text style={styles.exerciseName}>{exercises[0].name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {capitalize(exercises[0].muscle)} | {capitalize(exercises[0].equipment)}
      </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
});
