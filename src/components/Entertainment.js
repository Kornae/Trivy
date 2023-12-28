import AnimationIcon from '@mui/icons-material/Animation';
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
        id: 6,
        title: 'General Knowledge',
        alt: 'General%20Knowledge',
        img: 'https://images.unsplash.com/photo-1649932543242-d0a05e1ff135?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/general.json',
        category: 'Misc',
        logo: <SchoolIcon fontSize='small' />
    },

    {
        id: 2,
        title: 'Animals',
        img: 'https://images.unsplash.com/photo-1568785629399-0cd9324febdf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNlYSUyMHR1cnRsZXxlbnwwfHwwfHx8MA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/animals.json',
        category: 'Educational',
        logo: <PetsIcon fontSize='small' />
    }, 
    {
        id: 11,
        title: 'Math',
        alt: 'Advanced%20Math',
        img: 'https://images.unsplash.com/photo-1522932753915-9ee97e43e3d9?auto=format&fit=crop&q=80&w=2597&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/math.json',
        category: 'Educational',
        logo: <FunctionsIcon fontSize='small' />
    },


    {
        id: 9,
        title: 'US Politics',
        alt: 'US%20Politics',
        img: 'https://images.unsplash.com/photo-1545677905-0e560fe4e5ce?q=80&w=2502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/politics.json',
        category: 'Misc',
        logo: <GavelIcon fontSize='small' />
    },

    {
        id: 5,
        title: 'Gaming',
        img: 'https://images.unsplash.com/photo-1674146870498-35309b29c102?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/gaming.json',
        category: 'Entertainment',
        logo: <SportsEsportsIcon fontSize='small' />,
    },


    {
        id: 19,
        title: 'Cartoons & Animations',
        alt: 'Cartoons%20&%20Animations',
        img: 'https://images8.alphacoders.com/113/1133747.jpg',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/cartoons.json',
        category: 'Entertainment',
        logo: <AnimationIcon fontSize='small' />,
    },


    {
        id: 15,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://images.unsplash.com/photo-1547700055-b61cacebece9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/movies.json',
        category: 'Entertainment',
        logo: <TheatersIcon fontSize='small' />
    },





    {
        id: 4,
        title: 'Vehicles',
        img: 'https://images.unsplash.com/photo-1577727979487-ed2750b2d2d5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/vehicles.json',
        category: 'Misc',
        logo: <TimeToLeaveIcon fontSize='small' />,
    },

    {
        id: 3,
        title: 'Computer Science',
        alt: 'Computer%20Science',
        img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/cs.json',
        category: 'Educational',
        logo: <ComputerIcon fontSize='small' />
    },


    {
        id: 7,
        title: 'Art',
        img: 'https://images.unsplash.com/photo-1565742672058-6c844f5afc2e?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/art.json',
        category: 'Misc',
        logo: <ColorLensIcon fontSize='small' />
    },
    {
        id: 8,
        title: 'Books',
        img: 'https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&q=80&w=2362&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/books.json',
        category: 'Misc',
        logo: <AutoStoriesIcon fontSize='small' />
    },


    {
        id: 10,
        title: 'Geography',
        img: 'https://images.unsplash.com/photo-1598944999410-e93772fc48a5?auto=format&fit=crop&q=80&w=2871&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/geo.json',
        category: 'Educational',
        logo: <LandscapeIcon fontSize='small' />
    },
    {
        id: 12,
        title: 'Science',
        img: 'https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/science.json',
        category: 'Educational',
        logo: <ScienceIcon fontSize='small' />
    },

    {
        id: 14,
        title: 'Television',
        img: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/tv.json',
        category: 'Entertainment',
        logo: <TvIcon fontSize='small' />
    },

    {
        id: 16,
        title: 'Music',
        img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/music.json',
        category: 'Entertainment',
        logo: <MusicNoteIcon fontSize='small' />
    },


    {
        id: 17,
        title: 'Mythology',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1692719972317',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/mythology.json',
        category: 'Misc',
        logo: <BoltIcon fontSize='small' />
    },
    
    {
        id: 18,
        title: 'Celebrities',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1683844828250',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/celebrities.json',
        category: 'Entertainment',
        logo: <PeopleOutlineIcon fontSize='small' />
    },
    {
        id: 1,
        title: 'Sports',
        img: 'https://images.unsplash.com/photo-1617939532603-2905b4eeb788?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/sports.json',
        category: 'Entertainment',
        logo: <SportsSoccerIcon fontSize='small' />
    },
    {
        id: 13,
        title: 'American History',
        alt: 'American%20History',
        img: 'https://images.unsplash.com/photo-1616649003731-94787d8c5bc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
        api: 'https://raw.githubusercontent.com/Kornae/quiz-api/main/history.json',
        category: 'Educational',
        logo: <PublicIcon fontSize='small' />
    },
]

export default entertainment;