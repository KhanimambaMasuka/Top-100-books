import Book from './components/Book';
import Search from './components/Search';
import {useEffect, useState} from "react";

async function callGithub(data,setData,setFiltered) {
    const response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/5e716ee7ef003309cb68a317487ded6faaa421c6/books.json')
    data = await response.json()
    data = changeImageLink(data);
    setData(data);
    setFiltered(data);
}
const changeImageLink = (data) => {
    data.forEach(
        (book)=>
        {
            book.imageLink = `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`
        }
    )
    return data;
}

function App() {
    const [books,setBooks] = useState([])
    const [filteredBooks,setFilteredBooks] = useState([])

    useEffect( ()=>{
        callGithub(books,setBooks,setFilteredBooks);
    },[])// eslint-disable-line

    return (
    <section onMouseOver={()=>console.log('Mouse Over Book')}>{/*placeholder*/}
        <Search books = {books} setFoundBooks={setFilteredBooks}/>
        <br/>
        <div className = 'booklist'>
            {filteredBooks.map((book,index)=>{
                return <Book key = {index} book = {book} />
            })}
        </div>
    </section>
  );
}

export default App;
