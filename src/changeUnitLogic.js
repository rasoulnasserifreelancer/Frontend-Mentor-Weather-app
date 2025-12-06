export const celsiusToFahrenheit = (cel) => {
  return cel * 1.8 + 32;
};

export const fahrenheitToCelsius = (fah) => {
  return (fah - 32) / 1.8;
};

export const kmhToMph = (kmh) => {
  return kmh / 1.609;
};

export const mphToKmh = (mph) => {
  return mph * 1.609;
};

export const mmToInch = (mm) => {
  return mm / 25.4;
};

export const inchToMm = (inch) => {
  return inch * 25.4;
};

export const metricToImperila = (cel, kmh, mm) => {
  const fah = celsiusToFahrenheit(cel);
  const mph = kmhToMph(kmh);
  const inch = mmToInch(mm);
  return { fah, mph, inch };
};

export const imperilaToMetric = (fah, mph, inch) => {
  const cel = fahrenheitToCelsius(fah);
  const kmh = mphToKmh(mph);
  const mm = inchToMm(inch);
  return {cel, kmh, mm}
};
