const formatPublishedTime = (dateString) => {
  const now = new Date();
  const publishedDate = new Date(dateString);
  const diffMs = now - publishedDate;

  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths >= 1) {
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
  } else if (diffDays >= 1) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else if (diffHours >= 1) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  } else {
    return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
  }
};

export default formatPublishedTime;
