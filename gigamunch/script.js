// CREATE LIBARY ARRAY
// INPUT CONSTANTS
const name = document.querySelector("#name");
const author = document.querySelector("#author");
const lang = document.querySelector("#lang");
const submit = document.querySelector("#submit");

//CREATE CLASS
class Book{
    constructor(name, author, lang){
        this.name = name;
        this.author = author;
        this.lang = lang;
    }
}

// UI CLASS

class UI {
    static displayBooks(){

        let myLibary = [];

        myLibary.forEach((book) => UI.addBookToLibary(book));
    }

    static addBookToLibary(book){
        const table = document.getElementById("table");
        // CREATE THE ELEMENTS FOR THE DATA
        const tbody = document.createElement('tbody');
        tbody.innerHTML = $name.value;
        document.getElementById("table").appendChild(tbody);
    }
}




// FUNCTIONS





console.log(myLibary);