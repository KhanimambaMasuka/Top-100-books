import Author from './Author'
import Title from './Title'

function Book({book}){
    const {imageLink,title,author,link} = book

    const onBookCLick = () => {
        //alert(`Hello ${books.}`)
        //console.log(link)
        window.open(link)
    }

    return(
      <article className="book" onClick = {onBookCLick}>
          <img src={imageLink} alt = ""/>
          <Title title={title}/>
          <Author author={author}/>
      </article>
    );
}

export default Book;