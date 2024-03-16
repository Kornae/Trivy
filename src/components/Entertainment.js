const entertainment = [
    {
        id: 13,
        title: 'American History',
        alt: 'American%20History',
        img: 'https://images.unsplash.com/photo-1505236104532-dc183ec5f337?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/AmericanHistory.json',
        category: 'History'
    },

    {
        id: 14,
        title: 'Ancient Civilizations',
        alt: 'Ancient%20Civilizations',
        img: 'https://images.unsplash.com/photo-1586472694047-2446c6ac56dc?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/AncientCivilizations.json',
        category: 'History'
    },
    {
        id: 12,
        title: 'World History',
        alt: 'World%20History',
        img: 'https://images.unsplash.com/photo-1549664171-bf00f4b2ad70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVzb3BvdGFtaWF8ZW58MHx8MHx8fDA%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/WorldHistory.json',
        category: 'History'
    },
    {
        id: 20,
        title: "Physical Geography",
        alt: "Physical%20Geography",
        img: "https://images.pexels.com/photos/3601244/pexels-photo-3601244.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/PhysicalGeography.json",
        category: "Geography"
    },
    {
        id: 18,
        title: 'Continents and Oceans',
        alt: 'Continents%20and%20Oceans',
        img: 'https://images.unsplash.com/photo-1550940857-b8eec3d11873?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/ContinentsAndOceans.json',
        category: 'Geography'
    },
    {
        id: 19,
        title: "Countries and Capitals",
        alt: "Countries%20and%20Capitals",
        img: "https://images.unsplash.com/photo-1544906243-a69767cc000b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/CountriesAndCapitals.json",
        category: "Geography"
    },
    {
        id: 22,
        title: "Art History",
        alt: "Art%20History",
        img: "https://images.unsplash.com/photo-1596959393097-bbf2ef1bb50f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/ArtHistory.json",
        category: "Art"
    },
    {
        id: 23,
        title: "Composers and Musicians",
        alt: "Composers%20and%20Musicians",
        img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/ComposersAndMusicians.json",
        category: "Art"
    },
    {
        id: 1,
        title: 'Biology',
        img: 'https://images.unsplash.com/photo-1659974708151-e90f42518dd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTc4OTEyfHxlbnwwfHx8fHw%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Biology.json',
        category: 'Science'
    },
    {
        id: 2,
        title: 'Chemistry',
        img: 'https://images.unsplash.com/photo-1608037222022-62649819f8aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Chemistry.json',
        category: 'Science'
    },
    // {
    //     id: 5,
    //     title: 'Astronomy',
    //     img: 'https://images.unsplash.com/photo-1569852178898-9605dfd85b4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG1vb258ZW58MHx8MHx8fDA%3D',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Astronomy.json',
    //     category: 'Science'
    // },
    // {
    //     id: 6,
    //     title: 'Earth Science',
    //     alt: 'Earth%20Science',
    //     img: 'https://images.unsplash.com/photo-1659835547789-cb00dbd213c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/EarthScience.json',
    //     category: 'Science'
    // },

    {
        id: 38,
        title: 'General Knowledge',
        alt: 'General%20Knowledge',
        img: 'https://images.pexels.com/photos/16015489/pexels-photo-16015489/free-photo-of-colorful-hot-air-balloon-in-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/general.json',
        category: 'Misc',
    },
    {
        id: 15,
        title: 'Grammar and Vocabulary',
        alt: 'Grammar%20and%20Vocabulary',
        img: 'https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/GrammarAndVocabulary.json',
        category: 'Language'
    },
    {
        id: 42,
        title: 'Animals',
        img: 'https://images.pexels.com/photos/11692046/pexels-photo-11692046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/animals.json',
        category: 'Educational',
    },
    // {
    //     id: 25,
    //     title: "Human Anatomy",
    //     alt: "Human%20Anatomy",
    //     img: "https://images.unsplash.com/photo-1611784600701-fdb71167b162?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/HumanAnatomy.json",
    //     category: "Health"
    // },
    // {
    //     id: 28,
    //     title: "Politics and Government",
    //     alt: "Politics%20and%20Government",
    //     img: "https://images.unsplash.com/photo-1570941144129-f05f9d30bf06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    //     api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/PoliticsAndGovernment.json",
    //     category: "Social Studies"
    // },
    // {
    //     id: 29,
    //     title: "Social Issues",
    //     alt: "Social%20Issues",
    //     img: "https://images.unsplash.com/photo-1591621839646-246cf85f9c91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwaXNzdWVzfGVufDB8fDB8fHww",
    //     api: "https://raw.githubusercontent.com/Kornae/quiz-api/main/SocialIssues.json",
    //     category: "Social Studies"
    // },
    // {
    //     id: 30,
    //     title: 'Economics',
    //     img: 'https://images.unsplash.com/photo-1567449303055-2cd2ef5c4e74?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Economics.json',
    //     category: 'Social Studies'
    // },
    {
        id: 34,
        title: 'Baseball',
        img: 'https://images.unsplash.com/photo-1516731415730-0c607149933a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzNTAxMTAzfHxlbnwwfHx8fHw%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/MLB.json',
        category: 'Sports'
    },
    {
        id: 32,
        title: 'Basketball',
        img: 'https://images.unsplash.com/photo-1559692048-79a3f837883d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhc2tldGJhbGwlMjBjb3VydHxlbnwwfHwwfHx8MA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/NBA.json',
        category: 'Sports'
    },
    {
        id: 33,
        title: 'Football',
        img: 'https://images.unsplash.com/photo-1611000273610-f4fb9c7fd0be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1lcmljYW4lMjBmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/NFL.json',
        category: 'Sports'
    },
    // {
    //     id: 35,
    //     title: 'Hockey',
    //     img: 'https://images.unsplash.com/photo-1545471977-94cac22e71ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9ja2V5fGVufDB8fDB8fHww',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/NHL.json',
    //     category: 'Sports'
    // },
    // {
    //     id: 36,
    //     title: 'Soccer',
    //     img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vdGJhbGx8ZW58MHx8MHx8fDA%3D',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/FIFA.json',
    //     category: 'Sports'
    // },
    // {
    //     id: 37,
    //     title: 'Wrestling',
    //     img: 'https://images.unsplash.com/photo-1443683263937-3e377546e8a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdXRXxlbnwwfHwwfHx8MA%3D%3D',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/WWE.json',
    //     category: 'Sports'
    // },
    {
        id: 39,
        title: 'Television',
        img: 'https://images.unsplash.com/photo-1635187330352-f0a955d053c9?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/tv.json',
        category: 'Entertainment',
    },
    {
        id: 40,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/movies.json',
        category: 'Entertainment',
    },
    {
        id: 41,
        title: 'Gaming',
        img: 'https://images.unsplash.com/photo-1674146870498-35309b29c102?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/gaming.json',
        category: 'Entertainment',
    },

    // {
    //     id: 43,
    //     title: 'Mythology',
    //     img: 'https://images.pexels.com/photos/12951546/pexels-photo-12951546.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    //     api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/mythology.json',
    //     category: 'Misc',
    // },
    {
        id: 17,
        title: 'Famous Authors and Works',
        alt: 'Famous%20Authors%20and%20Works',
        img: 'https://cdn.britannica.com/83/136283-050-9C9D6ED8/Mark-Twain-1907.jpg',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/FamousAuthorsAndWorks.json',
        category: 'Language'
    },
    {
        id: 7,
        title: 'Arithmetic',
        img: 'https://images.pexels.com/photos/3137073/pexels-photo-3137073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Arithmetic.json',
        category: 'Math'
    },
    {
        id: 8,
        title: 'Algebra',
        img: 'https://images.pexels.com/photos/10957000/pexels-photo-10957000.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Algebra.json',
        category: 'Math'
    },
    {
        id: 9,
        title: 'Geometry',
        img: 'https://images.pexels.com/photos/2059736/pexels-photo-2059736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/Geometry.json',
        category: 'Math'
    },
];

export default entertainment;