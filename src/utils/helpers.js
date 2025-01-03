const calculateDiffInSecs = (expiresAt) => {
  const now = Date.now();
  const expirationDate = new Date(expiresAt);
  const expInSecs = Math.floor((expirationDate - now) / 1000);
  return expInSecs;
};

export default { calculateDiffInSecs };
