import { useContext } from 'react'
import AlertContext from '../../../context/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertContext)

    const { alerts } = alertContext

    return (
        alerts.length > 0 &&
        alerts.map((alert) => {
            return (
                <div key={alert.id} className="alert">
                    <i className='fad fa-info-circle' /> {alert.msg}
                </div>
            )
        })
    )
}

export default Alerts