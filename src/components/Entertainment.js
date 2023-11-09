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
        img: 'https://images.unsplash.com/photo-1629673487087-e506ddddf212?auto=format&fit=crop&q=80&w=2765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsSoccerIcon fontSize='small' />
    },
 
    {
        id: 4,
        title: 'Vehicles',
        img: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=28&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <TimeToLeaveIcon fontSize='small' />,
    },
    {
        id: 2,
        title: 'Animals',
        img: 'https://images.unsplash.com/photo-1626548307930-deac221f87d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=27&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <PetsIcon fontSize='small' />
    },
    {
        id: 5,
        title: 'Gaming',
        img: 'https://images.unsplash.com/photo-1659101967085-36dc2abaeca7?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <SportsEsportsIcon fontSize='small' />
    },
    {
        id: 3,
        title: 'Computer Science',
        alt: 'Computer%20Science',
        img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986',
        category: 'Educational',
        logo: <ComputerIcon fontSize='small' />
    },

    {
        id: 6,
        title: 'General Knowledge',
        alt: 'General%20Knowledge',
        img: 'https://images.unsplash.com/photo-1568285631212-f2429f80f5cc?auto=format&fit=crop&q=80&w=2591&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <SchoolIcon fontSize='small' />
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
        api: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <AutoStoriesIcon fontSize='small' />
    },

    {
        id: 9,
        title: 'Politics',
        img: 'https://images.unsplash.com/photo-1541876788-2221e585da7f?auto=format&fit=crop&q=80&w=2034&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple&encode=url3986',
        category: 'Misc',
        logo: <GavelIcon fontSize='small' />
    },
    {
        id: 10,
        title: 'Geography',
        img: 'https://images.unsplash.com/photo-1598944999410-e93772fc48a5?auto=format&fit=crop&q=80&w=2871&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=22&type=multiple&encode=url3986',
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
        img: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=14&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <TvIcon fontSize='small' />
    },
    {
        id: 15,
        title: 'Movies & Film',
        alt: 'Movies%20&%20Film',
        img: 'https://images.unsplash.com/photo-1579642761360-eabd1cca1e81?auto=format&fit=crop&q=80&w=2667&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        img: 'https://images.unsplash.com/photo-1648538836903-aa4e9ea103ac?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        api: 'https://opentdb.com/api.php?amount=10&category=26&type=multiple&encode=url3986',
        category: 'Entertainment',
        logo: <PeopleOutlineIcon fontSize='small' />
    },
]

export default entertainment;