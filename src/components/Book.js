import Author from './Author'
import Title from './Title'

function Book(props){
    return(
      <article className="book">
          <img src={props.bookImage} alt = ""/>
          <Title title={props.bookTitle}/>
          <Author author={props.authorName}/>
      </article>
    );
}

export default Book;