import { Fragment, useContext } from 'react'
import ContactContext from '../../../context/contact/contactContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from '../ContactItem'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered } = contactContext

    if (contacts.length === 0) {
        return <div className="no-contacts-title"><h4>No Contacts yet</h4></div>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null ?
                    filtered.map(
                        (contact) => (
                            <CSSTransition key={contact.id} timeout={400} classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        ))
                    :
                    contacts.map(
                        contact => (
                            <CSSTransition key={contact.id} timeout={400} classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        ))
                }
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts