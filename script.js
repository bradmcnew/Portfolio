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