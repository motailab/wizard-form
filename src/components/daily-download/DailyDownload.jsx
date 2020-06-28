import React from 'react';
import ReactPlayer from 'react-player';
import { Alert } from '@material-ui/lab';
import { Grid, Box, Typography, Button, Card, CardContent, Avatar} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DownloadItem from './DownloadItem';
import CustomRadioButton from '../utils/CustomButton/CustomRadioButton';

export default function DailyDownload(props) {
    const history = useHistory();

    function handleComplete() {
        //this hanlder will take you to the next page
        history.push('/daily-plan');
    }

    return (
        <Grid container spacing={3}>

            <Grid item lg={4}>
                <Box className="daily-download-list">
                   <DownloadItem className='completed'
                    course={{id: '01', name: 'MATH 101', duration: '45:00 mins'}}/>

                   <DownloadItem className='active'
                    course={{id: '02', name: 'Physics', duration: '33:00 mins'}}/>

                   <DownloadItem
                    course={{id: '01', name: 'MATH 101', duration: '45:00 mins'}}/>
                    
                   <DownloadItem
                    course={{id: '01', name: 'MATH 101', duration: '45:00 mins'}}/>
                </Box>
            </Grid>

            <Grid item lg={8}>
                <Box className="download-headline">
                    <Box className="download-title">
                        <Typography variant="h4">My Daily Download / <span>MAPS 101</span></Typography>
                        <Typography variant="body2">Monday, July 2, 2020</Typography>
                    </Box>
                    <Box className="next-button">
                        {/* <Button variant="contained" color="primary" size="large">Next</Button> */}
                        <Button variant="contained" 
                        className='complete-button'
                        onClick={handleComplete}>
                            Complete
                        </Button>
                    </Box>
                </Box>

                <Box className="video-player-container">
                    <ReactPlayer className="video-player" url="https://www.youtube.com/watch?v=bG8nichwY4M" controls>
                    </ReactPlayer>
                </Box>

                <Alert  severity="error" className="important-message">
                    <Typography variant="h4">Message from Mrs Wayne Patel</Typography>
                    <Typography variant="body2">You are required to complete each daily download before you can proceed to use the system</Typography>
                </Alert>

                <Card className="metting-area">
                    <CardContent>
                        <Box className="avatar-area">
                            <Avatar alt="some one image" src="unknown.jpg">A</Avatar>
                            <Box className="info">
                                <Typography variant="body1">Wayne Patel</Typography>
                                <Typography variant="body2">Teacher | Grade 4</Typography>
                            </Box>
                        </Box>

                        <Box className="office-hours">
                            <Box className="schedule">
                                <Box className="schedule-title">
                                    <i className="fas fa-calendar-alt"></i>
                                    <Typography variant="h5">Office Hours</Typography>
                                </Box>

                                <Box className="weekdays">
                                    <CustomRadioButton name="d" id="m" variant="primary">M</CustomRadioButton>
                                    <CustomRadioButton name="d" id="t" variant="primary">T</CustomRadioButton>
                                    <CustomRadioButton name="d" id="w" variant="primary">w</CustomRadioButton>
                                    <CustomRadioButton name="d" id="th" variant="primary">th</CustomRadioButton>
                                    <CustomRadioButton name="d" id="f" variant="primary">f</CustomRadioButton>
                                </Box>

                                <Box className="office-time">
                                    <CustomRadioButton name="time" id="time-1">11:00 - 11:30AM</CustomRadioButton>
                                    <CustomRadioButton name="time" id="time-2">11:00 - 11:30AM</CustomRadioButton>
                                    <CustomRadioButton name="time" id="time-3">11:00 - 11:30AM</CustomRadioButton>
                                    <CustomRadioButton name="time" id="time-4">11:00 - 11:30AM</CustomRadioButton>
                                    <CustomRadioButton name="time" id="time-5">11:00 - 11:30AM</CustomRadioButton>
                                    <CustomRadioButton name="time" id="time-6">11:00 - 11:30AM</CustomRadioButton>
                                </Box>

                            </Box>

                            <Box className="appointment">
                                <Button variant="contained" color="primary" size="large">Book Appointment</Button>
                            </Box>
                        </Box>

                        <Box className="conference">
                            <Box className="conference-title">
                                <i className="fas fa-video"></i>
                                <Typography variant="body1">Meeting Conference
                                    <br/>
                                    <Typography variant="body2">
                                        Starts in 30 mins
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box className="appointment join-conference">
                                <Button variant="contained" size="large" color="primary">Join Conference</Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}