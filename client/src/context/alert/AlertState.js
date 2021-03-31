import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from '../types'
import alertContext from '../alert/alertContext'
import alertReducer from '../alert/alertReducer'

const AlertState = (props) => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type) => {
        const id = uuid()
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })
    }

    // Remove Alert
    const removeAlert = (msg, type, id) => {
        dispatch({ type: REMOVE_ALERT, payload: id })
    }

    return (
        <alertContext.Provider
            value={{
                alerts: state,
                setAlert,
                removeAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState