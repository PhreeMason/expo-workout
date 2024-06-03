import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exercises[0].name}</Text>
      <Text style={styles.exerciseSubtitle}>
        Muscle: {exercises[0].muscle} | Equipment: {exercises[0].equipment}
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
});
