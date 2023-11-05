import { useState } from 'react'
import './Login.css'
import Card from '../../components/Card/Card'
import Logo from '../../images/expenses-cal.jpg'

const Login = () => {
    const [toggle, setToggle] = useState(true)
    const title = toggle ? "Log into your Expensify account" : "Register yourself now to Expensify"
    const getFooter =
        toggle ? <p>
            New user? &nbsp;
            <span className='link' onClick={() => setToggle(false)}>Create an account</span>
        </p> : <p>
            Already have an account? &nbsp;
            <span className='link' onClick={() => setToggle(true)}>
                Login here
            </span>
        </p>

    return (
        <div className='container-flex'>
            <div className="container-text">
                <div className="text-button">
                    <p className="text-label">Expensify</p>
                    <div>
                        <h4>Manage your daily expenses</h4>
                        <p>An AI power expense calculator which provides your insight of monthly expenses as well as forcasted expenditure for your upcoming months.</p>
                    </div>
                    <div className='circular--landscape'>
                        <img src={Logo} alt='logo' />
                    </div>
                </div>
            </div>
            <div className="container-form">
                {toggle ?
                    <Card title={title} footer={getFooter}>
                        <label htmlFor="email" >Email address</label>
                        <input type="email" name="email" id='email' placeholder="Enter your email address" autoComplete='false' />
                        <label htmlFor="password">Enter password</label>
                        <input type="password" name='password' id='password' placeholder="Enter your password" />
                        <button type="submit">Log in</button>
                    </Card>
                    :
                    <Card title={title} footer={getFooter}>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" name='fullName' placeholder="Enter your full name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id="email" placeholder="Enter your email" autoComplete='false' />
                        <label htmlFor="new-password">New Password</label>
                        <input type="password" name='newPassword' id="new-password" placeholder="Enter your new password" />
                        <button type="submit">Register</button>
                    </Card>}
            </div>
        </div>
    )
}
export default Login