const library = [];
const container = document.querySelector('#bookcontainer');

function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function AddToLibrary(book)
{
    library.push(book);
    container.innerHTML = '';
    DisplayLibrary();
}

const addbook = document.querySelector('#newbookbutton');
addbook.addEventListener('click', () => {AddToLibrary(new Book("Hobbit", "Tolkien", 270, false))});

function DisplayLibrary()
{
    library.forEach((book) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('book');
        let ti = document.createElement('h3');
        let au = document.createElement('p');
        let pa = document.createElement('p');
        let btns = document.createElement('div');
        let rd = document.createElement('button');
        let rm = document.createElement('button');

        ti.innerText = book.title;
        au.innerText = book.author;
        pa.innerText = book.pages + " pages";
        btns.classList.add('buttons');
        rd.classList.add('read');
        rd.innerText = "READ";
        rm.classList.add('remove');
        rm.innerText = "REMOVE"

        btns.append(rd, rm);
        wrapper.append(ti, au, pa, btns);
        container.append(wrapper);
    });
}

//test
AddToLibrary(new Book("How to win friends and influence people", "Dale Carnegie", 288, true));
AddToLibrary(new Book("Atomic Habits", "James Clear", 420, false));
