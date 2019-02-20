import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pageInit: number;
  @Input() count: number;
  @Input() limit: number;

  @Output() page = new EventEmitter;

  pages: number[] = [];
  activePage: number;
  maxPage: number;

  constructor() {}

  ngOnInit() {
    this.maxPage = (this.count / this.limit) ? this.count / this.limit : 1;
    this.activePage = this.pageInit;
    this.getPages();
    console.log(this.maxPage, this.pages);
  }

  getPages() {
    let i = 1;

    for (i; i <= this.maxPage; i++) {
      this.pages.push(i);
    }
  }

  prevPage() {
     if(this.activePage > this.pageInit) this.activePage = this.activePage - 1;
     this.page.emit(this.activePage);
  }

  nextPage() {
    if (this.activePage < this.maxPage) this.activePage = this.activePage + 1;
    this.page.emit(this.activePage);
  }

   pageBtn(page) {
    this.activePage = page;
    this.page.emit(page);
   }
}
