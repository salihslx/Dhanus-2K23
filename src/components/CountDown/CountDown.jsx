import React, { Component } from "react";
import './CountDown.scss'
import {AiOutlineCalendar} from 'react-icons/ai'

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  addToCalendar() {
    const url = "http://www.google.com/calendar/event?action=TEMPLATE&dates=20220602T033000Z%2F20220604T123000Z&text=Dhanus%202k22%20%7C%20Tech%20Fest%20%7C%20College%20of%20Engineering%20Kallooppara%2C%20Pathanamthitta&location=College%20of%20Engineering%20Kallooppara%2C%20Pathanamthitta&details=Tech%20Fest%20of%20College%20of%20Engineering%20Kalloopparra%2C%20Pathanamthitta%20%7C%20June%202%2C%203%2C%204%20%7C%20Get%20Ready%20to%20Party!"
    window.open(url, "_blank")
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 10, hours: 5, minutes: 10, seconds: 10 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="count-down-container">
        <div className="count-down">
          <div className="Clock-days">
              <h1>Days</h1>
              {this.leading0(this.state.days)}
          </div>
          <div className="Clock-hours">
              <h1>Hours</h1>
            {this.leading0(this.state.hours)}
          </div>
          <div className="Clock-minutes">
              <h1>Minutes</h1>
            {this.leading0(this.state.minutes)}
          </div>
          <div className="Clock-seconds">
              <h1>Seconds</h1>
            {this.leading0(this.state.seconds)}
          </div>
        </div>
        <div className="calendar-container">
          <button onClick={this.addToCalendar}><AiOutlineCalendar className="calendar-icon" />Add to Calendar</button>
        </div>
      </div>
    );
  }
}
export default CountDown;
