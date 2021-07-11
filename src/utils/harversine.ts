const toRad = (value: number): number => {
  return (value * Math.PI) / 180;
};

export const calculateHaversineDistance = (
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number
): number => {
  const R = 6371; // km
  const latitudeDiff = toRad(latitude2 - latitude2);
  const longitudeDiff = toRad(longitude2 - longitude1);
  latitude1 = toRad(latitude1);
  latitude2 = toRad(latitude2);

  const a =
    Math.sin(latitudeDiff / 2) * Math.sin(latitudeDiff / 2) +
    Math.sin(longitudeDiff / 2) *
      Math.sin(longitudeDiff / 2) *
      Math.cos(latitude1) *
      Math.cos(latitude2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance;
};
