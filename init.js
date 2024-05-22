window.onload = function() {
    // Получаем случайного пользователя
    const initPerson = personGenerator.getPerson();

    // Отображаем данные о пользователе на веб-странице
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('clearButton').addEventListener('click', clearData);
};

function clearData() {
    // Очистка сгенерированных данных
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
}
