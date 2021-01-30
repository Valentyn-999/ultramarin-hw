import { AppStoreType } from "./store";

export type InitStateType = {
    loading: boolean
}

const initState:InitStateType = {
    loading: false
};

export const loadingReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    debugger
    switch (action.type) {
        case "loading": {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean) => ({ type: 'loading', payload: {loading} } as const); // fix any

type ActionsType = ReturnType<typeof loadingAC>