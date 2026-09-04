import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioForm } from './proprietario-form';

describe('ProprietarioForm', () => {
  let component: ProprietarioForm;
  let fixture: ComponentFixture<ProprietarioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProprietarioForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprietarioForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
