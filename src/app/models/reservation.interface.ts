export interface Reservation {
    id?: string;
    dateCreated: string;
    firstName: string;
    lastName: string;
    address: string;
    treeNumber: number;
    ribbon: string;
    latitude: number;
    longitude: number;
    phone?: string;
    note?: string;
}