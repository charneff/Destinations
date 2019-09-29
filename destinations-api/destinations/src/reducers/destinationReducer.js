export default (state = { destinations: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_DESTINATIONS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_DESTINATIONS':
            return {
                destinations: action.payload,
                loading: false
            }
        case 'ADD_DESTINATION':
            console.log('Got destination to add')
            debugger
            return {
                ...state,
                loading: true
            }

        case 'DESTINATION_ADDED':
            console.log("added the destination")
            return {
                ...state,
                destinations: [...state.destinations, action.payload],
                loading: false
            }
        
        case 'COMPLETE_DESTINATION':
            return {
                ...state,
                loading: true
            }

        case 'DESTINATION_COMPLETED':
            let newDestinations = state.destinations.filter(destination => destination.id !== action.payload.id).concat(action.payload)
            return {
                ...state,
                destinations: newDestinations,
                loading: false
            }

        default:
            return state
    }
}