import { Fragment, useContext, useState } from 'react'
import AlertContext from '../../../context/alert/alertContext'
import AuthContext from '../../../context/auth/authContext'

const Register = () => {
    const authContext = useContext(AuthContext)

    const { register } = authContext

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [password2Error, setPassword2Error] = useState('')


    const { name, email, password, password2 } = user

    const onChange = (e) => {
        setUser((prevState) => {
            const newUser = { ...prevState, [e.target.name]: e.target.value };
            switch (e.target.name) {
                case "name":
                    formValidation("name", newUser)
                    break
                case "email":
                    formValidation("email", newUser)
                    break
                case "password":
                    formValidation("password", newUser)
                    break
                case "password2":
                    formValidation("password2", newUser)
                    break
                default:
                    throw new Error("Unknown field: " + e.target.name)
            }
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const formValidation = (checkInput, newUser) => {
        switch (checkInput) {
            case "name":
                if (newUser.name.length <= 2) {
                    setNameError("Username must be at least 3 characters")
                } else {
                    setNameError('')
                }
                break
            case "email":
                if (!newUser.email.includes('@')) {
                    setEmailError("Enter a valid email \"example@example.com\"")
                } else {
                    setEmailError('')
                }
                break
            case "password":
                if (newUser.password.length <= 7) {
                    setPasswordError("Password must be at least 8 characters")
                } else {
                    setPasswordError('')
                }
                break
            case "password2":
                if (newUser.password !== newUser.password2) {
                    setPassword2Error("Passwords do not match")
                } else {
                    setPassword2Error('')
                }
                break
            default:
                return
        }
    }

    const clearFormErrors = () => {
        setNameError('')
        setEmailError('')
        setPasswordError('')
        setPassword2Error('')
    }

    const submitDisabled = (name.length > 0 && email.length > 0 && password.length > 0 && password2.length > 0 && password === password2) ? false : true

    const onSubmit = (e) => {
        e.preventDefault()
        clearFormErrors()
        register({
            name,
            email,
            password
        })
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit} className="form-container">
                <h2>
                    Account <span className="text-form">Register</span>
                </h2>
                <div className="form-group">
                    <label htmlFor="name" className="control-label required" >Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                    {
                        (nameError.length > 0) &&
                        <div className="alert alert-error">
                            <i className='fad fa-info-circle' /> {nameError}
                        </div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="control-label required" >Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                    {
                        emailError.length > 0 &&
                        <div className="alert alert-error">
                            <i className='fad fa-info-circle' /> {emailError}
                        </div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label required" >Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="8"
                        required
                    />
                    {
                        passwordError.length > 0 &&
                        <div className="alert alert-error">
                            <i className='fad fa-info-circle' /> {passwordError}
                        </div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password2" className="control-label required" >Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        required
                    />
                    {
                        password2Error.length > 0 &&
                        <div className="alert alert-error">
                            <i className='fad fa-info-circle' /> {password2Error}
                        </div>
                    }
                </div>
                <div className="center">
                    <input className="btn btn-success" type="submit" value="REGISTER" disabled={submitDisabled} />
                </div>
            </form>
        </Fragment>
    )
}

export default Register