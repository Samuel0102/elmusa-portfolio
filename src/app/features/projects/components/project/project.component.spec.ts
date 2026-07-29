import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('mainProject', {
      id: 1,
      title: 'Test',
      stack: 'Angular',
      description: 'Desc',
      thumbnail: 'test.png'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
