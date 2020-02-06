import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

import { EventService } from '../../services/event/event.service';
import { MapComponent } from 'src/app/components/map/map.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { EventComponent } from 'src/app/components/list/event/event.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading/loading-spinner/loading-spinner.component';
import { LoadingLineComponent } from 'src/app/components/loading/loading-line/loading-line.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        MapComponent,
        ListComponent,
        EventComponent,
        SearchBarComponent,
        LoadingSpinnerComponent,
        LoadingLineComponent
      ],
      imports: [NgxMapboxGLModule.withConfig(environment.mapBoxAccess), InfiniteScrollModule, FormsModule],
      providers: [EventService, HttpHandler, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
