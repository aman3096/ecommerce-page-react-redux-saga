import * as actionz from "./types";

export const addBug = (description)=> ({
        type: actionz.ADD_BUG,
        payload: {
            description: description,
        }  
})

export const removeBug = (id)=> ({
    type: actionz.REMOVE_BUG,
    payload: {
        id: id
    }
})

export const resolveBug = (id, description)=> ({
    type: actionz.RESOLVE_BUG,
    payload: {
        id: id,
        description: description
    }
})