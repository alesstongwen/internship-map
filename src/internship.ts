import { faker } from "@faker-js/faker";
export class Internship {
  businessName: string;
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    this.businessName = faker.company.bsBuzz();
    this.location = {
      lat: faker.location.latitude(71, 24),
      lon: faker.location.longitude(-52, -167),
    };
  }
}
