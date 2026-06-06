import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPlanner } from './ai-planner';

describe('AiPlanner', () => {
  let component: AiPlanner;
  let fixture: ComponentFixture<AiPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPlanner],
    }).compileComponents();

    fixture = TestBed.createComponent(AiPlanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
