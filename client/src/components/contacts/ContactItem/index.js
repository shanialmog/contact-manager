import { Fragment, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [edit, setEdit] = useState(false)

    const { id, name, email, phone, img, type } = contact

    const toggleCard = () => {
        setIsOpen(!isOpen)
    }

    const isEdit = () => {
        setEdit(true)
    }

    const isCancel = () => {
        setEdit(false)
    }

    return (
        <div className="contact-card">
            <div className="contact-card-title" onClick={toggleCard}>
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
                <div className="contact-card-open">
                    <ul>
                        {
                            email && (
                                <li>
                                    <i className="far fa-at"></i> {email}
                                </li>
                            )
                        }
                        {
                            phone && (
                                <li>
                                    <i className="fas fa-phone"></i> {phone}
                                </li>
                            )
                        }
                    </ul>
                    <p>
                        {
                            edit
                                ?
                                (
                                    <Fragment>
                                        <button className="btn btn-danger"><i className="fal fa-trash-alt" /> DELETE</button>
                                        <button className="btn" onClick={isCancel}><i className="fal fa-times-circle" /> CANCEL</button>
                                    </Fragment>
                                )
                                :
                                <button className="btn btn-success" onClick={isEdit}><i className="fal fa-pen" /> EDIT</button>
                        }
                    </p>
                </div>
            }
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem