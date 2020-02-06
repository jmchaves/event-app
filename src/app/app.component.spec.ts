import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { EventService } from './services/event/event.service';
import { MapComponent } from 'src/app/components/map/map.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { EventComponent } from 'src/app/components/list/event/event.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading/loading-spinner/loading-spinner.component';
import { LoadingLineComponent } from 'src/app/components/loading/loading-line/loading-line.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from '../environments/environment';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IndexComponent,
        MapComponent,
        ListComponent,
        EventComponent,
        SearchBarComponent,
        LoadingSpinnerComponent,
        LoadingLineComponent
      ],
      imports: [NgxMapboxGLModule.withConfig(environment.mapBoxAccess), InfiniteScrollModule, FormsModule],
      providers: [EventService, HttpClient, HttpHandler ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
