import {initialPeopleType} from "../HW8";

type ActionsType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: Array<initialPeopleType>, action: ActionsType): Array<initialPeopleType> => {
    debugger
    switch (action.type) {
        case "sort": {
            const newState = [...state]
            if (action.payload === "up") {
                const sortedState = newState.sort(function ss(a, b) {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })
                return sortedState
            } else if (action.payload === "down") {
                const sortedState = newState.sort(function ss(a, b) {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })
                return sortedState
            }
            return newState
        }
        case "check": {
            const newState = [...state]
            const newArr: Array<any> = []
            newState.map(user => {
                if (user.age >= 18) {
                    newArr.push(user)
                }
                return newArr
            })
            return newArr
        }
        default:
            return state
    }
};