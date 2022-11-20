export const marketCapLimit = (data = 534290263116) => {
  if (data >= 1_000_000_000_000) {
    return `${Math.floor(data / 1_000_000_000_000)} T`;
  } if (data >= 1_000_000_000) {
    return `${Math.floor(data / 1_000_000_000)} B`;
  } if (data >= 1_000_000) {
    return `${Math.floor(data / 1_000_000)} M`;
  } if (data >= 1_000) {
    return `${Math.floor(data / 1_000)} K`;
  }
  return data;
};
