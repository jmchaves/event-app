import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../models/event';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('200ms ease-in', style({transform: 'translateY(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  displayDescription: boolean;

  constructor() { }

  ngOnInit() {
    this.displayDescription = false;
  }

  updateUrl(error) {
    this.event.featuredImageUrl = 'assets/images/event.jpg';
  }
}
