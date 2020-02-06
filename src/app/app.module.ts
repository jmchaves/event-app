import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { EventComponent } from './components/list/event/event.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IndexComponent } from './pages/index/index.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConectorService } from './shared/http-conector/http-conector.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingLineComponent } from './components/loading/loading-line/loading-line.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading/loading-spinner/loading-spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MapComponent,
    EventComponent,
    SearchBarComponent,
    IndexComponent,
    LoadingLineComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxMapboxGLModule.withConfig(environment.mapBoxAccess)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConectorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
