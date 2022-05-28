export class DateFormatter {
  static format(date: string): string {
    let result = ` \'${date
      .split("-")[0]
      .substring(date.split("-")[0].length - 2, date.split("-")[0].length)}`;
    switch (date.split("-")[1]) {
      case "01":
        result = "Jan" + result;
        break;
      case "02":
        result = "Feb" + result;
        break;
      case "03":
        result = "Mar" + result;
        break;
      case "04":
        result = "Apr" + result;
        break;
      case "05":
        result = "May" + result;
        break;
      case "06":
        result = "Jun" + result;
        break;
      case "07":
        result = "Jul" + result;
        break;
      case "08":
        result = "Aug" + result;
        break;
      case "09":
        result = "Sep" + result;
        break;
      case "10":
        result = "Oct" + result;
        break;
      case "11":
        result = "Nov" + result;
        break;
      case "12":
        result = "Dec" + result;
        break;
      default:
        result = "";
    }
    return result;
  }
}
