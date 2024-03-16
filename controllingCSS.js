let sq = document.querySelector('#square');

// function changeCSS() {
//     sq.style.backgroundColor='red';
//     sq.style.borderRadius='90%';
//     sq.style.width='700px';
//     sq.style.top='300px';
//     sq.style.left='200px';
// }

function changeCSS(bg, radius) {
    sq.style.backgroundColor = bg;
    sq.style.borderRadius = radius;
}