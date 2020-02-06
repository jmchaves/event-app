import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventList } from 'src/app/models/event-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayMenu: boolean;

  @Input() eventList: EventList;
  @Input() displayLoading: boolean;

  @Output()
  search = new EventEmitter();

  @Output()
  nextPage = new EventEmitter();

  @Output()
  selectEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.displayMenu = true;
  }

  searchByZipCode(zipcodep) {
    this.search.emit({
      zipcode: zipcodep
    });
  }

  sendEvent(eventp) {
    this.selectEvent.emit({
      event: eventp
    });
  }

  scrolled() {
    this.nextPage.emit();
  }
}
