const mylibray = [];

function Book(title, pages_read, author, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.pages_read = pages_read;
    this.author = author;
    this.genre = genre;
}

function addBookToLibrary(title, pages_read, author, genre) {
    const newbook = new Book(title, pages_read, author, genre);
    mylibray.push(newbook);
    return newbook;
}

function loopingthrough() {
    for (let i = 0; i < mylibray.length; i++) {
        console.log(i);
    }
}

const addbutn = document.getElementById("booksadd");
const booksaddcard = document.getElementById("bookaddcard");
const sbmitbtn = document.getElementById("Submitbut");

addbutn.addEventListener('click', () => {
    console.log("Toggle button clicked");
    booksaddcard.classList.toggle("hidden");
});

sbmitbtn.addEventListener('click', () => {
    const title = document.getElementById("title").value;
    const pages_read = document.getElementById("pages_read").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;

    if (!title || !pages_read || !author || !genre) {
        alert("Please fill all fields");
        return;
    }

    const book = addBookToLibrary(title, pages_read, author, genre);
    console.log(book);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("pages_read").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";

    // Hide form again
    booksaddcard.classList.add("hidden");
});
