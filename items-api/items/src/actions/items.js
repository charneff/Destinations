export const getItems = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ITEMS' })
        return fetch('/items')
            .then(res => res.json())
            .then(items => dispatch({ type: "FETCH_ITEMS", payload: items }))
    }
}

export const addItem= (item) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_ITEM' }, item)
        return fetch('/items', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(item => {
                dispatch({ type: 'ITEM_ADDED', payload: item })

            })
    }
}

export const completeItem = (item) => {
    return(dispatch) => {
        dispatch({ type: 'COMPLETE_ITEM' }, item)
        return fetch(`/items/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(item => {
            dispatch({ type: 'ITEM_COMPLETED', payload: item})
        })
    }
}

export const deleteItem = (item) => {
    return(dispatch) => {
        dispatch({ type: 'DELETE_ITEM' })
        return fetch(`items/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(dispatch({ type: 'ITEM_DELETED', payload: item }))
        .catch(err => console.error(err))
    }
}