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
        id: 1,
        title: 'Sports',
        img: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        api: 'https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsSoccerIcon fontSize='small' />
    },
    {
        id: 2,
        title: 'Computer Science',
        alt: 'Computer%20Science',
        img: 'https://images.unsplash.com/photo-1488485339565-566d63f7dbb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ComputerIcon fontSize='small' />
    },
    {
        id: 3,
        title: 'Vehicles',
        img: 'https://images.unsplash.com/photo-1587181972975-ff4ecddeb30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=28&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <TimeToLeaveIcon fontSize='small' />,
    },
    {
        id: 4,
        title: 'Animals',
        img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=27&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PetsIcon fontSize='small' />
    },
    {
        id: 5,
        title: 'Gaming',
        img: 'https://images.unsplash.com/photo-1554213352-5ffe6534af08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2296&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsEsportsIcon fontSize='small' />
    },
    {
        id: 6,
        title: 'Politics',
        img: 'https://images.unsplash.com/photo-1515071970049-680dbd2a2339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <GavelIcon fontSize='small' />
    },
    {
        id: 7,
        title: 'General Knowledge',
        alt: 'General%20Knowledge',
        img: 'https://images.unsplash.com/photo-1564769610726-59cead6a6f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2149&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <SchoolIcon fontSize='small' />
    },
    {
        id: 8,
        title: 'Art',
        img: 'https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=25&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <ColorLensIcon fontSize='small' />
    },
    {
        id: 9,
        title: 'Books',
        img: 'https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <AutoStoriesIcon fontSize='small' />
    },
    {
        id: 10,
        title: 'Geography',
        img: 'https://images.unsplash.com/photo-1519709042477-8de6eaf1fdc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=22&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <LandscapeIcon fontSize='small' />
    },
    {
        id: 11,
        title: 'Advanced Math',
        alt: 'Advanced%20Math',
        img: 'https://images.unsplash.com/photo-1512551980832-13df02babc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <FunctionsIcon fontSize='small' />
    },
    {
        id: 12,
        title: 'Science',
        img: 'https://images.unsplash.com/photo-1526930700683-86db0d6bab09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxzY2llbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        api: 'https://opentdb.com/api.php?amount=10&category=17&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ScienceIcon fontSize='small' />
    },
    {
        id: 13,
        title: 'World History',
        alt: 'World%20History',
        img: 'https://images.unsplash.com/photo-1553613600-cc662dc488f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2744&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PublicIcon fontSize='small' />
    },
    {
        id: 14,
        title: 'Television',
        img: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=14&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TvIcon fontSize='small' />
    },
    {
        id: 15,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://plus.unsplash.com/premium_photo-1676049462062-e8ec9b661675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TheatersIcon fontSize='small' />
    },
    {
        id: 16,
        title: 'Music',
        img: 'https://images.unsplash.com/photo-1567928513938-cd0e82a33ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=12&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <MusicNoteIcon fontSize='small' />
    },
    {
        id: 17,
        title: 'Mythology',
        img: 'https://images.unsplash.com/photo-1554464901-78c9215b7e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
        api: 'https://opentdb.com/api.php?amount=10&category=20&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <BoltIcon fontSize='small' />
    },
    {
        id: 18,
        title: 'Celebrities',
        img: 'https://images.unsplash.com/photo-1589348972026-df051797cd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxIb2xseXdvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        api: 'https://opentdb.com/api.php?amount=10&category=26&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <PeopleOutlineIcon fontSize='small' />
    },
]

export default entertainment;