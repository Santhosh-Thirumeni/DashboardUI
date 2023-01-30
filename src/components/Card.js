import "../styles/Card.scss"
/**Wrapper component for Create Posts and Posts */ 
const Card = (props) => {
    const cardClass = `card + ${props.className}`;
    return (

        <div className={cardClass}>
            {props.children}
        </div>
    );

}
export default Card;