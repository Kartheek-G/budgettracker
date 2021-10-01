import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../components/Header'


function BudgetEntryScreen({ navigation }) {
    const [catagory, setCatagory] = useState("")
    const [plannedAmount, setPlannedAmount] = useState("")
    const [actualAmount, setActualAmount] = useState("")

    function onSaveBudget(){
        navigation.state?.params?.addBudget({catagory, plannedAmount, actualAmount})
        navigation.goBack()
    }

    return (
        <>
        <Header titleText='Budget Plan'/>
        <IconButton
            icon="close"
            size={25}
            color='white'
            onPress={() => navigation.goBack()}
            style={styles.iconButton}
        />
        <View style={styles.container}>
                <TextInput
                    label="Catagory"
                    value={catagory}
                    mode='outlined'
                    onChangeText={setCatagory}
                    style={styles.title}
                />
                <TextInput
                    label="Planned Amount"
                    value={plannedAmount}
                    mode='outlined'
                    onChangeText={setPlannedAmount}
                    style={styles.title}
                />
                <TextInput
                    label="Actual Amount"
                    value={actualAmount}
                    mode='outlined'
                    onChangeText={setActualAmount}
                    style={styles.title}
                />
                
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={catagory == '' ? true : false}
                    onPress={() => onSaveBudget()}
                />
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }
})

export default BudgetEntryScreen
