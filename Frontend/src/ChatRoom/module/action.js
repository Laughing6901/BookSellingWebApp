import * as ActionType from "./constants"

export const actFetchUser = () => {
    return{
        type: ActionType.FETCH_USER_SUCCESS,
    }
}