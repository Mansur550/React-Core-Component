import Book from "./book";

export default  function Library({books}){
    return(
        <>
        <h1>My Library </h1>
        <p>Book Collection: {books.length}</p>
        <h3>Address:</h3>
        <ul>
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
        </ul>
        </>
    )
}