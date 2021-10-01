import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text, FAB, List} from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addbudget, deletebudget}  from '../redux/budgetReducer'

function BudgetListingScreen({navigation}) {
    // const [budgets, setBudgets]= useState([])

    const budgets = useSelector(state => state)
    const dispatch = useDispatch()

    const addBudget = budget => {
        console.log(budget)
        dispatch(addbudget(budget))
    }

    const deleteBudget = id =>dispatch(deletebudget(id))

    // const addBudgets = budget => {
    //     budget.id = budgets.length + 1
    //     setBudgets([...budgets, budget])
    // }

    return (
        <>
        <View style={styles.container}>
        <FlatList
        
                data={budgets}
                renderItem={({ item }) => (
                    <List.Item
                        catagory={item.budget.catagory}
                        amount={item.budget.plannedAmount}
                        titleStyle={styles.listTitle}
                        onPress = {()=> deleteBudget(item.id)}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
                                
                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='New Entry'
                    onPress={() => navigation.navigate('Budget Entry', {
                        addBudget
                    })
                    }
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
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
    },
    listTitle: {
        fontSize: 20
    }
})

export default BudgetListingScreen
