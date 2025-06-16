import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoapp } from './todoapp';

describe('Todoapp', () => {
  let component: Todoapp;
  let fixture: ComponentFixture<Todoapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todoapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todoapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
