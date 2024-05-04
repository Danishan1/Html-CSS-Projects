
// Code: ABAB013

// This Function give the list of numbers that need to be color from RowID (R1, etc)
export function getCellFromRowId(rowID, grid) {
  let id = rowID.slice(1);
  id = parseInt(id);
  let boxList = [];

  for (let i = (id - 1) * grid; i < id * grid; i++) boxList.push(i);
  return boxList;
}

// This Function give the list of numbers that need to be color from ColID (C1, etc)
export function getCellFromColId(rowID, grid) {
  let id = rowID.slice(1);
  id = parseInt(id);
  let boxList = [];

  for (let i = 0; i < grid; i++) boxList.push(id - 1 + i * grid);
  return boxList;
}

// This Function give the list of numbers that need to be color from entire list and skipping rowID, colID
export function getNumbersOnlyFromList(list) {
  let numbersOnly = [];

  for (let item of list) {
    if (typeof item === "number") {
      numbersOnly.push(item);
    } else if (typeof item === "string") {
      // If it is a string, attempt to convert it to a number
      // using parseInt or parseFloat
      let parsedNumber = parseFloat(item);
      if (!isNaN(parsedNumber)) {
        // If it's a valid number, push it to the numbersOnly array
        numbersOnly.push(parsedNumber);
      }
    }
  }

  return numbersOnly;
}


// This Function give the list of numbers that need to be color from list that have values, rowID, colID
function getIdsfromList(list) {
  let rowIds = [];
  let colIds = [];
  let values = [];

  for (let item of list) {
    if (typeof item === "string") {
      if (item.startsWith("R")) rowIds.push(item);
      else if (item.startsWith("C")) colIds.push(item);
      else {
        let parsedNumber = parseFloat(item);
        if (!isNaN(parsedNumber)) values.push(parsedNumber);
      }
    } else if (typeof item === "number") values.push(item);
  }

  // Return the array containing row IDs starting with "R"
  return { rowIds, colIds, values };
}

// This function do all the stuffs magically as this the combination of all above function to handle all the things easily
function resolveImageGridID(
  list,
  grid,
  sort = false,
  duplicate = false,
  rowCol = false
) {
  let { rowIds, colIds, values } = getIdsfromList(list);
  let boxList = [];

  if (rowCol === true) {
    for (let item of rowIds) boxList.push(...getCellFromRowId(item, grid));
    for (let item of colIds) boxList.push(...getCellFromColId(item, grid));
  }
  boxList.push(...getNumbersOnlyFromList(values));

  if (duplicate === true) boxList = Array.from(new Set(boxList));
  if (sort === true) boxList.sort((a, b) => a - b);
  return boxList;
}

export default resolveImageGridID;
