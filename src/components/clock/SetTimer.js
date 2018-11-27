import React, { Component } from 'react'

const initalState = {
    hours: 0,
    minutes: 0,
    seconds: 0
}
class SetTimer extends Component {
    state = {...initalState};
    handleChange = event => {
        const { name, value } = event.target;
        const val = value == null ? 0 : parseFloat(value)
        this.setState({
            [name]: val
        });
    }
    startTimer = event => {
        event.preventDefault();
        const { hours, minutes, seconds } = this.state;
        const hrs = hours * 3600;
        const min = minutes * 60;
        const sec = seconds;
        const total = parseFloat(hrs + min + sec);
        this.props.timer(total);
        this.resetForm();
        this.setState({...initalState});
    }
    resetForm = () => {
        document.getElementById("timerForm").reset();
    }
  render() {
    return (
        <div className="formContainer">
            <form id="timerForm" onSubmit={event => this.startTimer(event)}>
                <div className="inputs">
                    <input type="number" name="hours" placeholder="Hours" onChange={this.handleChange}/>
                    <input type="number" name="minutes" placeholder="Minutes" onChange={this.handleChange}/>
                    <input type="number" name="seconds" placeholder="Seconds" onChange={this.handleChange}/>
                </div>
                    <button className="startTimer">Start Timer</button>
            </form>
        </div>
    )
  }
}

export default SetTimer;