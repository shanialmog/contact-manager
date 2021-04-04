import { useContext } from 'react'
import AlertContext from '../../../context/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertContext)

    const { alerts } = alertContext

    console.log(alerts)
    return (
        alerts.length > 0 &&
        alerts.map((alert) => {
            return (
                <div key={alert.id} className="alert-block">
                    {console.log("alert", alert)}
                    {/* <div key={alert.id} className={`alert alert-${alert.type}`}> */}
                    <i className='fad fa-info-circle' /> {alert.msg}
                </div>
            )
        })
    )
}

export default Alerts