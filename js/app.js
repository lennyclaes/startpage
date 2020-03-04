const nameElt = document.querySelector('.name')

async function getImage() {
    const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=BJJRdJmYlEDkWdakBA8SlQZ3Oc0yvYIlhAQUZhjx&hd=True');
    const json = await data.json();
    document.body.style.background = `url('${json.hdurl}')`;
    document.body.style.backgroundSize = `cover`;
    document.body.style.backgroundPosition = `center`;
}

async function loadName() {
    let name = localStorage.getItem('start-name');
    if(name) {
        nameElt.innerHTML = name;
        document.title = 'Welcome, ' + name;
    } else {
        name = prompt('What is your name?');
        localStorage.setItem('start-name', name);
        nameElt.innerHTML = name;
        document.title = 'Welcome, ' + name;
    }
}

getImage();
loadName();