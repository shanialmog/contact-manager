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

    test('delete contact', () => {
        let state = {
            contacts: [
                {
                    id: '123456',
                    name: 'Alice',
                    email: 'alice_a@email.com'
                },
                {
                    id: '123457',
                    name: 'Bob',
                    email: 'bob@email.com'
                },
                {
                    id: '123458',
                    name: 'Christie',
                    email: 'Christie@email.com'
                }
            ]
        }

        state = contactReducer(state, {
            type: DELETE_CONTACT,
            payload: '123457'
        })
        state = contactReducer(state, {
            type: DELETE_CONTACT,
            payload: '123458'
        })

        const expectedNewState = {
            contacts: [
                {
                    id: '123456',
                    name: 'Alice',
                    email: 'alice_a@email.com'
                }
            ]
        }
        expect(state).toEqual(expectedNewState)
    })

}
)
test('set current', () => {
    let state = {
        current: null
    }

    state = contactReducer(state, {
        type: SET_CURRENT,
        payload: {
            id: '123456',
            name: 'Alice',
            email: 'alice_a@email.com'
        }
    })

    const expectedNewState = {
        current:
        {
            id: '123456',
            name: 'Alice',
            email: 'alice_a@email.com'
        }

    }
    expect(state).toEqual(expectedNewState)
})

test('clear current', () => {
    let state = {
        current:
        {
            id: '123456',
            name: 'Alice',
            email: 'alice_a@email.com'
        }
    }

    state = contactReducer(state, {
        type: CLEAR_CURRENT
    })

    const expectedNewState = {
        current: null
    }
    expect(state).toEqual(expectedNewState)
})

test('filter contacts', () => {
    let state = {
        contacts: [
            {
                id: '123456',
                name: 'Alice',
                email: 'alice_a@email.com',
                phone: '111-111-111'
            },
            {
                id: '123457',
                name: 'Bob',
                email: 'bob@email.com',
                phone: '222-222-222'
            },
            {
                id: '123458',
                name: 'Christie',
                email: 'Christie@email.com',
                phone: '333-333-333'
            }
        ],
        filtered: null
    }

    state = contactReducer(state, {
        type: FILTER_CONTACTS,
        payload: 'Alice'
    })

    const expectedNewState = {
        contacts: [
            {
                id: '123456',
                name: 'Alice',
                email: 'alice_a@email.com',
                phone: '111-111-111'
            },
            {
                id: '123457',
                name: 'Bob',
                email: 'bob@email.com',
                phone: '222-222-222'
            },
            {
                id: '123458',
                name: 'Christie',
                email: 'Christie@email.com',
                phone: '333-333-333'
            }
        ],
        filtered: [
            {
                id: '123456',
                name: 'Alice',
                email: 'alice_a@email.com',
                phone: '111-111-111'
            }
        ]
    }

    expect(state).toEqual(expectedNewState)
})

test('clear filter', () => {
    let state = {
        filtered: [
            {
                id: '123456',
                name: 'Alice',
                email: 'alice_a@email.com',
                phone: '111-111-111'
            },
            {
                id: '123457',
                name: 'Bob',
                email: 'bob@email.com',
                phone: '222-222-222'
            },
            {
                id: '123458',
                name: 'Christie',
                email: 'Christie@email.com',
                phone: '333-333-333'
            }
        ]
    }

    state = contactReducer(state, {
        type: CLEAR_FILTER
    })

    const expectedNewState = {
        filtered: null
    }

    expect(state).toEqual(expectedNewState)
})



