import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText.toLowerCase();

    if (!filterText) {
      return value;
    }

    return value.filter(
      (c: Car) =>
        c.brandName.toLowerCase().includes(filterText) ||
        c.description.toLowerCase().includes(filterText) ||
        c.colourName.toLowerCase().includes(filterText) 
    );
  }
}
