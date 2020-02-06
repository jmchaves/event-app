import { LocationPoint } from './location-point';

export class Location {
  constructor(
    public addressLine: string,
    public venue: string,
    public locality: string,
    public region: string,
    public postalCode: string,
    public congressionalDistrictValue: string,
    public stateLegDistrictValue: string,
    public stateSenateDistrictValue: string,
    public point: LocationPoint
  ) { }
}
