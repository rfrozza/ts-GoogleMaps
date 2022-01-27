import faker, { fake } from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
   name: string;
   location: {
      lat: number; //latitude
      lng: number; //longitude
   };
   color: string = 'green';

   constructor() {
      this.name = faker.name.findName();
      this.location = {
         lat: parseFloat(faker.address.latitude()),
         lng: parseFloat(faker.address.longitude())
      };
   }

   markerContent(): string {
      return `<div><h3>User Name: ${this.name}</h3></div>`;
   }
}