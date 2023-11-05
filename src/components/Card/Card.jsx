import "./Card.css"
const Card = ({ title, children, footer }) => {
    return (
        <div className="card">
            <div className='title'>{title}</div>
            <form className='body'>
                {children}
            </form>
            <div className="footer">
                {footer}
            </div>
        </div>
    )
}

export default Card;