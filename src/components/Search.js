import {useState} from "react";
import './styling/Search.css'

function Search({books,setFoundBooks}){
    const [searchTerm,setSearchTerm] = useState(null);

    const onSearchChange = (event)=>{
        setSearchTerm(event.target.value);
        console.log(event.target.value);
        if(event.target.value === null || event.target.value === "")
        {
            setFoundBooks(books);
        }
    }
    const onSearchButtonClick = ()=>{
        const booksFounds = books.filter(book=>book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        console.log(booksFounds);
        setFoundBooks(booksFounds);
        //console.log('HI');

    }

    return (
        <div className = 'searchBar'>
            <label htmlFor = 'booksearch' className = 'searchLabel'>Find Book    </label>
            <input type="text" id = 'booksearch'  placeholder="Enter the book name" onChange={onSearchChange}/>
            <button type="button" className = 'button' onClick={onSearchButtonClick}>Search Book</button>
        </div>
    );
}

export default Search;