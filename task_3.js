const findBestEmployee = function (employees) {
  let values = Object.values(employees);

  let keys = Object.keys(employees)

  let valueBestEmployee = 0;
  let nameBestEmployee = 0;

  let arrLength = keys.length;

  for (let i = 0; i < arrLength; i += 1) {
    // console.log(values[i])
    if (valueBestEmployee < values[i]) {
      valueBestEmployee = values[i];
      nameBestEmployee = keys[i];
    }
  }
return `${nameBestEmployee} : ${valueBestEmployee}`;
};
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux