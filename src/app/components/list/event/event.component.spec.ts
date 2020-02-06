import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { Event } from 'src/app/models/event';
import { Contact } from 'src/app/models/contact';
import { Location } from 'src/app/models/location';
import { LocationPoint } from 'src/app/models/location-point';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    component.event = new Event(1, 'Hello',
      '11:00',
      'Title',
      'Details',
      'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=50',
      '',
      'PHONE_BACK',
      new Date(),
      new Date(),
      '',
      new Contact('Javier', 'javi@mail.com', ''),
      new Location('main st', '', '', '', '', '', '', '', new LocationPoint(123, 456)), []);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
