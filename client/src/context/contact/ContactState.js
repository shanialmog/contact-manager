import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
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
                img: 'https://www.clipartmax.com/png/middle/25-253041_abraham-lincoln-former-paralegal-cartoon.png',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Berry Ber',
                email: 'Ber@gmail.com',
                phone: '222-222-222',
                img: 'https://i.pinimg.com/736x/81/b5/fe/81b5feba274871b01edfbb07f0d59af6.jpg',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Cindy Ci Centimfloids Von Crease',
                email: 'ci@gmail.com',
                phone: '333-33-333',
                img: 'https://i.pinimg.com/originals/eb/55/f9/eb55f9e8e1a861c234990090afd89fd8.jpg',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = (contact) => {
        contact.id = uuid()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete Contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // Set Current Contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update Contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // Filter Contact
    const filterContact = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    // Clear Contact
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                clearCurrent,
                addContact,
                updateContact,
                deleteContact,
                setCurrent,
                filterContact,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState