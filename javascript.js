// Book class: represent a book

class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI CLass: handle UI tasks

class UI {
    static displayBooks() {
        const StoredBooks = [
            {

                title: 'Book 1',
                author: 'Jane doe',
                isbn: '3639'
            },
            {
                title: 'Book 2',
                author: 'Jane doe',
                isbn: '3639'
            }
        ]
        const books = StoredBooks

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book){
        const list = document.querySelector("#book-list")

        const row = document.createElement('tr')
        row.innerHTML = `
        
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href= "#" class="btn btn-danger btn-sm delete">X</a></td>

        `

        list.appendChild(row)
    }


    static showAlert(message , className){
        const div = document.createElement('div')
        div.className=`alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(".container")
        const form = document.querySelector("#book-form")
        container.insertBefore(div , form)

        // vanish in 3 seconds
        setTimeout(()=>document.querySelector(".alert").remove(),3000)
    }
 
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    } 
    static clearFields(){
        document.querySelector("#title").value=""
        document.querySelector("#author").value=""
        document.querySelector("#isbn").value=""
    }


}

// Store Class: handles storage

// Event: display

document.addEventListener('DOMContentLoaded' , UI.displayBooks)

// Event: add a book
document.querySelector("#book-form").addEventListener("submit", (e)=>{
    e.preventDefault()
    // get form data
    const titile = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value


    // validatation of form

    if(title ==='' || author === '' || isbn === ''){
      UI.showAlert("Please fill all the details" , 'danger')
    }
    else {

        // instansiate a book
        const book = new Book(titile,author,isbn)
        // console.log(book);
    
        // add book to list
        UI.addBookToList(book)

        // show success message
        UI.showAlert("Book added" , "success")
    
        // clear fields
    
        UI.clearFields()
    }

    

})

// Event: delete a book

document.querySelector("#book-list").addEventListener('click' , (e)=>{
    UI.deleteBook(e.target)

     // show delete message
     UI.showAlert("Book Deleted" , "success")
    
})
