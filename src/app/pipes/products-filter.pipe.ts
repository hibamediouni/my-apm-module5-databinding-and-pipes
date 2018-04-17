import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
   // const double = function (x) { return 2 * x; };
   // const double_lambda = x => 2 * x;
    return filterBy ?
    value.filter(
      (prod: IProduct) =>
        prod.productName.toLocaleLowerCase().indexOf(filterBy)
       !== -1
      )
:
value;
 }
}
