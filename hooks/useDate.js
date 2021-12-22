import { format as formatTz } from 'date-fns-tz';
import { formatDistanceStrict, toDate } from 'date-fns';

const useFullDateTime = (unixTime, dateOnly = false) => {
  return formatTz(toDate(unixTime * 1000), dateOnly ? "PP" : "EEE, PP, hh:mm:ss aa zzzz");
}

const useRelativeTime = (unixTime, withSuffix = true) => {
  return formatDistanceStrict(toDate(unixTime * 1000), new Date(), { addSuffix: withSuffix });
}

const useShortRelativeTime = (unixTime) => {
  const formattedTime =  formatDistanceStrict(toDate(unixTime * 1000), new Date()).split(' ');
  return formattedTime.shift() + formattedTime.pop().split('').shift();
}

export { useFullDateTime, useRelativeTime, useShortRelativeTime }