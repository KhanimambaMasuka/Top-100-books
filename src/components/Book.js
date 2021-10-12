import Author from './Author'
import Title from './Title'

function Book({book}){
    const {imageLink,title,author,link} = book;

    const onBookCLick = () => {
        window.open(link);
    }
    const onMouseOverBook = () =>{
        console.log('Mouse Over Book');
    }

    return(
      <article className="book" onClick = {onBookCLick} onMouseOver={onMouseOverBook}>
          <div className='bookImageContainer'>
              <img className = 'bookImage' src={imageLink} alt = ""/>
          </div>
          <Title title={title}/>
          <Author author={author}/>
      </article>
    );
}

export default Book;