export class PointsApplication {
  calculatePoints(valuePurchase: number, detail_type: string, value: number) {
    return offersCalculate(valuePurchase, detail_type, value);
  }
}

const offersCalculate = (
  valuePurchase: number,
  detail: string,
  value: number
) => {
  switch (detail) {
    case "bonds":
      const percent = (Number(100) + Number(value)) / 100; // 1.15
      const points = Math.floor(valuePurchase / 1000); // 20
      return points * percent;
    case "multiplier":
      return Math.floor(valuePurchase / 1000) * value;
    default:
      return Math.floor(valuePurchase / 1000);
  }
};
