import React, { useState, useRef} from 'react';
import { Modal } from 'react-bootstrap';
import robo from '../../assets/img/robo.png';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from "@material-ui/pickers";

export default function FormModal({chilren, closeModal, ...props}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [step, setStep] = useState(1);
    const [error, setError] = useState({step1: false, step2: false});
    const [lineWidth, setLineWidth] = useState(0);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    const [formData, setFormData] = useState({});
    const formRef = useRef();

    const info = [
        {
            title: 'How can I help you, Emmanuel?',
            message: 'Schedule a call with your monitor, solve your issues, get all the helps that you need.'
        },
        {
            title: 'Schedule a conversation with Ms. Jane Wayne?',
            message: ''
        },
        {
            title: 'Congratulations!',
            message: 'Your schedule has been successfully created. '
        },
        
    ];

    function openPicker(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    function onChangeDateHandler(date) {
        setSelectedDate(date);
        formData['schedule-date'] = date;
    }

    function formatDate(date) {
        const format = {1:'st', 2: 'nd', 3: 'rd'};
        var tomorrow = new Date();
        tomorrow.setDate(new Date().getDate()+1);
        //checking is selected date is today or tomorrow
        const today = date.toDateString() === (new Date()).toDateString() ? 'Today, ' : tomorrow.toDateString() === date.toDateString() ? 'Tomorrow, ' : '';
        //returning user readable date
        return `${today} ${months[date.getMonth()]} ${date.getDate()}${format[date.getDate()] ? format[date.getDate()] : 'th'}`;
    }

    function nextStep() {

        if(step === 1) {
            if(Object.keys(formData).length >= 3) {
                setStep(step+1);
                setError({...error, step1: false});
                setLineWidth(50);
            } else {
                setError({...error, step1: true});
            }
        }

        if(step === 2) {
            if(!formData['schedule-call'] && formData['schedule-call'] === 'yes' && Object.keys(formData).length >= 4) {
                setError({...error, step2: true});
            } else {
                setStep(step+1);
                setError({...error, step2: false});
                setLineWidth(100);
            }
        }


    }

    function handleModalColse() {
        closeModal();
    }

    function handleDataChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({...formData});
    }

    function handleComplete() {
        setFormData({});
        closeModal();
        setStep(1);
        setLineWidth(0);
    }

    function updatePhone(e) {
        e.preventDefault();
        setStep(2);
        setLineWidth(50);
    }

    function handleNewRequest() {
        setStep(1);
        setLineWidth(0);
        setFormData({});
        formRef.current.reset();
    }

    return (
        <Modal 
        {...props}
        size="md"
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header className="pt-4 px-4 pb-0 d-flex justify-content-between">

                <div className="content-left">
                    <button className="btn label-doctor btn-sm px-4">I'm Dr. H</button>
                    <h4 className="my-2">{step <= 3 ? info[step-1].title : ''}</h4>
                    <p>{step <= 3 ? info[step-1].message : ''}</p>
                </div>

                <div className="content-right">
                    <img src={robo} alt="robo" className="img-fluid" style={{height: '10rem'}}/>
                </div>

            </Modal.Header>
                <Modal.Body>
                   <div className="line" style={{width: lineWidth > 0 ? `calc(${lineWidth+'% + 2em'})` : 0 }}></div>
                   <form className="py-4 appointment-form" ref={formRef}>

                       {/* first step  */}
                        <div className="step1" style={{display: step === 1 ? 'block' : 'none'}}>

                            <div className="form-group">
                                <label htmlFor="help-needed">Help Needed:</label>
                                <select name="help-needed" id="help-needed" className="form-control custom-select" onChange={e => handleDataChange(e)}>
                                    <option value="I need to speak to a counselor">I need to speak to a counselor</option>
                                    <option value="My technology">My technology</option>
                                    <option value="I need help with STEMuli">MI need help with STEMuli</option>
                                    <option value="I need to ask my teacher for help on Assignment">I need to ask my teacher for help on Assignment</option>
                                    <option value="I need help with a college course">I need help with a college course</option>
                                    <option value="I need more time on an assignment">I need more time on an assignment</option>
                                </select>
                                {!formData['help-needed'] && error.step1 === true && <div className='text-danger'>Plese select One of The option</div> }
                            </div>

                            <div className="form-group">
                                <label htmlFor="help-assignment">Select assignment:</label>
                                <select name="help-assignment" id="help-assignment" className="form-control custom-select" onChange={e => handleDataChange(e)} disabled={formData['help-needed'] ? false : true}>
                                    <option value="101">Course 101</option>
                                    <option value="101">Course 102</option>
                                    <option value="101">Course 103</option>
                                </select>
                                {!formData['help-assignment'] && error.step1 === true && <div className='text-danger'>Plese select One of The option</div> }
                            </div>

                            <div className="form-group">
                                <label htmlFor="help-details">Add Details:</label>
                                <textarea class="form-control" name="help-details" id="help-details" rows="7" className="form-control" placeholder="I want people to |" onChange={e => handleDataChange(e)}></textarea>
                                {!formData['help-details'] && error.step1 === true && <div className='text-danger'>Please Add Some Details</div> }
                            </div>

                        </div>

                        {/* second step2  */}
                        <div className="step2" style={{display: step === 2 ? 'block' : 'none'}}>
                            {!formData['schedule-call'] && error.step2 === true && <div className='text-danger'>Please Choose Your Prefared Option from below</div> }
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="schedule-call1" name="schedule-call" class="custom-control-input" value="no" onChange={e => handleDataChange(e)} checked={!formData['schedule-call'] || formData['schedule-call'] === 'no'}/>
                                <label class="custom-control-label" htmlFor="schedule-call1">No, I don’t need to schedule a call</label>
                            </div>

                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="schedule-call2" name="schedule-call" class="custom-control-input" value="yes" onChange={e => handleDataChange(e)} checked={formData['schedule-call'] === 'yes'}/>
                                <label class="custom-control-label" htmlFor="schedule-call2">Yes, I want to schedule a call</label>
                            </div>

                            
                            <div className="row pl-4 mt-4">
                                <div className="col-md-12">
                                    {formData['schedule-call'] && formData['schedule-call'] === 'yes' && !formData['call-type']  && error.step2 === true && <div className='text-danger'>Choose A Call Option</div> }
                                </div>
                                <div className="container">
                                    <div className="row" style={{display: formData['schedule-call'] === 'yes' ? null : 'none'}}>
                                        <div className="col-md-6 form-group">
                                            <div className="custom-button">
                                                <input type="radio" name="call-type" id="call-type1" value="phone-call" onChange={e => handleDataChange(e)}/>
                                                <label>
                                                    <i class="fas fa-phone-alt"></i>
                                                    <small>Call my cell phone</small>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <div className="custom-button">
                                                <input type="radio" name="call-type" id="call-type2" value="video-call" onChange={e => handleDataChange(e)}/>
                                                <label>
                                                    <i class="fas fa-video"></i>
                                                    <small>Schedule a video call</small>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label>When:</label>
                                        </div>

                                        <div className="col-md-6 form-group">
                                            {!formData['schedule-date']  && error.step2 === true && <div className='text-danger'>Choose Schedule Date</div> }
                                            <select name="schedule-date" id="schedule-date" className="form-control custom-select" onClick={e => openPicker(e)}>
                                                <option defaultValue={formatDate(selectedDate)}>{formatDate(selectedDate)}</option>
                                            </select>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} hidden>
                                                <KeyboardDatePicker
                                                    fullWidth
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="Pick A Date"
                                                    value={selectedDate}
                                                    open={isOpen}
                                                    onChange={onChangeDateHandler}
                                                    onDismiss={() => setIsOpen(false)}
                                                    onAccept={(date) => setIsOpen(false)}
                                                    showTodayButton={true}
                                                    disablePast={true}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>

                                        <div className="col-md-6 form-group">
                                            {!formData['schedule-time']  && error.step2 === true && <div className='text-danger'>Choose Schedule time</div> }
                                            <select name="schedule-time" id="schedule-time" className="form-control custom-select"  onChange={e => handleDataChange(e)}>
                                                <option value="10AM-11:00AM">10AM - 11:00AM</option>
                                                <option value="11AM-12:00AM">11AM - 12:00AM</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-12 form-group" style={{display: formData['call-type'] === 'phone-call' && formData['schedule-call'] === 'yes' ? 'block' : 'none'}}>
                                    {formData['call-type'] === 'phone-call'  && !formData['phone'] && error.step2 === true && <div className='text-danger'>please Insert Phone Number</div> }
                                    <label htmlFor="phone">Your Phone Number</label>
                                    <input type="text" placeholder="+1 234 909 1123" className="form-control" name="phone" onChange={e => handleDataChange(e)}/>
                                </div>
                            </div>
                        </div>

                        {/* step 3  */}
                        <div className="step3" style={{display: step === 3 ? 'block' : 'none'}}>
                            <h4>Help needed:</h4>
                            <p>{formData['help-needed']} //  Course {formData['help-assignment']}</p>
                            <div className="schedule-details">
                                <h4>Schedule Details</h4>
                                <p>We have notified your monitor about your request, hang on tight</p>

                                {formData['schedule-date'] &&
                                    <div className="d-flex">
                                        <p className="icon"><i className="fas fa-calendar-check"></i></p>
                                        <p className="text">{formatDate(formData['schedule-date'])}</p>
                                    </div>}

                                {formData['schedule-time'] &&
                                    <div className="d-flex">
                                    <p className="icon"><i className="fas fa-clock"></i></p>
                                        <p className="text">{formData['schedule-time']}</p>
                                    </div>}


                                <div className="d-flex">
                                    <p className="icon"><i className="fas fa-user-alt"></i></p>
                                    <p className="text">Test User</p>
                                </div>

                                {formData['phone'] && 
                                <div className="d-flex">
                                    <p className="icon"><i className="fas fa-phone-alt"></i></p>
                                    <p className="text">{formData['phone']} <a href="#" onClick={e => updatePhone(e)} className="d-inline ml-4">Update Phone</a></p>
                                </div>}
                            </div>
                        </div>
                        {/**step4 */}
                        <div className="step4">

                        </div>
                   </form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <button className="btn btn-white" onClick={handleModalColse} style={{display: step >= 3 ? 'none' : ''}}>Cancel</button>
                    <button className="btn btn-purple" onClick={nextStep} style={{display: step >= 3 ? 'none' : ''}}>Continue</button>

                    <button className="btn btn-white" onClick={handleNewRequest} style={{display: step >= 3 ? 'block' : 'none'}}>+ New Request</button>
                    <button className="btn btn-purple" onClick={handleComplete} style={{display: step >= 3 ? 'block' : 'none'}}>Complete</button>
                </Modal.Footer>
        </Modal>
    );
}

