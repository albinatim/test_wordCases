function btnClick() {

    let word = document.getElementById('word').value;
    let cases = document.querySelector('input[name="case"]:checked').value.trim();
    console.log(typeof word);
    console.log(cases);
    if (word == null) return;
    if (!checkRus(word)) {
        document.getElementById('answer').innerHTML = 'Введите одно русское существительное!';
        return;
    }
    let declination = checkDeclination(word);
    // console.log(declination);
    switch (cases) {
        case 'accusative':
            accusative(word, declination);
            break;
        case 'genitive':
            genitive(word, declination);
            break;
        case 'dative':
            dative(word, declination);
            break;
        case 'ablative':
            ablative(word, declination);
            break;
        case 'prepositional':
            prepositional(word, declination);
            break;
        default:
            console.log('не получилось');
            break;

    }

}


function accusative(word, dec) {
    switch (dec) {
        case 1:
            if (/а$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/а$/g, 'у');
            else
                document.getElementById('answer').innerHTML = word.replace(/я$/g, 'ю');
            break;
        case 2:
            document.getElementById('answer').innerHTML = word;
            break;
        case 3:
            document.getElementById('answer').innerHTML = word;
            break;
        default:
            document.getElementById('answer').innerHTML = 'Я не могу просклонять это слово(';
            break;

    }
}

function genitive(word, dec) {
    switch (dec) {
        case 1:
            if (/а$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/а$/g, 'ы');
            else
                document.getElementById('answer').innerHTML = word.replace(/я$/g, 'и');
            break;
        case 2:
            if (/е$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/е$/g, 'я');
            else if (/о$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/о$/g, 'а');
            else
                document.getElementById('answer').innerHTML = word + 'а';
            break;
        case 3:
            document.getElementById('answer').innerHTML = word.replace(/ь$/g, 'и');
            break;
        default:
            document.getElementById('answer').innerHTML = 'Я не могу просклонять это слово(';
            break;

    }
}

function dative(word, dec) {
    switch (dec) {
        case 1:
            document.getElementById('answer').innerHTML = word.replace(/я$|а$/g, 'е');
            break;
        case 2:
            if (/е$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/е$/g, 'ю');
            else if (/о$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/о$/g, 'у');
            else
                document.getElementById('answer').innerHTML = word + 'у';
            break;
        case 3:
            document.getElementById('answer').innerHTML = word.replace(/ь$/g, 'и');
            break;
        default:
            document.getElementById('answer').innerHTML = 'Я не могу просклонять это слово(';
            break;

    }
}

function ablative(word, dec) {
    switch (dec) {
        case 1:
            if (/а$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/а$/g, 'ой');
            else
                document.getElementById('answer').innerHTML = word.replace(/я$/g, 'ей');
            break;
        case 2:
            if (/е|о$/g.test(word))
                document.getElementById('answer').innerHTML = word + 'м';
            else
                document.getElementById('answer').innerHTML = word + 'ом';
            break;
        case 3:
            document.getElementById('answer').innerHTML = word + 'ю';
            break;
        default:
            document.getElementById('answer').innerHTML = 'Я не могу просклонять это слово(';
            break;

    }
}

function prepositional(word, dec) {
    switch (dec) {
        case 1:
            document.getElementById('answer').innerHTML = word.replace(/я$|а$/g, 'е');
            break;
        case 2:
            if (/е|о$/g.test(word))
                document.getElementById('answer').innerHTML = word.replace(/е$|о$/g, 'е');
            else
                document.getElementById('answer').innerHTML = word + 'е';
            break;
        case 3:
            document.getElementById('answer').innerHTML = word.replace(/ь$/g, 'и');
            break;
        default:
            document.getElementById('answer').innerHTML = 'Я не могу просклонять это слово(';
            break;

    }
}

function checkDeclination(word) {
    let pattern1 = /[ая]$/;
    let pattern2 = /[цкнгшщзхфвпрлджчсмтбое]$/;
    let pattern3 = /[ь]$/;
    if (pattern1.test(word)) return 1;
    else if (pattern2.test(word)) return 2;
    else if (pattern3.test(word)) return 3;
    else return 0;
}

function checkRus(word) {
    return /^[А-яа-я]+$/.test(word);
}