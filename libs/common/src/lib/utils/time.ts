import { addDays, endOfDay, parseISO, startOfWeek, endOfWeek, subWeeks, startOfMonth, endOfMonth, subMonths, startOfYear, endOfYear, subYears, startOfDay, } from 'date-fns';

type WeekOptions = {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
};

/**
 * 获取时间范围
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 */
export function getTimeDistance(
  type: 'today' | '-today' | 'yesterday' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number,
  time?: Date | string | number,
): [Date, Date] {

  // time = parse(time || new Date()); // date-fns v2 breaking change
  if ( typeof time === 'string') {
    time = parseISO(time);
  } else if (typeof time === 'number') {
    time = new Date(time);
  } 
  
  const options: WeekOptions = { weekStartsOn: 1 } ;

  let res: [Date, Date];
  switch (type) {
    case 'today':
      res = [time as any, time as any];
      break;
    case '-today':
      res = [addDays(time, -1), time];
      break;
    case 'yesterday':
      res = [addDays(time, -1), addDays(time, -1)];
      break;
    case 'week':
      res = [startOfWeek(time, options), endOfWeek(time, options)];
      break;
    case '-week':
      res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
      break;
    case 'month':
      res = [startOfMonth(time), endOfMonth(time)];
      break;
    case '-month':
      res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
      break;
    case 'year':
      res = [startOfYear(time), endOfYear(time)];
      break;
    case '-year':
      res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
      break;
    default:
      res = (type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time]) as any;
      break;
  }
  return fixEndTimeOfRange(res);
}

/**
 * fix time is the most, big value
 */
export function fixEndTimeOfRange(dates: [Date, Date]): [Date, Date] {
  return [startOfDay(dates[0]), endOfDay(dates[1])];
}
