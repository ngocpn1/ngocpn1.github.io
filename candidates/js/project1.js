let candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]

let candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]

let output = document.querySelector('#alsoRan');
let output2 = document.querySelector('#alsoRan2');
let output3 = document.querySelector('#alsoRan3');



let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

let i = 0;
function canShow(plusMinus) {
    
    output.innerHTML = "<div class='cand'>" + 
    candidateNames[i] + "<br><img src=pix/" + candidatePix[i] + "></cand>";
    i += plusMinus;
    if (i==7) {
        i = 0;
    }
    if (i<0) {
        i = 6;
    }
}
next.onclick = function () {
    canShow(1);
}
previous.onclick = function () {
    canShow(-1);
}



let next2 = document.querySelector('#next2');
let previous2 = document.querySelector('#previous2');

let j = 7;
function canShow2(plusMinus) {
    
    output2.innerHTML = "<div class='cand'>" + 
    candidateNames[j] + "<br><img src=pix/" + candidatePix[j] + "></cand>";
    j += plusMinus;
    if (j==14) {
        j = 7;
    }
    if (j<7) {
        j = 13;
    }
}

next2.onclick = function () {
    canShow2(1);
}
previous2.onclick = function () {
    canShow2(-1);
}


let next3 = document.querySelector('#next3');
let previous3 = document.querySelector('#previous3');


let k = 14;
function canShow3(plusMinus) {
    output3.innerHTML = "<div class='cand'>" + 
    candidateNames[k] + "<br><img src=pix/" + candidatePix[k] + "></cand>";
    k += plusMinus;
    if (k==candidateNames.length) {
        k = 14;
    }
    if (k<14) {
        k = candidateNames.length - 1;
    }
}

next3.onclick = function () {
    canShow3(1);
}
previous3.onclick = function () {
    canShow3(-1);
}


