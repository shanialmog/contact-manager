import contactReducer from '../context/contact/contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../context/types'


test('add contact', () => {
    // Arrange(setup)
    let state = {
        contacts: [
            {
                name: 'Alice'
            }
        ]
    }

    // Act
    state = contactReducer(state, {
        type: ADD_CONTACT,
        payload: {
            name: 'Bob'
        }
    })
    state = contactReducer(state, {
        type: ADD_CONTACT,
        payload: {
            name: 'Charlie'
        }
    })

    // Assert
    const expectedNewState = {
        contacts: [
            {
                name: 'Alice'
            },
            {
                name: 'Bob'
            },
            {
                name: 'Charlie'
            }
        ]
    }
    expect(state).toEqual(expectedNewState)
})

describe('update contat', () => {
    test('full contact', () => {
        let state = {
            contacts: [
                {
                    id: '123456',
                    name: 'Alice',
                    email: 'alice_a@email.com'
                },
                {
                    id: '666666',
                    name: 'Alice',
                    email: 'balice@email.com'
                }
            ]
        }
    
        state = contactReducer(state, {
            type: UPDATE_CONTACT,
            payload: {
                id: '123456',
                name: 'Alis',
                email: 'alice_ab@email.com'
            }
        })
    
        const expectedNewState = {
            contacts: [
                {
                    id: '123456',
                    name: 'Alis',
                    email: 'alice_ab@email.com'
                },
                {
                    id: '666666',
                    name: 'Alice',
                    email: 'balice@email.com'
                }
            ]
        }
        expect(state).toEqual(expectedNewState)
    })
})



