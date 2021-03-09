import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './App.css';

function App() {
  const [activeDate, setActiveDate] = useState();
  const [dates, setDates] = useState(
    [
      {
        date: new Date(2021, 2, 4),
        title: "Öppettid blabla"
      },
      {
        date: new Date(2021, 2, 18),
        title: "Här är 18:e"
      }
    ]
  );

  const setTileClassName = ({ activeStartDate, date, view }) => {
    //return view === "month" && date.getDay() === 3 ? "wednesday" : "tile";
    return dates.forEach(d => {
      if (d.date.toDateString() === date.toDateString()) {
        console.log("sätter klassnamn")
        return "tile"
      }
    });

  }


  const onChange = (value, event) => {

    dates.forEach(d => {
      let newActiveDate;
      if (d.date.toDateString() === value.toDateString()) {
        newActiveDate = {
          date: value,
          title: d.title
        }
        setActiveDate(newActiveDate);
      }
    });
  };

  return (
    <div className="App">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={activeDate ? activeDate.date : null}
        minDate={new Date(2021, 0, 1)}
        maxDate={new Date(2021, 11, 31)}
        minDetail="year"
        tileClassName={setTileClassName}
        tileContent={({ activeStartDate, date, view }) => {
          return view === "month" && date.getDay() === 0 ? <p>!</p> : null;
        }}
        tileDisabled={({ activeStartDate, date, view }) => {
          return date.getDate() === 7;
        }}
      />

      {activeDate ?
        <div> {activeDate.title}</div>
        :
        <div />
      }
    </div>
  );
}

export default App;
