import "./Card.css"
const Card = ({ title, children, footer }) => {
    return (
        <div className="card">
            <div className='title'>{title}</div>
            <form className='card-form'>
                {children}
            </form>
            <div className="switch">
                {footer}
            </div>
        </div>
    )
}

export default Card;