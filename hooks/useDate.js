import { format as formatTz } from 'date-fns-tz';
import { formatDistanceStrict, toDate } from 'date-fns';

const useFullDateTime = (unixTime) => {
  return formatTz(toDate(unixTime * 1000), "EEE, PP, hh:mm:ss aa zzzz");
}

const useRelativeTime = (unixTime) => {
  return formatDistanceStrict(toDate(unixTime * 1000), Date.now(), { addSuffix: true });
}

const useShortRelativeTime = (unixTime) => {
  const formattedTime =  formatDistanceStrict(toDate(unixTime * 1000), Date.now()).split(' ');
  return formattedTime.shift() + formattedTime.pop().split('').shift();
}

export { useFullDateTime, useRelativeTime, useShortRelativeTime }