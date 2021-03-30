import { Fragment, useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user

    const onChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("register submit")
    }

    const submitDisabled = (email.length > 0 && password.length > 0) ? false : true

    return (
        <Fragment>
            <form onSubmit={onSubmit} className="form-container form-login">
                <h2>
                    Account <span className="text-form">Login</span>
                </h2>
                <div className="form-group">
                    <label htmlFor="email" className="control-label required" >Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label required" >Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="center">
                    <input className="btn btn-success" type="submit" value="LOGIN" disabled={submitDisabled} />
                </div>
            </form>
        </Fragment>
    )
}

export default Login