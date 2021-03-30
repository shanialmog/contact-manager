import { Fragment, useContext, useRef, useEffect } from 'react'
import ContactContext from '../../../context/contact/contactContext'


const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const text = useRef('')

    const { filterContact, clearFilter, filtered } = contactContext

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ""
        }
    })

    const onChange = (e) => {
        if (text.current.value !== '') {
            filterContact(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <form>
            <label htmlFor="filter" className="control-label">Search Contacts </label>
            <input ref={text} type="text" name="filter" onChange={onChange} />
        </form>
    )
}

export default ContactFilter