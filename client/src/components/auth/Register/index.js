import { Fragment, useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("register submit")
    }

    const submitDisabled = (name.length > 0 && email.length > 0 && password.length > 0 && password2.length > 0 && password === password2) ? false : true

    return (
        <Fragment>
            <form onSubmit={onSubmit} className="form-container">
                <h2>
                    Account <span className="text-form">Register</span>
                </h2>
                <div className="form-group">
                    <label htmlFor="name" className="control-label required" >Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="control-label required" >Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label required" >Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2" className="control-label required" >Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} />
                </div>
                <div className="center">
                <input className="btn btn-success" type="submit" value="REGISTER" disabled={submitDisabled} />
                </div>
            </form>
        </Fragment>
    )
}

export default Register