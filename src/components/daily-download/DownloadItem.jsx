import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function DownloadItem({course, ...props}) {
    
    return (
        <Box className={`daily-download-item ${props.className ? props.className : ''}`}>
            <Typography variant="h2">{course.id}</Typography>
            <Box className="subject-duration">
                <Typography variant="h3">{course.name}</Typography>
                <Typography variant="body2">{course.duration}</Typography>
            </Box>
            <i className="fas fa-download"></i>
        </Box>
    );
};
