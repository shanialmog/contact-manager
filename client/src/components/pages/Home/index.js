import { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Contacts from '../../contacts/Contacts'
import ContactFilter from '../../contacts/ContactFilter'
import AuthContext from '../../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log("running")
        authContext.loadUser()
        // eslint-disabled-next-line
    }, [])


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