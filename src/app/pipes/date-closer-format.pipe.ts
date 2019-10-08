import { Pipe, PipeTransform } from "@angular/core";
import { formatDate, compareDate } from "../utils/format.date";
/*
 * Give the closer date
 * Takes an date argument and return the hour if the date is the same day,
 * yesterday is the date was yesterday else the date.
 * Usage:
 *   value | dateCloser:string
 * Example:
 *   {{ date | dateCloser:10 }}
 *   formats to: 2019-10-07T23:17:09.000Z
 */

@Pipe({ name: "dateCloser" })
export class DateCloserPipe implements PipeTransform {
  transform(value: string): string {
    const today = new Date();
    const date = new Date(value);
    if (compareDate(today, date)) {
      return formatDate(date, "hh:mm");
    }
    today.setDate(today.getDate() - 1);
    if (compareDate(today, date)) {
      return "Yesterday";
    }

    return formatDate(date, "MM dd");
  }
}
