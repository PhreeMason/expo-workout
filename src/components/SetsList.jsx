import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchSets } from '../../api/sets'

const SetsList = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["sets"],
        queryFn: fetchSets
    })

    if (isLoading) return <ActivityIndicator />;

    if (error) return <Text>Network error making your request, try again later</Text>;
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.container}>
                    {item.weight} x {item.reps}
                </Text>}
            />
        </View>
    )
}

export default SetsList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
})