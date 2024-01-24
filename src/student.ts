import { faker } from "@faker-js/faker";

export class Student {
  private firstName: string;
  private lastName: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.location = {
      lat: faker.location.latitude(71, 24),
      lon: faker.location.longitude(-52, -167),
    };
  }
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get randomLocation(): object {
    return this.location;
  }
}
