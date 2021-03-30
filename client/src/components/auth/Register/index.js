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

    return (
        <Fragment>
            <form onSubmit={onSubmit} className="form-container">
            <h2>
                Account <span className="text-form">Register</span>
            </h2>
                <div className="form-group">
                    <label htmlFor="name" className="control-label">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="control-label">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2" className="control-label">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} />
                </div>
                <div className="center">
                <button type="submit" className="btn btn-success">REGISTER</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Register