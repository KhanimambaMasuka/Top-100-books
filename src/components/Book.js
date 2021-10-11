import Author from './Author'
import Title from './Title'

function Book({book}){
    const {imageLink,title,author,link} = book

    const onBookCLick = () => {
        window.open(link)
    }

    return(
      <article className="book" onClick = {onBookCLick}>
          <div className='bookImageContainer'>
              <img className = 'bookImage' src={imageLink} alt = ""/>
          </div>

          <Title title={title}/>
          <Author author={author}/>
      </article>
    );
}

export default Book;