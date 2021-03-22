import { useState } from 'react'

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        img: '',
        type: 'personal'
    })

    const { name, email, phone, img, type } = contact

    const onChange = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    return (
        <form className="add-contact-form">
            <h2>Add Contact</h2>
            <div className="form-group">
                <label for="name" class="control-label">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label for="email" class="control-label">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label for="phone" class="control-label">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label for="url" class="control-label">Image URL</label>
                <input
                    type="url"
                    name="img"
                    value={img}
                    onChange={onChange}
                    className="form-control"
                    />
            </div>
            <div className="form-group-radio">
                <label for="type" class="control-label">Contact Type</label>
                <div className="form-control-radio">
                    <input
                        type="radio"
                        name="type"
                        value="personal"
                        checked={type === "personal"}
                        /> Personal{" "}
                    <input
                        type="radio"
                        name="type"
                        value="professional"
                        checked={type === "professional"}
                        /> Professional{" "}
                </div>
            </div>
            <div className="center">
                <input className="btn btn-success" type='submit' value="SUBMIT" />
            </div>
        </form>
    )
}

export default ContactForm