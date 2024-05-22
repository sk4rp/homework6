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
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
    document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
}
