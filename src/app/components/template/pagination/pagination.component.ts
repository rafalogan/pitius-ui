import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {PaginationService} from './pagination.service';
import {Pagination} from './pagination';
import {DataUser} from '../../users/shared/data-user';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  @Input() pgCurrent: number;
  @Input() data: DataUser;

  pagination: Pagination;

  @Output() page = new EventEmitter;

  pages: number[];
  init: number;

  constructor( private service: PaginationService) {
    this.pgCurrent = (this.pgCurrent) ? this.pgCurrent : 1;
  }

  ngOnInit() {
    this.init = this.service.setCurrent(this.pgCurrent);
    console.log(this.data);
    this.pagination = {
      current: this.service.setCurrent(this.pgCurrent),
      count: this.service.setCount(null),
      limit: this.service.setLimit(null),
      total: this.service.setTotal(null, null)
    };

    this.pages = this.service.getPages(this.pagination);

    console.log(this.pagination);
  }

  prevPage() {
    const { current } = this.pagination;

     if (current > this.init ) this.pagination.current = current - 1;
     this.page.emit(this.pagination.current);
  }

  nextPage() {
    const { current } = this.pagination;

    if (current > this.init ) this.pagination.current = current + 1;
    this.page.emit(this.pagination.current);
  }

   pageBtn(page) {
    const { current } = this.pagination;

    if ( page !== current ) this.pagination.current = page;
    this.page.emit(page);
   }
}
