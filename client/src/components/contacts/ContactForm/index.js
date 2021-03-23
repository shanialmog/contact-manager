import { useContext, useState } from 'react'
import ContactContext from '../../../context/contact/contactContext'
import { Redirect } from 'react-router-dom'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)


    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        img: '',
        type: 'personal'
    })
    const [fireRedirect, setRedirect] = useState(false)

    const { name, email, phone, img, type } = contact

    const onChange = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (contact.img == '') {
            contactContext.addContact({
                ...contact,
                img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            })
        } else {
            contactContext.addContact(contact)
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            img: '',
            type: 'personal'
        })
        setRedirect(true)
    }

    const submitDisabled = (contact.name.length > 0 && contact.email.length > 0 && (contact.phone.length > 0 && contact.phone.match("[0-9\-\.\+]+"))) ? false : true

    return (
        <form onSubmit={onSubmit} className="add-contact-form">
            <h2>Add Contact</h2>
            <div className="form-group">
                <label htmlFor="name" className="control-label">Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="control-label">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className="control-label">Phone</label>
                <input
                    required
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    pattern="[0-9\-\.\+]+"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="url" className="control-label">Image URL</label>
                <input
                    type="url"
                    name="img"
                    value={img}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
            <div className="form-group-radio">
                <label htmlFor="type" className="control-label">Contact Type</label>
                <div className="form-control-radio">
                    <input
                        type="radio"
                        name="type"
                        value="personal"
                        checked={type === "personal"}
                        onChange={onChange}
                    /> Personal{" "}
                    <input
                        type="radio"
                        name="type"
                        value="professional"
                        checked={type === "professional"}
                        onChange={onChange}
                    /> Professional{" "}
                </div>
            </div>
            <div className="center">
                <input className="btn btn-success" type='submit' value="SUBMIT" disabled={submitDisabled} />
                {fireRedirect && (
                    <Redirect to="/" />
                )}
            </div>
        </form>
    )
}

export default ContactForm