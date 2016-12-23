import React from 'react'
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css'


export default class Calendar extends React.Component{
  constructor (props) {
    super(props);

    this.options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    this.from = new Date(2016, 8, 1)
    this.to = new Date(2016, 8, 15)

    this.state = {
        isOpen: false,
        from: this.from,
        to: this.to
    }
  }

  handleDayClick = (e, day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = (e) => {
    e.preventDefault();
    this.setState({
      from: this.from,
      to: this.from,
    });
  }

  render() {
    const { from, to } = this.state;
    return (
      <div>
        <button onClick={this.toggleOpen}>Select date</button>
        <span>
          You chose from { from.toLocaleString("en-US", this.options) }
          to { to.toLocaleString("en-US", this.options) }
          <a href="." onClick={ this.handleResetClick }>Reset</a>
        </span>
        {this.getCalendar()}
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
  }

  getCalendar(){
    if(!this.state.isOpen) return null;
    const { from, to } = this.state;

    return (
      <div>
      <DayPicker
        initialMonth={ new Date(2016, 8) }
        numberOfMonths={ 2 }
        selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
        onDayClick={ this.handleDayClick }
      />
      </div>
    )
  }
}
