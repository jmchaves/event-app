import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { EventComponent } from '../list/event/event.component';

import { environment } from '../../../environments/environment';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent, EventComponent ],
      imports: [ NgxMapboxGLModule.withConfig(environment.mapBoxAccess)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
