import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Typography, Button, Box, Grid, Checkbox, Paper, Avatar, TableFooter} from '@material-ui/core';

export default function StudentList(params) {
    
    return (
        <Grid item md={10} className="student-list">
           <Box className="student-list-header">
               <Typography variant="h1">Students</Typography>
               <Box className="student-list-action">
                  <div className="search-bar">
                      <i class="fas fa-search"></i>
                      <input type="text" className="form-control" />
                  </div>
                 <Box>
                    <Button variant="contained" className="btn-white btn-filter" size="large"><i class="fas fa-sliders-h"></i> Filter</Button>
                    <Button variant="contained" color="primary" size="large"><i class="fas fa-plus-circle"></i> Create New Group</Button>
                 </Box>
               </Box>
           </Box>

            <Paper className="student-list-table">
                <TableContainer>
                    <Table>

                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell>
                                    Students
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel>
                                        Group
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    {/**action */}
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell className="avatar-cell">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar">H</Avatar>
                                    <div className="student-info">
                                        <Typography variant="h6">Daniel Padilla</Typography>
                                        <Typography variant="body2">daniel.padilla@hotmail.com</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="label-danger">
                                        Class B
                                    </span>
                                </TableCell>
                                <TableCell className="action-icon">
                                    <i class="fas fa-ellipsis-h "></i>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell className="avatar-cell">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar">A</Avatar>
                                    <div className="student-info">
                                        <Typography variant="h6">Daniel Padilla</Typography>
                                        <Typography variant="body2">daniel.padilla@hotmail.com</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="label-primary">
                                        Class A
                                    </span>
                                </TableCell>
                                <TableCell className="action-icon">
                                    <i class="fas fa-ellipsis-h "></i>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell className="avatar-cell">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar">D</Avatar>
                                    <div className="student-info">
                                        <Typography variant="h6">Daniel Padilla</Typography>
                                        <Typography variant="body2">daniel.padilla@hotmail.com</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="label-warning">
                                        Class A
                                    </span>
                                </TableCell>
                                <TableCell className="action-icon">
                                    <i class="fas fa-ellipsis-h "></i>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell className="avatar-cell">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar">E</Avatar>
                                    <div className="student-info">
                                        <Typography variant="h6">Daniel Padilla</Typography>
                                        <Typography variant="body2">daniel.padilla@hotmail.com</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="label-secondary">
                                        Class A
                                    </span>
                                </TableCell>
                                <TableCell className="action-icon">
                                    <i class="fas fa-ellipsis-h "></i>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell className="avatar-cell">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar">F</Avatar>
                                    <div className="student-info">
                                        <Typography variant="h6">Daniel Padilla</Typography>
                                        <Typography variant="body2">daniel.padilla@hotmail.com</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="label-success">
                                        Class A
                                    </span>
                                </TableCell>
                                <TableCell className="action-icon">
                                    <i class="fas fa-ellipsis-h "></i>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox inputProps={{ 'aria-label': 'select all desserts' }}/>
                                </TableCell>
                                <TableCell className="avatar-cell">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar">K</Avatar>
                                    <div className="student-info">
                                        <Typography variant="h6">Daniel Padilla</Typography>
                                        <Typography variant="body2">daniel.padilla@hotmail.com</Typography>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="label-success">
                                        Class A
                                    </span>
                                </TableCell>
                                <TableCell className="action-icon">
                                    <i class="fas fa-ellipsis-h "></i>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid>
    );
};

