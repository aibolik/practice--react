export const getCurrentPoints = (points, current) => {
  for(let i = points.length - 1; i >= 0; i--) {
    if (parseInt(current, 10) >= points[i]) {
      return points[i];
    }
  }
}

export const getPercentage = (value, min, max) => `${((value - min) * 100) / (max - min)}`;