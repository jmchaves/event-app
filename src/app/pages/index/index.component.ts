import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import {first} from 'rxjs/operators';
import { EventList } from 'src/app/models/event-list';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  eventList: EventList;
  displayLoadingLine: boolean;
  selectedEvent: Event;
  mapCenter: number[];
  mapZoom: number[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.defineDefaultValues();
    this.getList({});
  }

  defineDefaultValues() {
    this.displayLoadingLine = true;
    this.mapZoom = [12];
  }

  searchByZipCode(zipcodep = null) {
    if (zipcodep) {
      const params = { zipcode: zipcodep };
      this.getList(params);
    } else {
      this.getList({});
    }
  }

  goToNextPage() {
    const nextPage = this.eventList ? this.eventList.nextPage : undefined;
    this.getList({}, nextPage);
  }

  selectEvent(event) {
    // trying to center the point in the map since there is a list in the left floating.
    let horizontal = 0.02; let vertical = 0.03;
    if (window.innerWidth <= 750) {
      horizontal = 0; vertical = -0.02;
    }
    if (event && event.location && event.location.point) {
      // let's reset the center point.
      this.mapZoom = [12];
      this.mapCenter = [event.location.point.longitude - horizontal, event.location.point.latitude - vertical];
      this.selectedEvent = event;
    } else {
      alert('This event does not have a location.');
    }
  }

  private getList(params, nextPage = '') {
    this.displayLoadingLine = nextPage ? false : true;
    this.eventService.list(params, nextPage).pipe(first()).subscribe((events) => {
      // Let's reset the list
      if (!nextPage && this.eventList) {
        this.eventList.events = [];
      }
      // setTimeout is here just to show the loading icon more time :)
      setTimeout(() => {
        if (nextPage) {
          this.eventList.nextPage = events.nextPage;
          this.eventList.events.push(...events.events);
        } else {
          this.eventList = events;
        }
        this.displayLoadingLine = false;
      }, 1000);
    },
    () => {
      // Any error it will reset event list model.
      this.eventList = new EventList([], undefined);
      this.displayLoadingLine = false;
    });
  }
}
