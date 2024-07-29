/**
 * 
 * @param {dateString} take date as string in the Formate : DD-MM-YYYY 
 * @returns Date Object
 */
export const convertToDate = (dateString) => {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};