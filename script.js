//rotate Icon on hover
let rotate = (event) => {
    let element = event.target;
    element.style.transform = `rotate(7deg)`;
}
let rotateBack = (event) => {
    let element = event.target;
    element.style.transform = `rotate(0deg)`;
}
let icons = document.getElementsByClassName('icon')
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', rotate);
    icons[i].addEventListener('mouseout', rotateBack);
}
//highlght nav items on hover
let highlight = (event) => {
    let element = event.target;
    element.style.color = 'white';
}
let unhighlight = (event) => {
    let element = event.target;
    element.style.color = 'rgb(155, 165, 185)';
}
let navItems = document.getElementsByClassName('nav-list');
for (let i of navItems) {
    i.addEventListener('mouseover', highlight);
    i.addEventListener('mouseout', unhighlight);
}

//project class
class Project {
    constructor(title, description, image, link, languages = []) {
        this._title = title;
        this._description = description;
        this._image = image;
        this._link = link;
        this._languages = languages;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get image() {
        return this._image;
    }
    get link() {
        return this._link;
    }
    get languages() {
        return this._languages;
    }
    listLanguages() {
        let htmlString = '';
        for (let lang of this._languages) {
            htmlString += `<li>${lang}</li>\n`;
        }
        return htmlString;
    }
    render() {
        return (`
            <div class="project" id="${this._title}">
                <h2>${this._title}</h2>
                <img src="${this._image}" alt="${this._title} image">
                <p>${this._description}</p>
                <ul>
                  ${this.listLanguages()}
                </ul>
                <a class="proj-link" href="${this._link}" target="_blank">View Project</a>
            </div>
        `)
    }
}
//project instances
let project1 = new Project(
    'Project 1', //title
    'This is a project description', //description
    'https://m.media-amazon.com/images/M/MV5BMjRkN2VjODYtZTA0NS00NGUzLWE0ZTItMThkODdlMGUzMjc1XkEyXkFqcGdeQXVyODk3MDg0ODQ@._V1_.jpg', //image
    'https://github.com', //link
    ['HTML', 'CSS', 'JavaScript']//array of languages
);
//add to html
document.getElementById('projects').innerHTML = project1.render();