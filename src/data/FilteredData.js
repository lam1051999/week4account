import { DATA } from "./Data";

//get object show list item by category
export const CATEGORY_DATA = DATA.detail.reduce((accum, item) => {
  if (`${item.category}` in accum) {
    accum[item.category] = [...accum[item.category], { ...item }];
  } else {
    accum[item.category] = [{ ...item }];
  }
  return accum;
}, {});

//get category keys
export const CATEGORY_KEYS = Object.keys(CATEGORY_DATA);

//get account types from array
export const CATEGORY_TYPES = (data) => {
  let types = data.reduce((accum, item) => {
    return accum.includes(item.type) ? [...accum] : [...accum, item.type];
  }, []);
  return types;
};
//get account types name
export const CATEGOTY_TYPE_NAMES = (types) => {
  return types.map((item) => {
    switch (item) {
      case 1:
        return "Groceries";
      case 2:
        return "Clothes";
      case 3:
        return "Rental";
    }
  });
};
