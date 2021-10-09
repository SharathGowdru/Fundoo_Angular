import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueElementComponent } from './dialogue-element.component';

describe('DialogueElementComponent', () => {
  let component: DialogueElementComponent;
  let fixture: ComponentFixture<DialogueElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
