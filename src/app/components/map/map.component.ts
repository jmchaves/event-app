import { Component, OnInit, Input } from '@angular/core';
import { EventList } from 'src/app/models/event-list';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() eventList: EventList;
  @Input() selectedEvent: Event;
  @Input() center: number[];
  @Input() zoom: number[];

  constructor() { }

  ngOnInit() {
    this.defineDefaultValues();
  }

  private defineDefaultValues() {
    this.center = [-102.520333, 38.083807];
    this.zoom = [4];
  }
}
