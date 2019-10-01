export default (state = { items: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_ITEMS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_ITEMS':
            return {
                items: action.payload,
                loading: false
            }
        case 'ADD_ITEM':
            console.log('Got item to add')
            return {
                ...state,
                loading: true
            }

        case 'ITEM_ADDED':
            console.log("added the item")
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false
            }
        
        case 'COMPLETE_ITEM':
            return {
                ...state,
                loading: true
            }

        case 'ITEM_COMPLETED':
            let newItems = state.items.filter(item => item.id !== action.payload.id).concat(action.payload)
            return {
                ...state,
                items: newItems,
                loading: false
            }

        default:
            return state
    }
}