import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { fetchExercises } from "../../api/exercises";

export default function App() {
    const { data, isLoading } = useQuery({
        queryKey: ['exercises'],
        queryFn: () => fetchExercises('muscle', 'biceps'),
    });

    if (isLoading || !data) return <ActivityIndicator />;
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                contentContainerStyle={{ gap: 10 }}
                keyExtractor={(exercise, index) => exercise.name + index}
                renderItem={({ item }) => <ExerciseListItem exercise={item} />}
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
