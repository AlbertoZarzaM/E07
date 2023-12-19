/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 */

// import * as mongodb from 'mongodb';
// import { Available } from '../../available.js';
// import { Reservation } from '../../reservation.js';
// import { Timetable } from '../../timeTable.js';


// export interface restaurantInterface {
//   userName: string;
//   passwd: string;
//   email: string;

//   _id?: mongodb.ObjectId;
//   restaurantName: string;
//   restaurantAddress: string;
//   description:string;
//   timeTable: Timetable;
//   category: string;

//   phoneNumber: string;
//   profilePicture: (Buffer | null);
//   pictures: (Buffer | null)[]; // Array of pictures

//   menu: Buffer | null;
//   availability: Available[];
//   nextReservations: Reservation[];
//   historicReservations: Reservation[];
// }



// export class restaurantClass {
//   constructor(
//     private userName: string,
//     private passwd: string,
//     private email: string,

//     private restaurantName: string,
//     private restaurantAddress: string,
//     private description:string,
//     private timeTable: Timetable,
//     private category: string,

//     private phoneNumber: string,
//     private profilePicture: Buffer | null,
//     private pictures: (Buffer | null)[],
    
//     private menu: Buffer | null,
//     private availability: Available[],
//     private nextReservations: Reservation[],
//     private historicReservations: Reservation[],
//     private _id?: mongodb.ObjectId
//   ) {}

//   getUserName() {
//     return this.userName;
//   }

//   getPasswd() {
//     return this.passwd;
//   }

//   getEmail() {
//     return this.email;
//   }

//   getId() {
//     return this._id;
//   }

//   getRestaurantName() {
//     return this.restaurantName;
//   }

//   getRestaurantAddress() {
//     return this.restaurantAddress;
//   }

//   getDescription() {
//     return this.description;
//   }

//   getTimeTable() {
//     return this.timeTable;
//   }

//   getCategory() {
//     return this.category;
//   }
  
//   getPhoneNumber() {
//     return this.phoneNumber;
//   }

//   getProfilePicture() {
//     return this.profilePicture;
//   }

//   getPictures() {
//     return this.pictures;
//   }

//   getMenu() {
//     return this.menu;
//   }

//   getAvailability() {
//     return this.availability;
//   }

//   getNextReservations() {
//     return this.nextReservations;
//   }

//   getHistoricReservations() {
//     return this.historicReservations;
//   }

// }