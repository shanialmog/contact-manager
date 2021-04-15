import { useContext, useState, useEffect, Fragment } from 'react'
import ContactContext from '../../../context/contact/contactContext'
import { Redirect } from 'react-router-dom'

const ContactForm = ({ match, location }) => {
    const contactContext = useContext(ContactContext)

    const { addContact, updateContact, current, deleteContact, clearCurrent } = contactContext

    // useEffect(() => {
    //     if (location.pathname == '/add-contact') {
    //         clearCurrent()
    //         setContact({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             img: '',
    //             type: 'personal'
    //         })
    //         console.log(location.pathname)
    //     }
    //     }, [])

    useEffect(() => {
        if (location.pathname == '/add-contact') {
            clearCurrent()
            setContact({
                name: '',
                email: '',
                phone: '',
                img: '',
                type: 'personal'
            })
        } else if (current !== null) {
            setContact(current)
        }
    }, [current])

    // useEffect(() => {
    //     if (current !== null) {
    //         setContact(current)
    //     } else {
    //         setContact({
    //             name: '',
    //             email: '',
    //             phone: '',
    //             img: '',
    //             type: 'personal'
    //         })
    //     }
    // }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        img: '',
        type: 'personal'
    })
    const [fireRedirect, setFireRedirect] = useState(false)

    const { name, email, phone, img, type } = contact

    const onChange = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    const onCancel = () => {
        clearCurrent()
        setFireRedirect(true)
    }

    const onDelete = () => {
        console.log("delete", typeof match.params.id)
        deleteContact(match.params.id)
        clearCurrent()
        setFireRedirect(true)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (current === null) {
            if (contact.img == '') {
                addContact({
                    ...contact,
                    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                })
            } else {
                addContact(contact)
            }
            setContact({
                name: '',
                email: '',
                phone: '',
                img: '',
                type: 'personal'
            })
        } else {
            updateContact(contact)
        }
        clearCurrent()
        setFireRedirect(true)
    }

    const submitDisabled = (contact.name.length > 0 && contact.email.length > 0 && (contact.phone.length > 0 && contact.phone.match("[0-9\-\.\+]+"))) ? false : true

    return (
        <form onSubmit={onSubmit} className="form-container">
            <h2>{current ? "Edit Contact" : "Add Contact"}</h2>
            <div className="form-group">
                <label htmlFor="name" className="control-label required">Name</label>
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
                <label htmlFor="email" className="control-label required">Email</label>
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
                <label htmlFor="phone" className="control-label required">Phone</label>
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
                {
                    current ?
                        <div className="form-buttons">
                            <button type="button" className="btn btn-danger" onClick={onDelete}><i className="fal fa-trash-alt" /> DELETE</button>
                            <button type="button" className="btn" onClick={onCancel}><i className="fal fa-times-circle" /> CANCEL</button>
                            <button className="btn btn-success"><i className="fal fa-pen" /> SAVE</button>
                            {fireRedirect && (
                                <Redirect to="/" />
                            )}
                        </div>
                        :
                        <Fragment>
                            <input className="btn btn-success" type="submit" value="SUBMIT" disabled={submitDisabled} />
                            {fireRedirect && (
                                <Redirect to="/" />
                            )}
                        </Fragment>
                }
            </div>
        </form>
    )
}

export default ContactForm