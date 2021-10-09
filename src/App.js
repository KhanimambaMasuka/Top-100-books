import Book from './components/Book'
import {useEffect, useState} from "react";

async function callGithub() {
    const response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/5e716ee7ef003309cb68a317487ded6faaa421c6/books.json')
    //console.log(data);
    return await response.json()
}
async function changeImageLink(data) {
    data.forEach(
        (book)=>
        {
            book.imageLink = `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`
        }
    )
    //(`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${data.imageLink}`)
    return data;
}

function App() {
    //const books = [];
    const [books,setBooks] = useState([])
    //let data = null

    useEffect( ()=>{
        async function fetchData() {
            let data = await callGithub();
            data = await changeImageLink(data);
            setBooks(data);
        }
        fetchData();
    },[])
    //console.log(`this is your data ${callGithub()}`)
    // console.log(`i did not get it ${callGithub()}`)

    return (
    <section className = 'booklist'>
        {books.map((book,index)=>{
        return <Book key = {index} bookImage = {book.imageLink} authorName = {book.author} bookTitle = {book.title}/>
        })}
    </section>
  );
}

export default App;
