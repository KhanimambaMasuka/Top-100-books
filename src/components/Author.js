import './styling/Book.css'

function Author(props){
    const authorName = props.author;
    return (
        <div>
            <h4 style ={{color: 'white',fontSize: '0.5rem'}}>{authorName}</h4>
        </div>
    )
}

export default Author;
