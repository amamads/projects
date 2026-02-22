const formatDate = (isoString: string) =>
  new Date(isoString).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default formatDate;
