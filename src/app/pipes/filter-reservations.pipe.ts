import { Pipe, PipeTransform } from '@angular/core';
import { Reservation } from '../models/reservation.interface';

@Pipe({
  name: 'filterReservations'
})
export class FilterReservationsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: Reservation) => {
      return (
        it.firstName.toLocaleLowerCase().includes(searchText) ||
        it.lastName.toLocaleLowerCase().includes(searchText) ||
        it.phone.toLocaleLowerCase().includes(searchText) || 
        it.ribbon.toLocaleLowerCase().includes(searchText) ||
        it.treeNumber.toString().includes(searchText)
      );
    });
  }

}
