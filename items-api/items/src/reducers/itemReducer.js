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
            console.log('got item to complete')
            return {
                ...state,
                loading: true
            }

        case 'ITEM_COMPLETED':
            console.log('completed item')
            let newItems = state.items.filter(item => item.id !== action.payload.id).concat(action.payload)
            return {
                ...state,
                items: newItems,
                loading: false
            }

        case 'DELETE_ITEM':
            console.log('got item to delete')
            return {
                ...state,
                loading: true
            }

        case 'ITEM_DELETED':
            console.log('deleted item')
            let newList = state.items.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                items: newList,
                loading: false
            }

        case 'EDIT_ITEM':
            console.log('got item to edit')
            return{
                ...state,
                loading: true
            }

        case 'ITEM_EDITED':
            console.log('edited item')
            return{
                ...state,
                loading: false
            }
            

        default:
            return state
    }
}