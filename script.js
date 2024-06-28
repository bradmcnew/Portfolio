document.addEventListener('DOMContentLoaded', function() {
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
                    <figure>
                    <a href="${this._link}" target="_blank" title="open in GitHub"><img src="${this._image}" alt="${this._title} image"></a>
                    <figcaption><a href="${this._link}" target="_blank">${this._link}</a></figcaption>
                    </figure>
                    <p>${this._description}</p>
                    <ul>
                    ${this.listLanguages()}
                    </ul>
                </div>
            `)
        }
    }
    //project instances
    const projects = [
        new Project(
            'Spotify Playlist Creator', //title
            'This is a project description', //description
            './references/images/projects/jammers-project-image.png', //image
            'https://github.com/bradmcnew/playlist-creator.git', //link
            ['React','HTML', 'CSS', 'JavaScript']//array of languages
        ),
        new Project(
            'Project 2',
            'This is a project description',
            'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaEmH0RfGhT6P1mEcrv7FZKSlvnys1Ob0FnuJucBsKssy0DE9XZQDt9lR73ezwp0wi-qRQh0YOgERC3gVICjymo4y6VD4wF7iHrWnkcGzf-O5iH1x3iDLIsE.jpg?r=b3e',
            'https://github.com',
            ['HTML', 'CSS', 'JavaScript', 'Markdown', 'git']
        ),
    ]
    //add to html
    const projContainer = document.getElementById('projects');
    projects.forEach(project => {
        projContainer.innerHTML += project.render();
    });
});