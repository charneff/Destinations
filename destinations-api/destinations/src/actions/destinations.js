export const getDestinations = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_DESTINATIONS' })
        return fetch('./destinations')
            .then(res => res.json())
            .then(destinations => dispatch({ type: "FETCH_DESTINATIONS", payload: destinations }))
    }
}

export const addDestination = (destination) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_DESTINATION' }, destination)
        return fetch('/destinations', {
                method: 'POST',
                body: JSON.stringify(destination),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(destination => {
                dispatch({ type: 'DESTINATION_ADDED', payload: destination })

            })
    }
}

export const completeDestination = (destination) => {
    return(dispatch) => {
        dispatch({ type: 'COMPLETE_DESTINATION' }, destination)
        return fetch(`/destinations/${destination.id}`, {
            method: 'PUT',
            body: JSON.stringify(destination),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(destination => {
            dispatch({ type: 'DESTINATION_COMPLETED', payload: destination})
        })
    }
}
