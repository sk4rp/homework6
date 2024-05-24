const personGenerator = {
    // Объекты с именами, фамилиями и отчествами
    patronymics: {
        forMale: [
            "Александрович",
            "Максимович",
            "Иванович",
            "Артемович",
            "Дмитриевич",
            "Никитич",
            "Михайлович",
            "Даниилович",
            "Егорович",
            "Андреевич"
        ],
        forFemale: [
            "Александровна",
            "Максимовна",
            "Ивановна",
            "Артемовна",
            "Дмитриевна",
            "Никитовна",
            "Михайловна",
            "Данииловна",
            "Егоровна",
            "Андреевна"
        ]
    },
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

    surnameFemale: [
        "Иванова", 
        "Смирнова", 
        "Кузнецова", 
        "Васильева", 
        "Петрова", 
        "Михайлова", 
        "Новикова", 
        "Федорова", 
        "Кравцова", 
        "Николаева", 
        "Семёнова", 
        "Славина", 
        "Степанова", 
        "Павлова", 
        "Александрова", 
        "Морозова"
    ],

    professions: {
        male: ["Врач", "Учитель", "Инженер", "Программист", "Слесарь", "Солдат", "Шахтёр"],
        female: ["Врач", "Учитель", "Инженер", "Программист", "Дизайнер"]
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomMaleFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);
    },

    randomFemaleFirstName: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            const index = this.randomIntNumber(0, this.surnameFemale.length - 1);
            return this.surnameFemale[index];
        }
    },

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomProfession: function(gender) {
        const professions = gender === 'Мужчина' ? this.professions.male : this.professions.female;
        const index = this.randomIntNumber(professions.length - 1);
        return professions[index];
    },

    randomBirthYear: function() {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 100;
        const maxYear = currentYear - 18;
        const year = this.randomIntNumber(maxYear, minYear);
        const month = this.randomIntNumber(1, 12);
        let maxDay;

        switch(month) {
            case 2:
                maxDay = 28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                maxDay = 30;
                break;
            default:
                maxDay = 31;
        }

        const day = this.randomIntNumber(1, maxDay);
        return { year, month, day };
    },

    randomPatronymic: function(gender) {
        const firstName = this.randomMaleFirstName();
        let baseName;
    
        // Обработка базового имени в зависимости от окончания
        if (firstName === 'Артем') {
            baseName = 'Артем';
        } else if (firstName.endsWith('й') || firstName.endsWith('ь')) {
            baseName = firstName.slice(0, -1) + 'е';
        } else if (firstName.endsWith('а') || firstName.endsWith('я')) {
            baseName = firstName.slice(0, -1);
        } else {
            baseName = firstName;
        }
    
        if (gender === 'Мужчина') {
            if (firstName === 'Никита') {
                return 'Никитич';
            } else if (firstName === 'Максим') {
                return 'Максимович';
            } else if (firstName === 'Андрей') {
                return 'Андреевич';
            } else if (firstName === 'Дмитрий') {
                return 'Дмитриевич';
            } else {
                return baseName + 'ович';
            }
        } else {
            if (firstName === 'Никита') {
                return 'Никитична';
            } else if (firstName === 'Максим') {
                return 'Максимовна';
            } else if (firstName === 'Михаил'){
                return 'Михаиловна';
            } else if (firstName === 'Андрей') {
                return 'Андреевна';
            } else if (firstName === 'Дмитрий') {
                return 'Дмитриевна';
            }else {
                return baseName + 'овна';
            }
        }
    },

    getMonthText: function(month) {
        const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        return months[month - 1];
    },

    getPerson: function(gender, birthMonth) {
        this.person = {};
        this.person.gender = gender || (Math.random() < 0.5 ? 'Мужчина' : 'Женщина');
        this.person.firstName = this.person.gender === 'Мужчина' ? this.randomMaleFirstName() : this.randomFemaleFirstName();
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    },
};