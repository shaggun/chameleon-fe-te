export const shortDate = (isoDate) => {
  const d = new Date(isoDate);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return d.toLocaleDateString(undefined, options);
};
