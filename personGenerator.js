const patronymicJson = {
    male: {
        count: 10,
        list: {
            id_1: "Александрович",
            id_2: "Максимович",
            id_3: "Иванович",
            id_4: "Артемович",
            id_5: "Дмитриевич",
            id_6: "Никитич",
            id_7: "Михайлович",
            id_8: "Даниилович",
            id_9: "Егорович",
            id_10: "Андреевич"
        }
    },
    female: {
        count: 10,
        list: {
            id_1: "Александровна",
            id_2: "Максимовна",
            id_3: "Ивановна",
            id_4: "Артемовна",
            id_5: "Дмитриевна",
            id_6: "Никитична",
            id_7: "Михайловна",
            id_8: "Данииловна",
            id_9: "Егоровна",
            id_10: "Андреевна"
        }
    }
};

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Валерия",
            "id_2": "Лариса",
            "id_3": "Ангелина",
            "id_4": "Дарья",
            "id_5": "Анастасия",
            "id_6": "Наталья",
            "id_7": "Марина",
            "id_8": "Оксана",
            "id_9": "Тамара",
            "id_10": "Татьяна"
        }
    }`,

    // JSON с данными о профессиях
    professions: ["Врач", "Учитель", "Инженер", "Программист", "Дизайнер", "Слесарь", "Солдат", "Шахтёр"],
    // Массив с данными о женских фамилиях
    surnameFemale: [
        "Иванова", 
        "Смирнова", 
        "Петрова", 
        "Кузнецова", 
        "Васильева", 
        "Петрова", 
        "Михайлова", 
        "Новикова", 
        "Федорова", 
        "Кравцова", 
        "Николаева", 
        "Семёнова", 
        "Славин", "Степанова", 
        "Павлова", 
        "Александрова", 
        "Морозов"
    ],
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Получение случайного мужского имени
    randomMaleFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);
    },

    // Получение случайного женского имени
    randomFemaleFirstName: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },

    // Получение случайной фамилии в зависимости от пола
    randomSurname: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            const index = this.randomIntNumber(0, this.surnameFemale.length - 1);
            return this.surnameFemale[index];
        }
    },

    // Получение случайного пола
    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    // Получение случайной профессии
    randomProfession: function() {
        const index = this.randomIntNumber(0, this.professions.length - 1);
        return this.professions[index];
    },

    // Получение случайного года рождения
    randomBirthYear: function() {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 100;
        const maxYear = currentYear - 18;
        return this.randomIntNumber(maxYear, minYear);
    },
    
    // Генерация случайного пользователя
    getPerson: function(gender) {
        this.person = {};
        this.person.gender = gender || (Math.random() < 0.5 ? 'Мужчина' : 'Женщина');
        this.person.firstName = this.person.gender === 'Мужчина' ? this.randomMaleFirstName() : this.randomFemaleFirstName();
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender, this.person.surname);
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession(this.person.gender); // Добавляем случайную профессию
        return this.person;
    },

    randomProfession: function(gender) {
        // Определяем список профессий в зависимости от пола
        const professionsList = gender === 'Мужчина' ? this.professions.filter(prof => !["Секретарь", "Повар", "Дворник"].includes(prof)) : this.professions.filter(prof => !["Слесарь", "Солдат", "Шахтёр"].includes(prof));
        // Получаем случайную профессию из списка
        const index = this.randomIntNumber(0, professionsList.length - 1);
        return professionsList[index];
    },

    randomPatronymic: function(gender, surname) {
        const patronymicList = gender === 'Мужчина' ? patronymicJson.male.list : patronymicJson.female.list;
        const patronymicCountObj = patronymicJson[gender.toLowerCase()];
        const patronymicCount = patronymicCountObj ? patronymicCountObj.count : 0;
        const patronymicIndex = this.randomIntNumber(1, patronymicCount);
        const patronymicId = `id_${patronymicIndex}`;
        const patronymic = patronymicList[patronymicId];
        if (!patronymic) {
            console.error("Отчество не найдено.");
            return ""; // Возвращаем пустую строку, если отчество не найдено
        }
        const surnameFirstLetter = surname.charAt(0).toUpperCase();
        return patronymic.replace(/^./, surnameFirstLetter);
    }
    
};

