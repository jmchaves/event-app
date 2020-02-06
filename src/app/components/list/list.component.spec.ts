import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { LoadingLineComponent } from '../loading/loading-line/loading-line.component';
import { LoadingSpinnerComponent } from '../loading/loading-spinner/loading-spinner.component';
import { EventComponent } from './event/event.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, LoadingLineComponent, LoadingSpinnerComponent, EventComponent, SearchBarComponent ],
      imports: [ InfiniteScrollModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
