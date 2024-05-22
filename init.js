window.onload = function() {
    // Получаем случайного пользователя
    const initPerson = personGenerator.getPerson();

    // Отображаем данные о пользователе на веб-странице
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = `${initPerson.birthYear.day} ${personGenerator.getMonthText(initPerson.birthYear.month)} ${initPerson.birthYear.year}`;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('clearButton').addEventListener('click', clearData);
};


function clearData() {
    // Очистка сгенерированных данных
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
    document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
}
