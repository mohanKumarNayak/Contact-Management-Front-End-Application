const intialState = []

const contactReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_CONTACTS' : {
            return [...action.payload]
        }
        case 'ADD_NEW_CONTACT' : {
            return [...state,action.payload]
        }
        case 'REMOVE_CONTACT' : {
            return state.filter(contact=>contact._id!=action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default contactReducer