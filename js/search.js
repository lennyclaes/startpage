const form = document.querySelector('.search');
let searchValue = document.querySelector('.search-input');

let searchString = '';

let windowListener = document.addEventListener('keydown', fillInput);

searchValue.addEventListener('focus', () => {
    document.removeEventListener('keydown', windowListener, false);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    search();
})

searchValue.addEventListener('blur', () => {
    windowListener = document.addEventListener('keydown', fillInput);
});

function fillInput(e) {
    if(e.key == 'Enter') {
        search();
    } else if (e.key == 'Backspace') {
        if(e.ctrlKey) {
            searchString = '';
        } else {
            searchString = searchString.slice(0, searchString.length - 1);
        }
        searchValue.value = searchString;
    } else if(e.key.length == 1) {
        searchString += e.key;
        searchValue.value = searchString;
    } else {
        //console.log(e);
    }
}

async function search() {
    const searchUrl = `https://www.google.com/search?q=${searchValue.value}`;

    window.location.href = searchUrl;
}