import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
    return (
        <AvatarGroup max={5}>
            <Avatar id="av1" alt="photo1" src="https://images.unsplash.com/photo-1569114241780-d60b37693dbc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" />
            <Avatar id="av1" alt="photo4" src="https://images.unsplash.com/photo-1573306711662-9299f17b4200?auto=format&fit=crop&q=80&w=2616&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar id="av1" alt="photo2" src="https://images.unsplash.com/photo-1514855333255-65e03dd92cdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5lbW98ZW58MHx8MHx8fDA%3D" />
        </AvatarGroup>
    );
}