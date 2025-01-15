import React, { useState } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Generate days for the calendar
  const generateCalendarDays = () => {
    const startOfMonth = currentDate.startOf("month"); // First day of the month
    const endOfMonth = currentDate.endOf("month"); // Last day of the month

    const daysInMonth = currentDate.daysInMonth(); // Number of days in the current month
    const startWeekday = startOfMonth.day(); // Weekday index of the first day (0 = Sunday, 6 = Saturday)
    const endWeekday = endOfMonth.day(); // Weekday index of the last day (0 = Sunday, 6 = Saturday)

    const calendarDays = [];

    // Add previous month's days
    const prevMonth = currentDate.subtract(1, "month");
    const prevMonthDays = prevMonth.daysInMonth(); // Number of days in the previous month
    for (let i = startWeekday - 1; i >= 0; i--) {
      calendarDays.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push({
        day,
        isCurrentMonth: true,
      });
    }

    // Add next month's days
    const nextMonth = currentDate.add(1, "month");
    for (let i = 1; i <= 6 - endWeekday; i++) {
      calendarDays.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    return calendarDays;
  };

  // Navigate to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  // Navigate to the next month
  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const calendarDays = generateCalendarDays();
  const today = dayjs().format("YYYY-MM-DD");

  return (
    <div className="calendar">
      {/* Header */}
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>←</button>
        <h2>{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={goToNextMonth}>→</button>
      </div>

      {/* Days of the Week */}
      <div className="calendar-days-of-week">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day-label">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {calendarDays.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${
              date.isCurrentMonth
                ? currentDate.date(date.day).format("YYYY-MM-DD") === today
                  ? "current-day"
                  : ""
                : "other-month-day"
            }`}
          >
            {date.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
