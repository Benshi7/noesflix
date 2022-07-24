const overviewCut = (description) => {
  if (description.length > 160) {
    return description.substring(0, 160) + "...";
  } else {
    return description;
  }
};

export default overviewCut;
