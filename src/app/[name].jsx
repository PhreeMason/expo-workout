import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { fetchExercises } from "../../api/exercises";
import { useQuery } from "@tanstack/react-query";
import NewSetInput from "../components/NewSetInput";
import SetsList from "../components/SetsList";

export default function ExerciseDetailsScreen() {
    const [expandInstructions, setExpandInstructions] = useState(false);
    const { name } = useLocalSearchParams();
    const { data: exercise, isLoading, error } = useQuery({
        queryKey: ["exercise", name],
        queryFn: () => fetchExercises('name', name)
    });

    if (isLoading) return <ActivityIndicator  />;

    if (error) return <Text>Network error making your request, try again later</Text>;

    if (!exercise) {
        return <Text>Exercise not found</Text>;
    }

    const { name: exerciseName, type, muscle, equipment, instructions, difficulty } = exercise[0];
    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={{ title: name }} />
            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    <Text style={styles.subValue}>{muscle}</Text> |{" "}
                    <Text style={styles.subValue}>{equipment}</Text>
                </Text>
            </View>
            <View style={styles.panel}>
                <Text
                    style={styles.instructions}
                    numberOfLines={expandInstructions ? 0 : 3}>
                    {instructions}
                </Text>
                <Text
                    onPress={() => setExpandInstructions(!expandInstructions)}
                    style={styles.seeMore}>{expandInstructions ? "See less" : "See more"}
                </Text>
            </View>
            <NewSetInput />
            <SetsList name={name} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: "500",
    },
    exerciseSubtitle: {
        color: "dimgray",
    },
    subValue: {
        textTransform: "capitalize",
    },
    seeMore: {
        alignSelf: "flex-end",
        color: "blue",
        padding: 5,
        fontWeight: "bold",
    },
    instructions: {
        fontSize: 16,
        lineHeight: 20,
    },
});
