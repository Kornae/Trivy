import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
    return (
        <AvatarGroup max={5}>
            <Avatar alt="photo1" src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2912&q=80" />
            <Avatar alt="photo2" src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80" />
            <Avatar alt="photo3" src="https://img.freepik.com/premium-photo/little-black-dog-yellow-background_360749-1001.jpg" />
            <Avatar alt="photo4" src="https://images.unsplash.com/photo-1565049140538-0f6b3f22f21f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2515&q=80" />
        </AvatarGroup>
    );
}