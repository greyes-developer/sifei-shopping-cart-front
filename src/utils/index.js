export const numberWithCommas = (num, fixed) => {
  let helper = `${num}`;

  if (!num || num === "null" || num === "NaN") return 0;
  if (!fixed) helper = parseInt(helper);

  return helper.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
