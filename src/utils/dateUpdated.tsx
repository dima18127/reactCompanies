export const dateUpdated = function (timestamp: number) {
    let today = Date.now()
    let timeDifference = Math.floor((today - timestamp))
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;
    if (timeDifference < minute) {
      return('Less than a minute ago');
    } else if (timeDifference < hour) {
      const minutesAgo = Math.floor(timeDifference / minute);
      return(`${minutesAgo} a minutes ago`);
    } else if (timeDifference < day) {
      const hoursAgo = Math.floor(timeDifference / hour);
      return(`${hoursAgo} a hour's ago`);
    } else if (timeDifference < week) {
      const daysAgo = Math.floor(timeDifference / day);
      return(`${daysAgo}  day ago`);
    } else if (timeDifference < month) {
      const weeksAgo = Math.floor(timeDifference / week);
      return(`${weeksAgo} week ago`);
    } else if (timeDifference < year) {
      const monthsAgo = Math.floor(timeDifference / month);
      return(`${monthsAgo} months ago`);
    } else {
      const yearsAgo = Math.floor(timeDifference / year);
      return(`${yearsAgo} лет назад`);
    }
  };