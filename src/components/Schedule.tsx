import React from "react";

interface ClassInfo {
  title: string;
  teacher: string;
  image: string;
  timings: string[];
  days: string[];
}

const classes: ClassInfo[] = [
  {
    title: "VINYASA YOGA",
    teacher: "Sophie",
    image: "/images/sophie.jpg",
    timings: ["09.00am - 10.00am", "18.00pm - 19.00pm", "18.00pm - 19.00pm"],
    days: [
      "Mondays and Wednesdays",
      "Tuesdays and Thursdays",
      "Tuesdays and Thursdays",
    ],
  },
  {
    title: "ASHTANGA YOGA",
    teacher: "Jenna",
    image: "/images/jenna.jpg",
    timings: [
      "09.00am - 10.00am",
      "10.00am - 11.00am",
      "18.00pm - 19.00pm",
      "19.00pm - 20.00pm",
    ],
    days: [
      "Mondays and Wednesdays",
      "Tuesdays and Thursdays",
      "Mondays and Wednesdays",
      "Tuesdays and Thursdays",
    ],
  },
  {
    title: "PRENATAL YOGA",
    teacher: "Anna",
    image: "/images/anna.jpg",
    timings: ["09.00am - 10.00am", "10.00am - 11.00am", "10.00am - 11.00am"],
    days: [
      "Mondays and Wednesdays",
      "Saturdays and Sundays",
      "Saturdays and Sundays",
    ],
  },
  {
    title: "HATHA YOGA",
    teacher: "Esme",
    image: "/images/esme.jpg",
    timings: ["09.00am - 10.00am", "10.00am - 11.00am", "10.00am - 11.00am"],
    days: [
      "Mondays and Wednesdays",
      "Saturdays and Sundays",
      "Saturdays and Sundays",
    ],
  },
];

const ClassTiming: React.FC = () => {
  return (
    <div className="class-timing">
      <div className="header">
        <span>CLASS</span>
        <span>TIME</span>
        <span>DAY</span>
      </div>
      {classes.map((cls, idx) => (
        <div className="class-row" key={idx}>
          <div className="class-info">
            <h3>{cls.title}</h3>
            <div className="teacher">
              <img src={cls.image} alt={cls.teacher} />
              <span>with {cls.teacher}</span>
            </div>
          </div>

          <div className="class-time">
            {cls.timings.map((time, i) => (
              <p key={i}>{time}</p>
            ))}
          </div>

          <div className="class-day">
            {cls.days.map((day, i) => (
              <p key={i}>{day}</p>
            ))}
          </div>

          <div className="arrow">→</div>
        </div>
      ))}
    </div>
  );
};

export default ClassTiming;
