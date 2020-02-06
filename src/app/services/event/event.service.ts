import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../../models/event';
import { EventList } from '../../models/event-list';
import { EventDate } from '../../models/event-date';
import { Contact } from '../../models/contact';
import { Location } from '../../models/location';
import { LocationPoint } from '../../models/location-point';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'events';

  constructor(private http: HttpClient) { }

  list(filters, nextPage: string = ''): Observable<EventList> {
    const params = nextPage ? {} : { params: filters };
    return this.http.get<any>(this.apiUrl + nextPage, params)
      .pipe(map(response => {
        const events: Event[] = response.data.map(event => this.deserialize(event));
        return new EventList(
          events, this.getNextPage(response.next)
        );
      }));
  }

  private getNextPage(url: string): string {
    return url.substring(url.indexOf('?'));
  }

  private deserialize(json) {
    // There are libraries solve this process,
    // but in this case I'll do it manually since it's just one api call.
    const event = json;
    let contact = null; let location = null; let eventDates: EventDate[];
    if (event.contact) {
      contact = new Contact(event.contact.name, event.contact.email_address, event.contact.phone_number);
    }
    if (event.location) {
      let locationPoint: LocationPoint;
      if (event.location.location) {
        locationPoint = new LocationPoint( event.location.location.latitude, event.location.location.longitude);
      }
      location = new Location(
        event.location.address_lines[0] || '', event.location.venue,
        event.location.locality, event.location.region,
        event.location.postal_code,
        event.location.congressional_district_value,
        event.location.state_leg_district_value,
        event.location.state_senate_district_value,
        locationPoint);
    }
    if (event.timeslots) {
      eventDates = event.timeslots.map(date => new EventDate(date.id, date.start_date, date.end_date));
    }
    return new Event(
      event.id, event.description, event.timezone,
      event.title, event.summary, event.featured_image_url,
      event.high_priority, event.event_type,
      event.created_date, event.modified_date, event.browser_url,
      contact, location, eventDates);
  }
}
