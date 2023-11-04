import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div className='container-flex'>
            <div className="container-text">
                <div className="text-button">
                    <p className="text-label">Expensify</p>
                    <div>
                        <h4>Manage your daily expenses</h4>
                        <p>An AI power expense calculator which provides your insigts of monthly expenses as well as forcasted expenditure for your upcoming months.</p>
                    </div>
                </div>
            </div>
            <div className="container-form">
                {toggle ? <div className="card">
                    <div className='title'>Log into your Expensify account</div>
                    <div className='card-form'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" placeholder="Enter your email address" />
                        <label htmlFor="password">Enter password</label>
                        <input type="password" placeholder="Enter your password" />
                        <button type="submit">Log in</button>
                    </div>
                    <div className="switch">
                        <p>
                            New user? &nbsp;
                            <a href="#" onClick={() => setToggle(false)}>Create an account</a>
                        </p>
                    </div>
                </div> : <div className="card">
                    <div className='title'>Register yourself now to Expensify</div>
                    <div className='card-form'>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" placeholder="Enter your full name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                        <label htmlFor="new-password">New Password</label>
                        <input type="password" id="new-password" placeholder="Enter your new password" />
                        <button type="submit">Register</button>
                    </div>
                    <div className="switch">
                        <p>
                            Already have an account? &nbsp;
                            <a href="#" onClick={() => setToggle(true)}>
                                Login here
                            </a>
                        </p>
                    </div>
                </div>}
            </div>
        </div>
    )
}
export default Login