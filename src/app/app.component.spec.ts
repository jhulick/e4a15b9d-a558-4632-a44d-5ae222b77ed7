import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http, HttpModule} from '@angular/http';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        ApiService,
      ]
    });
  });

  it('should request the API upon loading of application', inject([ApiService], (service: ApiService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app['service'], 'getDateTimeAPI').and.callThrough();
    app.ngOnInit();
    expect(app['service'].getDateTimeAPI).toHaveBeenCalled();
  }));

  it('should print upon button click', inject([ApiService], (service: ApiService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const app = fixture.componentInstance;
    spyOn(app, 'getDateTime');
    button.click();
    fixture.whenStable().then(() => {
      expect(app.getDateTime).toHaveBeenCalled();
    });
  }));
});
