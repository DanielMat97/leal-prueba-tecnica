import { PointsApplication } from "../../src/application/points.application";

const bonds = "bonds";
const multiplier = "multiplier";

describe("test points application", () => {
  it("test bounds", () => {
    const pointsApplication = new PointsApplication();
    const result = pointsApplication.calculatePoints(20000, bonds, 50);
    expect(result).toEqual(30);
  });

  it("test multiplier", () => {
    const pointsApplication = new PointsApplication();
    const result = pointsApplication.calculatePoints(20000, multiplier, 2);
    expect(result).toEqual(40);
  });

  it("test default", () => {
    const pointsApplication = new PointsApplication();
    const result = pointsApplication.calculatePoints(20000, "default", 2);
    expect(result).toEqual(20);
  });
});
