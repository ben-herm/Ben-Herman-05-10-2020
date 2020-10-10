// navigation utility function.

import moment from 'moment';

export const navigateToPage = (
  pageName = 'SearchPage',
  navigation,
  params = null,
) => {
  navigation.navigate(pageName, params);
};

export const convertToCelsius = (f) => {
  var cel = ((f - 32) * 5) / 9;
  return Math.round(cel);
};

export const convertToDay = (date) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let newDate = moment(date).utc();
  let day = newDate.day(); // Thursday Feb 2015
  let dayString = days[day];
  return dayString;
};


