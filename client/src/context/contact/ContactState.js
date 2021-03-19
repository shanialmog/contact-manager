import { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Abraham Abe',
                email: 'abe@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Berry Ber',
                email: 'Ber@gmail.com',
                phone: '222-222-222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Cindy Ci',
                email: 'ci@gmail.com',
                phone: '333-33-333',
                type: 'Professional'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contact

    // Clear Contact

    return (
        <ContactContext.Provider
            value={{
                contact: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState