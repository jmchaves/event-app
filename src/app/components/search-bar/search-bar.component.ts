import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output()
  search = new EventEmitter();

  zipcode: string;

  constructor() { }

  ngOnInit() {
    this.zipcode = '';
  }

  searchByZipCode() {
    this.search.emit({
      zipcode: this.zipcode
    });
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.searchByZipCode();
    }
  }
}
