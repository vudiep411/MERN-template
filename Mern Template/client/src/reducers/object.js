export default (state = {people: []}, action) => {
    switch(action.type) {
        case 'TEST':
            return {...state, people: action.payload}
        default:
            return state
        
    }
    
}