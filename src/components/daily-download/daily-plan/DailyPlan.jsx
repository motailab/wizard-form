import React, { useState } from 'react';
import { Grid, Card, CardContent, Box, Typography, Button, Modal} from '@material-ui/core';



//dynamic plan form field if you add any changes in dynamic form field please make your changes here
const DynamicPlan = props => (
    <div className="dynamic-plan">
        <div className="form-group">
            <label className="d-flex justify-content-between">Select a task:  <button className="btn text-danger" type="button" onClick={props.onClick}>Delete</button></label>
            <select name="assignment" id="" className="form-control custom-select">
                <option value="course-101">i am sick today</option>
            </select>
        </div>
        <div className="form-group">
            <textarea name="details" className="form-control" rows="6" placeholder="Course 101"></textarea>
        </div>
    </div>
);

export default function DailyPlan(props) {
    const [open, setOpen] = useState(false);
    let [planField, setPlanField] = useState([]);

    function addNewPlanField() {
        //this function will add dynamic field in the form when user click [+new plan] buttton
        planField = [...planField, DynamicPlan];
        setPlanField(planField);
    }

    function removeDynamicPlanField(index) {
        //this function will remove fields from form which is added dynamically
        setPlanField(planField.filter((item, i) => i !== index));
    }

    function showPlanModal() {
        setOpen(true);
    }

    function handleModalClose() {
        setOpen(false);
    }

    return (
        <Grid container justify="center" spacing={4}>
            <Grid item lg={10}>
                <Box display="flex" paddingY="1rem">
                    <Button variant="contained" size="large" className="complete-button" style={{marginLeft: 'auto'}} onClick={showPlanModal}>Complete</Button>
                </Box>

                <Card>
                    <CardContent>
                        <Box className="plan-header">
                            <Box><i class="fas fa-calendar-alt"></i></Box>
                            <Typography variant="h2">What is your plan for today?</Typography>
                        </Box>
                        <form style={{margin: '2rem 3rem'}} className="appointment-form">
                            <div className="form-group">
                                <label>Select a task:</label>
                                <select name="task" id="" className="form-control custom-select">
                                    <option value="collage-course">i will be working on collage course</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Select assignment:</label>
                                <select name="assignment" id="" className="form-control custom-select">
                                    <option value="course-101">Courses 101</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label>When: </label>
                                </div>
                                <div className="col-md-6 form-group">
                                    <select name="from" id="" className="form-control custom-select">
                                        <option value="11AM">11AM</option>
                                    </select>
                                    <label>from</label>
                                </div>
                                <div className="col-md-6 form-group">
                                    <select name="to" id="" className="form-control custom-select">
                                        <option value="12PM">12PM</option>
                                    </select>
                                    <label>to</label>
                                </div>
                            </div>

                            <div className="dynamic-field-container">
                                {/**rendering dynamic fields here */}
                                {planField.map((Item, index) => (
                                     <Item key={Math.random()*10000} onClick={() => removeDynamicPlanField(index)} />
                                ))}
                            </div>

                            <div className="form-group">
                                <Button className="btn btn-block btn-lg btn-white" onClick={addNewPlanField}>+ New Plan</Button>
                            </div>
                        </form>

                        <Box className="plan-footer">
                            <Button className="btn btn-lg btn-white" size="large" onClick={addNewPlanField}>+ New Plan</Button>
                            <Button variant="contained"  color="primary" size="large">Continue</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            <Modal open={open} onClose={handleModalClose}>
                {/* plan modal  */}
                <Box className="plan-modal">
                    <Typography variant="h2">Do you need some help today?</Typography>
                    <Box className="plan-modal-action">
                        <Button variant="contained" className="btn-white" size="large">No, I don’t need help</Button>
                        <Button variant="contained" size="large" color="primary">Yes, I need Help</Button>
                    </Box>
                </Box>
            </Modal>
            
        </Grid>
    );
}