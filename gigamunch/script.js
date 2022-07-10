// CREATE LIBARY ARRAY
// INPUT CONSTANTS
const $name = document.querySelector("#name");
const $author = document.querySelector("#author");
const $lang = document.querySelector("#lang");
const $form = document.querySelector("#form");



//CREATE CLASS
class Book{
    constructor(name, author, lang){
        this.name = name;
        this.author = author;
        this.lang = lang;
    }
}




// STOP BROWSER REFRESH ON SUBMIT
$form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addBookToLibary();
    render();
    clearForm();
})



function clearForm(){
    $name.value = $author.value = $lang.value = "";
}
    

function addBookToLibary(){
    const newBook = new Book($name.value, $author.value, $lang.value);  
    myLibary.push(newBook);
    
}

function render(myLibary){

}



// FUNCTIONS




