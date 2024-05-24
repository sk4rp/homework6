window.onload = function() {
    const clearButton = document.getElementById('clearButton');
    const generateButton = document.getElementById('generateButton');
    
    generateButton.addEventListener('click', generateData);
    clearButton.addEventListener('click', clearData);
};

function generateData() {
    const newPerson = personGenerator.getPerson();

    document.getElementById('firstNameOutput').innerText = newPerson.firstName;
    document.getElementById('surnameOutput').innerText = newPerson.surname;
    document.getElementById('patronymicOutput').innerText = newPerson.patronymic;
    document.getElementById('genderOutput').innerText = newPerson.gender;
    document.getElementById('birthYearOutput').innerText = `${newPerson.birthYear.day} ${personGenerator.getMonthText(newPerson.birthYear.month)} ${newPerson.birthYear.year}`;
    document.getElementById('professionOutput').innerText = newPerson.profession;
}

function clearData() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
}
