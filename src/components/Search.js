import {useCallback, useEffect, useState} from "react";
import './styling/Search.css'

function Search({books,setFoundBooks}){
    const [searchTerm,setSearchTerm] = useState(null);

    const filterBooks = useCallback(() =>{
        return books.filter(book => book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        //if empty activate search to outside world
    },[searchTerm,books])

    const OnSearchChange = (event)=>{
        setSearchTerm(event.target.value);
    }
    const onSearchButtonClick = ()=>{
        setFoundBooks(filterBooks());
    }
    useEffect(()=>searchTerm === null || searchTerm === "" ? setFoundBooks(books) : setFoundBooks(filterBooks()),[searchTerm,books,filterBooks,setFoundBooks])
    return (
        <div className = 'searchBar'>
            <label htmlFor = 'booksearch' className = 'searchLabel'>Find Book    </label>
            <input type="text" id = 'booksearch'  placeholder="Enter the book name" onChange={OnSearchChange}/>
            <button type="button" className = 'button' onClick={onSearchButtonClick}>Search Book</button>
        </div>
    );
}

export default Search;