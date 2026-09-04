import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteVazioForm } from './teste-vazio-form';

describe('TesteVazioForm', () => {
  let component: TesteVazioForm;
  let fixture: ComponentFixture<TesteVazioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteVazioForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TesteVazioForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
