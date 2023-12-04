import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupeContraseComponent } from './recupe-contrase.component';

describe('RecupeContraseComponent', () => {
  let component: RecupeContraseComponent;
  let fixture: ComponentFixture<RecupeContraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecupeContraseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecupeContraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
