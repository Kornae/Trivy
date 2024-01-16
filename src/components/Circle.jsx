import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate(props) {

    return (
        <CircularProgress id='circle' color='inherit' variant="determinate" value={props.progress} style={{ width: '70px' }} />
    );
}