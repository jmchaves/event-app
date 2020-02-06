import { Contact } from './contact';
import { Location } from './location';
import { EventDate } from './event-date';

export class Event {
  constructor(
    public id: number,
    public description: string,
    public timezone: string,
    public title: string,
    public summary: string,
    public featuredImageUrl: string,
    public highPriority: string,
    public eventType: string,
    public createdDate: Date,
    public modifiedDate: Date,
    public browserurl: string,
    public contact: Contact,
    public location: Location,
    public eventDates: EventDate[]
  ) { }

  get eventTypeFormatted() {
    let type = this.eventType;

    // Uppercase first letter of word
    type = type.substr(0, 1).toUpperCase() + type.substr(1).toLowerCase();

    // Replace underscores with space
    return type.replace(/_/g, ' ');
  }
}
