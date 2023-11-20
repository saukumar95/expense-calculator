import { Icon } from '../../../components'
import { ICONS } from '../../../components/Icon/constants'
import './LoginWithButton.css'

const LoginWithButton = ({ label = 'Log in with Google Account' }) => {
    const handleLoginWithGoogle = () => {
        console.log("It's being called")
        fetch('/auth/greet')
            .then((res) => res.json())
            .catch((err) => console.error(err))
    }

    return (
        <div className="button-container">
            <button
                type="button"
                className="btn-login-with"
                onClick={handleLoginWithGoogle}
            >
                <span className="btn-icon">
                    <Icon type={ICONS.google} />
                </span>
                <span style={{ fontSize: '14px' }}>{label}</span>
            </button>
        </div>
    )
}

export default LoginWithButton
