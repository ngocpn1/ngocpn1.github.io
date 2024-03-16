let buildList = document.querySelector('#userInput');

for (var i =0; i < 100; i++) {
    buildList.innerHTML += "<option value=" + i + ">" + i + "</option>";
}


function compare() {
    let answer = document.querySelector('#userInput');
    answer = answer.value;
    let reaction = document.querySelector('#response');
    // if (answer == 24) {
    //     reaction.innerHTML = "The answer is correct";
    // }
    // else if (answer < 24) {
    //     reaction.innerHTML = answer+ " The answer is way too low";
    // }    
    // else if (answer > 24) {
    //     reaction.innerHTML = answer + "The answer is way too high";
    // }
    // if (answer > 24 && answer < 28) {
    //     reaction.innerHTML = "The answer is too high but close";
    // }
    // if (answer < 24 && answer >20) {
    //     reaction.innerHTML = "The answer is too low but close";
    // }

    switch(true) {
        case (answer == 24):
            reaction.innerHTML = "correct";
            break;
        case (answer < 24):
            reaction.innerHTML = "too low";
            break;
        case (answer >24 && answer < 28):
            reaction.innerHTML = "too high";
            break;

    }
}