import { useContext, useState } from 'react'

const ContactItem = ({ contact }) => {
    const [isOpen, setIsOpen] = useState(false)

    const { id, name, email, phone, img, type } = contact

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    return (
        <div className="contact-card">
            <div className="contact-card-title" onClick={toggle}>
                <img className="contact-img" src={img} alt="" />
                <div className='contact-name'>
                    {name}
                </div>
                <div className={(type === "professional" ?
                    "badge badge-professional" : "badge badge-personal")} >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
                {
                    isOpen ?
                        <span className="fa-stack">
                            <i className="fa fa-circle fa-stack-2x icon-bg fa-inverse"></i>
                            <i className="fal fa-angle-up fa-stack-1x "></i>
                        </span>
                    :
                        <span className="fa-stack">
                            <i className="fa fa-circle fa-stack-2x icon-bg fa-inverse"></i>
                            <i className="fal fa-angle-down fa-stack-1x "></i>
                        </span>
                }
            </div>
            {
                isOpen &&
                <div>
                    blah blah
                </div>
            }
        </div>
    )
}

export default ContactItem