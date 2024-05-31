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

let highlight = (event) => {
    let element = event.target;
    element.style.color = 'rgb(230 ,233 ,241)';
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
