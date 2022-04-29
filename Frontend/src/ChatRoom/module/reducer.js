import * as ActionType from "./constants"

const initialState = {
    data: [
            {id: '1', firstName: "Sarah", lastName: "Phan"},
            {id: '2', firstName: "Sally", lastName: "Phan"},
            {id: '3', firstName: "Margaret", lastName: "Phan"},
            {id: '4', firstName: "Ann", lastName: "Phan"},
    ]
}

export const fetchUserReducer = (state = initialState, action) => {
    switch(action.type){
        case(ActionType.FETCH_USER_SUCCESS):{
            return {...state}
        }
        default:
            return {...state}
    }
}