import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const generateDatePlayedValue = ():string => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const localEpoch = Date.now();
  return dayjs(localEpoch).tz("Europe/London").format("DD-MM-YYYY");
}
