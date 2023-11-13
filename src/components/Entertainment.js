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
        img: 'https://images.unsplash.com/photo-1502119095323-253837f293f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
        api: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <SchoolIcon fontSize='small' />
    },   



    {
        id: 2,
        title: 'Animals',
        img: 'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PetsIcon fontSize='small' />
    },   {
        id: 1,
        title: 'Sports',
        img: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsSoccerIcon fontSize='small' />
    },
 {
        id: 5,
        title: 'Gaming',
        img: 'https://images.unsplash.com/photo-1674146870498-35309b29c102?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsEsportsIcon fontSize='small' />,
    },
 
   
    
  {
        id: 13,
        title: 'World History',
        alt: 'World%20History',
      img: 'https://images.unsplash.com/photo-1616649003731-94787d8c5bc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
        api: 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PublicIcon fontSize='small' />
    },

    {
        id: 9,
        title: 'Politics',
        img: 'https://images.unsplash.com/photo-1545677905-0e560fe4e5ce?q=80&w=2502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <GavelIcon fontSize='small' />
    },
  

    {
        id: 19,
        title: 'Cartoons & Animations',
        alt: 'Cartoons%20&%20Animations',
        img: 'https://images8.alphacoders.com/113/1133747.jpg',
        api: 'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <AnimationIcon fontSize='small' />,
    },


    {
        id: 15,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://images.unsplash.com/photo-1547700055-b61cacebece9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TheatersIcon fontSize='small' />
    },





    {
        id: 4,
        title: 'Vehicles',
        img: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <TimeToLeaveIcon fontSize='small' />,
    },

    {
        id: 3,
        title: 'Computer Science',
        alt: 'Computer%20Science',
        img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ComputerIcon fontSize='small' />
    },


    {
        id: 7,
        title: 'Art',
        img: 'https://images.unsplash.com/photo-1565742672058-6c844f5afc2e?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=25&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <ColorLensIcon fontSize='small' />
    },
    {
        id: 8,
        title: 'Books',
        img: 'https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&q=80&w=2362&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <AutoStoriesIcon fontSize='small' />
    },


    {
        id: 10,
        title: 'Geography',
        img: 'https://images.unsplash.com/photo-1598944999410-e93772fc48a5?auto=format&fit=crop&q=80&w=2871&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <LandscapeIcon fontSize='small' />
    },
    {
        id: 11,
        title: 'Advanced Math',
        alt: 'Advanced%20Math',
        img: 'https://images.unsplash.com/photo-1522932753915-9ee97e43e3d9?auto=format&fit=crop&q=80&w=2597&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <FunctionsIcon fontSize='small' />
    },
    {
        id: 12,
        title: 'Science',
        img: 'https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ScienceIcon fontSize='small' />
    },

    {
        id: 14,
        title: 'Television',
        img: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TvIcon fontSize='small' />
    },

    {
        id: 16,
        title: 'Music',
        img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <MusicNoteIcon fontSize='small' />
    },


    {
        id: 17,
        title: 'Mythology',
        img: 'https://images.unsplash.com/photo-1554464901-78c9215b7e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <BoltIcon fontSize='small' />
    },
    {
        id: 18,
        title: 'Celebrities',
        img: 'https://images.unsplash.com/photo-1653682902573-efb324d7ee9b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <PeopleOutlineIcon fontSize='small' />
    },

]

export default entertainment;