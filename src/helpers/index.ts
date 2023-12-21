export const convertToLowerCase = (obj: any) => {
    const newObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key.toLowerCase()] = obj[key];
      }
    }
    return newObj;
  };