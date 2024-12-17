import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDesktopComponent } from './project-desktop.component';

describe('ProjectDesktopComponent', () => {
  let component: ProjectDesktopComponent;
  let fixture: ComponentFixture<ProjectDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
