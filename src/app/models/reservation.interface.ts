export interface Reservation {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    posX: number;
    posY: number;
    note?: string;
}