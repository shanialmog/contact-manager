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
        const [name, value] = e.target
        setContact({ ...contact, [name]: value })
    }

    return (
        <form className="add-contact-form">
            <h2>Add Contact</h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <input
                type='email'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Image URL'
                name='img'
                value={img}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <div>
                <input type='radio' name='type' value='personal' checked={type === 'personal'}
                /> Personal{' '}
                <input type='radio' name='type' value='professional' checked={type === 'professional'}
                /> Professional{' '}
            </div>
            <div>
                <input className="btn btn-success" type='submit' value='ADD CONTACT' />
            </div>
        </form>
    )
}

export default ContactForm