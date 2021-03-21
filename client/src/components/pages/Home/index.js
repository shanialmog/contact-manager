import Contacts from '../../contacts/Contacts'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        // <div className="grid-2">
        <div>
            <div>
                <Contacts />
            </div>
            <div >
                <Link to="/add-contact" className="add-contact-btn btn"><i className="fal fa-plus" /> ADD CONTACT</Link>
            </div>
        </div>
    )
}

export default Home