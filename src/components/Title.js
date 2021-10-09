function Title(props){
    const bookTitle = props.title;
    return (
        <div>
            <h4 style = {{color: 'white'}}>{bookTitle}</h4>
        </div>
    )
}

export default Title;