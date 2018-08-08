/**
 * Returns an object for tui-calendar dates in schedule.
 * @public
 * @param {string} title
 * @param {string} startTime
 * @param {string} endTime
 * @returns {object}  contain dates.
 */

export const getInitialTimeSlotObject = (title, startTime, endTime, id) => {
  return {
    id: id
      ? id
      : Math
        .random()
        .toString(36)
        .slice(-11) + Math
        .random()
        .toString(36)
        .slice(-11),
    calendarId: "1",
    title: title,
    category: "time",
    dueDateClass: "",
    start: startTime,
    end: endTime,
    isReadOnly: true
  }
}
