export interface Reservation {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    latitude: number;
    longitude: number;
    note?: string;
    dateCreated?: Date;
    datePickUp?: Date;
}