import FunctionsIcon from '@mui/icons-material/Functions';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ScienceIcon from '@mui/icons-material/Science';


import SchoolIcon from '@mui/icons-material/School';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GavelIcon from '@mui/icons-material/Gavel';


import PublicIcon from '@mui/icons-material/Public';
import PetsIcon from '@mui/icons-material/Pets';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';



import TvIcon from '@mui/icons-material/Tv';
import TheatersIcon from '@mui/icons-material/Theaters';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BoltIcon from '@mui/icons-material/Bolt';



import ComputerIcon from '@mui/icons-material/Computer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

const entertainment = [
    {
        id: 14,
        title: 'General Knowledge',
        alt: 'General%20Knowledge',
        img: 'https://images.unsplash.com/photo-1515446808777-87f69cb475aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <SchoolIcon fontSize='small' />,
        description: `This section covers a wide range of topics and facts from various fields, providing you with a well-rounded understanding of the world around us. From science and history to geography, pop culture, and beyond, let's dive into the vast sea of knowledge!`

    },


    {
        id: 3,
        title: 'Politics',
        img: 'https://images.unsplash.com/photo-1597201749396-99a6b0537704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <GavelIcon fontSize='small' />,
        description: `Whether you're a political enthusiast or just curious about how politics shapes our world, this quiz is designed to challenge and educate you. Get ready to explore the diverse landscape of political ideologies, structures, and international relations.`

    },
    {
        id: 6,
        title: 'Art',
        img: 'https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=25&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <ColorLensIcon fontSize='small' />,
        description: `In this section, we'll explore the diverse and fascinating realm of artistic expression. From ancient to contemporary art, we'll delve into various art forms, styles, and the creative minds behind them.`

    },
    {
        id: 17,
        title: 'Books',
        img: 'https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        api: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <AutoStoriesIcon fontSize='small' />,
        description: `This section is a gateway to the vast and captivating realm of literature, where words have the power to transport readers to new worlds, evoke emotions, and ignite the imagination.

Here, we'll explore a wide array of literary genres, celebrated authors, and timeless classics that have left a lasting impact on readers around the globe. Let's embark on a literary journey together!`

    },
    {
        id: 12,
        title: 'Geography',
        img: 'https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=22&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <LandscapeIcon fontSize='small' />,
        description: `This quiz will test your knowledge of the diverse and fascinating world we live in. From continents to capitals, natural wonders to human-made landmarks, and everything in between, this quiz will challenge your understanding of geography.`

    },
    {
        id: 11,
        title: 'Advanced Math',
        alt: 'Advanced%20Math',
        img: 'https://images.unsplash.com/photo-1512551980832-13df02babc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <FunctionsIcon fontSize='small' />,
        description: `his quiz will challenge your mathematical prowess and delve into complex concepts beyond basic arithmetic. If you're a math enthusiast or looking to test your mathematical skills, this quiz is perfect for you.`



    },

    {
        id: 13,
        title: 'Science',
        img: 'https://images.unsplash.com/photo-1501740326664-5571ff5e30a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=17&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ScienceIcon fontSize='small' />,
        description: `his quiz will take you on an exciting journey through the world of science, exploring various disciplines and phenomena that shape our understanding of the universe. Whether you're a science enthusiast or just curious about the natural world, this quiz is designed to challenge and expand your knowledge.`

    },

    {
        id: 5,
        title: 'Animals',
        img: 'https://images.unsplash.com/photo-1580200213184-c6aad1610aec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=27&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PetsIcon fontSize='small' />,
        description: `This quiz will take you on a fascinating journey through the diverse and captivating world of the animal kingdom. From tiny insects to majestic mammals, you'll encounter questions about various species, their unique characteristics, and their place in the natural world.`

    },
    {
        id: 4,
        title: 'World History',
        alt: 'World%20History',
        img: 'https://images.unsplash.com/photo-1636625305308-4284384ebc4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PublicIcon fontSize='small' />,
        description: `This quiz will take you on a captivating journey through the annals of human history, exploring key events, influential figures, and significant civilizations that have shaped the world we live in today.`

    },




    {
        id: 8,
        title: 'Television',
        img: 'https://media.istockphoto.com/id/537891762/photo/vintage-television-with-static-screen-in-black-and-white.jpg?s=612x612&w=0&k=20&c=wwd__iVG0DVgZajUqW5tx_nF55WIYQDTbVFaUE7YWWY=',
        api: 'https://opentdb.com/api.php?amount=10&category=14&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TvIcon fontSize='small' />,
        description: `This quiz will take you on a nostalgic and entertaining journey through the world of television. From classic shows to modern favorites, this quiz will test your knowledge of TV series, iconic characters, and memorable moments that have captured audiences' hearts.`

    },

    {
        id: 9,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://images.unsplash.com/photo-1671433437665-2a212ff88c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TheatersIcon fontSize='small' />,
        description: `Lights, camera, action! This quiz will transport you into the captivating world of cinema, where stories come to life on the silver screen. From classic movies to modern blockbusters, this quiz will put your movie knowledge to the test.`

    },
    {
        id: 2,
        title: 'Celebrities',
        img: 'https://www.madametussauds.com/hollywood/media/bgobynqu/boulevard-shot.jpg',
        api: 'https://opentdb.com/api.php?amount=10&category=26&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <PeopleOutlineIcon fontSize='small' />,
        description: `Get ready to dive into the glamorous world of showbiz and entertainment. From Hollywood stars to famous musicians and beloved personalities, this quiz will put your knowledge of celebrities to the test.`

    },
    {
        id: 1,
        title: 'Sports',
        img: 'https://www.dictionary.com/e/wp-content/uploads/2022/01/20220218_winterSports_1000x700-1024x717.jpg',
        api: 'https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsSoccerIcon fontSize='small' />,
        description: `This quiz will take you on an exhilarating journey through the world of sports, where athletes push the boundaries of human capabilities and inspire fans worldwide. From the Olympics to team sports, this quiz will put your sports knowledge to the test.`

    },

    {
        id: 10,
        title: 'Music',
        img: 'https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=12&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <MusicNoteIcon fontSize='small' />,
        description: `Get ready to tap your toes and sing along as we explore the captivating world of music. From classic hits to modern chart-toppers, this quiz will test your knowledge of music genres, famous artists, and memorable songs that have shaped the soundtrack of our lives.`

    },



    {
        id: 16,
        title: 'Computer Science',
        alt: 'Computer%20Science',
        img: 'https://images.unsplash.com/photo-1671433075691-a6f348deb9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ComputerIcon fontSize='small' />,
        description: `Get ready to explore the exciting world of computers, programming, and technology. From foundational concepts to cutting-edge innovations, this quiz will challenge your knowledge of computer science and its impact on our modern world.`

    },




    {
        id: 18,
        title: 'Vehicles',
        img: 'https://images.unsplash.com/photo-1570116476330-b9ab2f80bf76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=28&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <TimeToLeaveIcon fontSize='small' />,
        description: `Get ready to rev your engines and hit the road as we explore the fascinating world of vehicles. From cars and motorcycles to airplanes and ships, this quiz will test your knowledge of different types of vehicles, their history, and their impact on transportation and society.`

    },

    {
        id: 15,
        title: 'Mythology',
        img: 'https://images.unsplash.com/photo-1567522874215-d5e2f1bee83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=20&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <BoltIcon fontSize='small' />,
        description: ` Get ready to journey into the enchanting realms of ancient myths and legends. From gods and goddesses to heroic tales and mythical creatures, this quiz will test your knowledge of various mythological traditions from around the world.`

    },

    {
        id: 7,
        title: 'Gaming',
        img: 'https://exputer.com/wp-content/uploads/2023/07/The-PlayStation-5.jpg',
        api: 'https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsEsportsIcon fontSize='small' />,
        description: `Get ready to level up and explore the exciting world of video games. From classic titles to modern masterpieces, this quiz will put your gaming knowledge to the test.`

    },
]

export default entertainment;