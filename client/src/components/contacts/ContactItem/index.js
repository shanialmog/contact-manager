import { useContext } from 'react'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, img, type } = contact
    return (
        <div className="contact-card">
            <img className="contact-img" src={img} alt="" />
            <div className='contact-name'>
                {name}
            </div>
            <div className={(type === "professional" ?
                "badge badge-professional" : "badge badge-personal")} >{type}
            </div>
        </div>
    )
}

export default ContactItem