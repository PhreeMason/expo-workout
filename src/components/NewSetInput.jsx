import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { addNewSet } from '../../api/sets'

const NewSetInput = () => {
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    const addSet = () => {
        console.warn('Add set', reps, weight)
        addNewSet({ reps, weight, exercise: 'Pushups' })
        setReps('')
        setWeight('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Reps"
                style={styles.input}
                value={reps}
                onChangeText={setReps}
                keyboardType='numeric'
            />
            <TextInput
                placeholder="Weight"
                style={styles.input}
                value={weight}
                onChangeText={setWeight}
                keyboardType='numeric'
            />
            <Button title="Add" onPress={addSet} />
        </View>
    )
}

export default NewSetInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        gap: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        flex: 1,
        borderRadius: 5,
        borderColor: 'gainsboro'
    }
})