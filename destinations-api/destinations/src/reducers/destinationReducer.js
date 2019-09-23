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

        default:
            return state
    }
}