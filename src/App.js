import Book from './components/Book';
import Search from './components/Search';
import {useEffect, useState} from "react";

async function callGithub() {
    const response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/5e716ee7ef003309cb68a317487ded6faaa421c6/books.json')
    return await response.json()
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
    const [foundBooks,setFoundBooks] = useState([])

    useEffect( ()=>{
        async function fetchData() {
            let data = await callGithub();
            data = changeImageLink(data);
            setBooks(data);
            setFoundBooks(data);
        }
        fetchData();
    },[])

    return (
    <section onMouseOver={()=>console.log('Mouse Over Book')}>{/*placholder*/}
        <Search books = {books} setFoundBooks={setFoundBooks}/>
        <br/>
        <article className = 'booklist'>
            {foundBooks.map((book,index)=>{
                return <Book key = {index} book = {book} />
            })}
        </article>
    </section>
  );
}

export default App;
