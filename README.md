# Event App
Event app is a project to demonstrate my abilities developing apps.
[Live application here](https://javi.page/event-app)

### Features
  - List events from [MobilizeAmerica](https://github.com/mobilizeamerica/api)
  - Click an event from the list and it takes you to the location point in the map.
  - Map to see event locations.
  - See details from any event.
 
Extra credit:
  - Filter by zip code.
  - Infinite scrolling.

## Setup & Development server

```sh
$ cd event-app
$ npm install
$ ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
This is not a full suite of unit test. It should show 10 successful tests and 0 errors.

## Documentation

Run `npm run compodoc` to generate it.

Run `compodoc -s -r 4201` and navigate to `http://127.0.0.1:4201`, it will show all the app documentation.

[Live documentation here](https://javi.page/event-app/documentation)

## Tech
This project was built with Angular and Typescript. There is no specific reason why I chose Angular over other JS framework, I could say I feel more comfortable since I have been working with it around 4 years. It brings me all I need to develop an app such as http, router and form modules, and runs really fast. React or other JS framework handles the modules in a different way, adding them when it's needed, and it's easier to create a single component.

No bootstrap or other CSS libraries is used in this project, CSS with SCSS only. I copied some CSS from internet to make it faster like the loading and a few others.
Mapbox is pretty decent, beautiful library and open source. 

Mapbox is using OpenStreetMap which also it's open source. I think it's enough reason to choose this technology over Google Maps.

### Plugins, Directives and libraries.
| Plugin | Version | Links |
| ------ | ------ | ------ |
| Angular | 9.0.0 | https://angular.io/start
| Angular Cli | 9.1.0 | https://cli.angular.io/
| Typescript | 3.7.5 | https://www.typescriptlang.org/
| Mapbox | 4.3.0 | https://docs.mapbox.com/mapbox-gl-js/api/ |
| Infinite Scroll | 8.0.1 | https://github.com/orizens/ngx-infinite-scroll |
| Compodoc | 1.1.11 | https://compodoc.app/ |

Enjoy!
