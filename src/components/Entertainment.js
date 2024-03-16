const entertainment = [
    {
        id: 1,
        title: 'American History',
        alt: 'American%20History',
        img: 'https://images.unsplash.com/photo-1505236104532-dc183ec5f337?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/AmericanHistory.json',
        category: 'History'
    },
    {
        id: 2,
        title: 'Ancient Civilizations',
        alt: 'Ancient%20Civilizations',
        img: 'https://images.unsplash.com/photo-1586472694047-2446c6ac56dc?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/AncientCivilizations.json',
        category: 'History'
    },
    {
        id: 3,
        title: 'World History',
        alt: 'World%20History',
        img: 'https://images.unsplash.com/photo-1549664171-bf00f4b2ad70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVzb3BvdGFtaWF8ZW58MHx8MHx8fDA%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/WorldHistory.json',
        category: 'History'
    },
    {
        id: 4,
        title: "Physical Geography",
        alt: "Physical%20Geography",
        img: "https://images.pexels.com/photos/3601244/pexels-photo-3601244.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/PhysicalGeography.json",
        category: "Geography"
    },
    {
        id: 5,
        title: 'Continents and Oceans',
        alt: 'Continents%20and%20Oceans',
        img: 'https://images.unsplash.com/photo-1550940857-b8eec3d11873?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/ContinentsAndOceans.json',
        category: 'Geography'
    },
    {
        id: 6,
        title: "Countries and Capitals",
        alt: "Countries%20and%20Capitals",
        img: "https://images.unsplash.com/photo-1544906243-a69767cc000b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/CountriesAndCapitals.json",
        category: "Geography"
    },
    {
        id: 7,
        title: "Art History",
        alt: "Art%20History",
        img: "https://images.unsplash.com/photo-1596959393097-bbf2ef1bb50f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/ArtHistory.json",
        category: "Art"
    },
    {
        id: 8,
        title: "Composers and Musicians",
        alt: "Composers%20and%20Musicians",
        img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/ComposersAndMusicians.json",
        category: "Art"
    },
    {
        id: 9,
        title: 'Biology',
        img: 'https://images.pexels.com/photos/674318/pexels-photo-674318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Biology.json',
        category: 'Science'
    },
    {
        id: 10,
        title: 'Chemistry',
        img: 'https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Chemistry.json',
        category: 'Science'
    },
    {
        id: 11,
        title: 'General Knowledge',
        alt: 'General%20Knowledge',
        img: 'https://images.pexels.com/photos/16015489/pexels-photo-16015489/free-photo-of-colorful-hot-air-balloon-in-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/general.json',
        category: 'Misc',
    },
    {
        id: 12,
        title: 'Grammar and Vocabulary',
        alt: 'Grammar%20and%20Vocabulary',
        img: 'https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/GrammarAndVocabulary.json',
        category: 'Language'
    },
    {
        id: 13,
        title: 'Basketball',
        img: 'https://images.pexels.com/photos/6076409/pexels-photo-6076409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/NBA.json',
        category: 'Sports'
    },
    {
        id: 14,
        title: 'Animals',
        img: 'https://images.pexels.com/photos/11692046/pexels-photo-11692046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/animals.json',
        category: 'Educational',
    },
    {
        id: 15,
        title: 'Football',
        img: 'https://images.pexels.com/photos/140039/pexels-photo-140039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/NFL.json',
        category: 'Sports'
    },
    {
        id: 16,
        title: 'Television',
        img: 'https://images.unsplash.com/photo-1635187330352-f0a955d053c9?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/tv.json',
        category: 'Entertainment',
    },
    {
        id: 17,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/movies.json',
        category: 'Entertainment',
    },
    {
        id: 18,
        title: 'Gaming',
        img: 'https://images.unsplash.com/photo-1674146870498-35309b29c102?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/gaming.json',
        category: 'Entertainment',
    },
    {
        id: 19,
        title: 'Arithmetic',
        img: 'https://images.pexels.com/photos/3137073/pexels-photo-3137073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Arithmetic.json',
        category: 'Math'
    },
    {
        id: 20,
        title: 'Algebra',
        img: 'https://images.pexels.com/photos/10957000/pexels-photo-10957000.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Algebra.json',
        category: 'Math'
    },
    {
        id: 21,
        title: 'Geometry',
        img: 'https://images.pexels.com/photos/2059736/pexels-photo-2059736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Geometry.json',
        category: 'Math'
    },
];

export default entertainment;