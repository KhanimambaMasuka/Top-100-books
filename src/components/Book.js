import Author from './Author'
import Title from './Title'

function Book({book}){
    const {imageLink,title,author} = book
    return(
      <article className="book">
          <img src={imageLink} alt = ""/>
          <Title title={title}/>
          <Author author={author}/>
      </article>
    );
}

export default Book;