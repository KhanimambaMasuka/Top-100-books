import Book from './components/Book';
import Search from './components/Search';
import {useEffect, useState} from "react";

async function callGithub() {
    const response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/5e716ee7ef003309cb68a317487ded6faaa421c6/books.json')
    return await response.json()
}
async function changeImageLink(data) {
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

    useEffect( ()=>{
        async function fetchData() {
            let data = await callGithub();
            data = await changeImageLink(data);
            setBooks(data);
        }
        fetchData();
    },[])

    return (
    <section >
        <Search books = {books}/>
        <br/>
        <article className = 'booklist'>
            {books.map((book,index)=>{
                return <Book key = {index} book = {book} />
            })}
        </article>
    </section>
  );
}

export default App;
