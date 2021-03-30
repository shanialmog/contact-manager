import { Fragment, useContext } from 'react'
import ContactContext from '../../../context/contact/contactContext'
import ContactItem from '../ContactItem'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered } = contactContext

    if (contacts.length === 0) {
        return <div className="no-contacts-title"><h4>No Contacts yet</h4></div>
    }

    return (
        <Fragment>
            {filtered !== null ?
                filtered.map(
                    (contact) => (
                        <ContactItem key={contact.id} contact={contact} />
                    ))
                :
                contacts.map(
                    contact =>
                        <ContactItem key={contact.id} contact={contact} />
                )
            }
        </Fragment>
    )
}

export default Contacts