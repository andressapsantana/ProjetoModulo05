import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyInfoPage } from './my-info.page';

describe('MyInfoPage', () => {
  let component: MyInfoPage;
  let fixture: ComponentFixture<MyInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
