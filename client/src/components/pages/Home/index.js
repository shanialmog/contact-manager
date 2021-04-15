import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Contacts from '../../contacts/Contacts'
import ContactFilter from '../../contacts/ContactFilter'

const Home = () => {
    return (
        <div className="home-wrapper">
            <Fragment>
                <ContactFilter />
                <Contacts />
            </Fragment>
            <div >
                <Link to="/add-contact" className="add-contact-btn btn"><i className="fal fa-plus" /> ADD CONTACT</Link>
            </div>
        </div>
    )
}

export default Home