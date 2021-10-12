import {useState} from "react";
import './styling/Search.css'

function Search({books}){
    const [searchTerm,setSearchTerm] = useState(null);

    const onSearchChange = (event)=>{
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    }
    const onSearchButtonClick = ()=>{
        const booksFound = books.find(book=>book.title === searchTerm);
        console.log(booksFound);
        return(
                <article className = 'booklist'>
                {
                    booksFound
                }
                </article>
        )
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