import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
    return (
        <AvatarGroup max={5}>
            <Avatar id="av1" alt="photo1" src="https://images.unsplash.com/photo-1603454479679-23c6ec76da7b?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar id="av1" alt="photo2" src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80" />
            <Avatar id="av1" alt="photo3" src="https://images.unsplash.com/photo-1569441652878-1a6bde5cbdfa?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar id="av1" alt="photo4" src="https://images.unsplash.com/photo-1573306711662-9299f17b4200?auto=format&fit=crop&q=80&w=2616&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </AvatarGroup>
    );
}