window.onload = function() {
    // Получаем случайного пользователя
    const initPerson = personGenerator.getPerson();

    // Отображаем данные о пользователе на веб-странице
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};
