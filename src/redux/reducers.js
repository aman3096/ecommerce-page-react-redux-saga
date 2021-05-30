import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./types";

let id = 0;

export const reducers =  (state=[], action)=>{
    switch(action.type){
        case ADD_BUG:
            return [
                ...state,
                {
                    id: ++id,
                    payload: {
                        description: action.payload.description
                    }
                }
            ]
        case REMOVE_BUG: 
            return state.filter(ele=> ele.id!==action.payload.id);
        case RESOLVE_BUG:
            const index = state.indexOf(action.payload.id)
            if(index!==-1){
            const added = [...state.slice(0,index), 
                { 
                    id: action.payload.id,
                    payload: {
                        description: action.payload.description
                    }
                }, ...state.slice(index)];
            return added;
            }
            return state;
        default:
            return state;
    }
}
export default reducers;