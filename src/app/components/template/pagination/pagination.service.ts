import { Injectable } from '@angular/core';
import {Pagination} from './pagination';
import {isNumber} from 'util';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPages(pagination) {
    const { total } = pagination;
    const pages: number[] = [];

    for (let i = 1; i <= total; i++ ) {
      pages.push(i);
    }
    return pages;
  }

  setCurrent(current = null) {
    const currentPage = current;

    if (currentPage && isNumber(currentPage)) {
      return currentPage;
    } else {
      return 1;
    }
  }

  setCount(count) {
    if (!count) {
      return console.log('[count] é um parâmentro Obrigatorio ');
    } else {
      return count;
    }
  }

  setLimit(limit) {
    if (!limit) {
      return console.log('[limit] é um parâmentro Obrigatorio ');
    } else {
      return limit;
    }
  }

  setTotal(count, limit, total = null) {
    if (total) {
      return total;
    } else {
      const rest = count % limit;
      const result = count / total;

      return this.totalValidate(rest, result);
    }
  }

  totalValidate(rest, result) {
    if ( result >= 0 && result < 1 ) {
        return 1;
    } else if (rest) {
      return Math.floor( result ) + 1;
    } else {
      return result;
    }
  }

}
