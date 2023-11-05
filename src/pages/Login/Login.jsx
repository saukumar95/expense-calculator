import { useState } from 'react'
import './Login.css'
import Card from '../../components/Card/Card'
import Logo from '../../images/expenses-cal.jpg'

const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true)
    const title = isRegistered ? "Log into your Expensify account" : "Create a Expensify Account"
    const subtitle = isRegistered ? "Log into your account and manage your finances" : "Create an account and manage your finances" 
    const getFooter =
        isRegistered ? <p>
            New user? &nbsp;
            <span className='link' onClick={() => setIsRegistered(false)}>Create an account</span>
        </p> : <p>
            Already a user? &nbsp;
            <span className='link' onClick={() => setIsRegistered(true)}>
                Login
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
                {isRegistered ?
                    <Card title={title} footer={getFooter} subtitle={subtitle}>
                        <label htmlFor="email" >Email address</label>
                        <input type="email" name="email" id='email' placeholder="Enter your email address" autoComplete='false' />
                        <label htmlFor="password">Enter password</label>
                        <input type="password" name='password' id='password' placeholder="Enter your password" />
                        <button type="submit">Log in</button>
                    </Card>
                    :
                    <Card title={title} footer={getFooter} subtitle={subtitle}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name='email' id="email" placeholder="Enter your email address" autoComplete='false' />
                        <label htmlFor="new-password">Create password</label>
                        <input type="password" name='newPassword' id="new-password" placeholder="Create a strong password" />
                        <div style={{fontSize: "14px"}}><input type='checkbox' name='agreement' /> I agree with the privacy policy & accept the term and condition.</div>
                        <button type="submit">Register</button>
                    </Card>}
            </div>
        </div>
    )
}
export default Login