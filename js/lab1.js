// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    //added the ending bracket
    let skills = ['Web Development','Gardening','Drumming','Volunteering']; 
    // h2 ending fixed
    let output = "<h2>Bruce's Skills</h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    //added semicolon, equal sign
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    //added semicolon
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    //added three $ signs
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;

    //single quote fixed to double quote
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}