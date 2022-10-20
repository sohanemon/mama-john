export const sliceError = (error) => {
  return error.message.split("/")[1].split(")")[0].replaceAll("-", " ");
};
