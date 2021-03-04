const date0 = new Date(1993, 11, 1);                    // December 1st 1993 year
const date1 = new Date(1998, 0, -33);                   // November 28 1997 year - because we subtract 33 days from 1998 to 1997 and 34th day it is 28 of November
const date2 = new Date('42 03:24:00');                  // it is 2042 year and 03:24:00 (time)

function getFormattedDate() {
    let date = new Date();
    let correctDate = date.getDate() + date.getMonth() + date.getFullYear() + date.getHours() + date.getMinutes() + date.getDay();
    return correctDate;
}
                                                        // Output have to be like below:
console.log(getFormattedDate(date0));                   // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));                   // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));                   // 01.01.2042 03:24 Wednesday