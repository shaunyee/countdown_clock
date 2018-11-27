import React, { Component } from 'react';

import SetTimer from './SetTimer';
import './clock.css';

export default class Clock extends Component {
  state = {
    countdownTimer: '00:00:00'
  }

  timer = (seconds) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    this.displayTimeLeft(seconds);
    let countdown = setInterval(() => {
      //Check if the timer should stop
      const secondsLeft = Math.round((then - Date.now())/1000);
      if(secondsLeft < 0) {
        clearInterval(countdown);
        return
      }
      this.displayTimeLeft(secondsLeft);
    }, 1000)
  }

  displayTimeLeft = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const second = (remainingSeconds % 60)
    const time = `${hours < 10 ? `0` : ``}${hours}:${minutes < 10 ? `0` : ``}${minutes}:${second < 10 ? `0` : ``}${second}`;
    this.setState({countdownTimer: time})
    console.log({remainingSeconds})
  }

  render() {
    return (
      <div className="timerContianer">
        <div className="clock">
            <p>
              {this.state.countdownTimer}
            </p>
        </div>
            <SetTimer timer={this.timer}/>
      </div>
    )
  }
}
