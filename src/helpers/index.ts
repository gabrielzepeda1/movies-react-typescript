interface AnyObject { 
  [key: string]: any; 
}

export const convertToLowerCase = (obj: AnyObject) => {
  const newObj: AnyObject = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key.toLowerCase()] = obj[key];
    }
  }
  return newObj;
};
