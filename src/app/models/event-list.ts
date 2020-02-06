import { Event } from './event';

export class EventList {
  constructor(
    public events: Event[],
    public nextPage: string
  ) { }
}
