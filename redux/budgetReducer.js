import { remove } from "lodash"
export const CREATE_BUDGET = 'CREATE_BUDGET'
export const DELETE_BUDGET = 'DELETE_BUDGET'


let budgetID = 0

//Action
export function addbudget(budget) {
    return {
        type: CREATE_BUDGET,
        id: budgetID++,
        budget
    }
}

export function deletebudget(id) {
    return {
        type: DELETE_BUDGET,
        payload: id,
    }
}

// Reducers

// const initialState = {
//     budgets: [
//         {
//           "budgetID": 1,
//           "catagory":"Technology",
//           "plannedAMount": 1200,
//           "actualAmount": 1500,
//         },
//         {
//             "budgetID": 2,
//             "catagory":"Technology",
//             "plannedAMount": 1200,
//             "actualAmount": 1500,
//           },
//           {
//             "budgetID": 3,
//             "catagory":"Technology",
//             "plannedAMount": 1200,
//             "actualAmount": 1500,
//           },
//           {
//             "budgetID": 4,
//             "catagory":"Technology",
//             "plannedAMount": 1200,
//             "actualAmount": 1500,
//           }],
//         budget: null,
    
// }

const initialState = []

function budgetReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_BUDGET:
            return [
                ...state,
                {
                    id: action.id,
                    budget: action.budget
                }
            ]

        case DELETE_BUDGET:
            const deleteNewArray = remove(state, obj => {
                return obj.id != action.payload
            })

            return deleteNewArray

        default:
            return state
    }

}

export default budgetReducer