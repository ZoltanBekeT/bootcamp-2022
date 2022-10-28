import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CarService } from '@/app/services/car.service';
import { Observable } from 'rxjs';
import { Car } from '@/app/models/car.vo';

type addForm = {
  model: FormControl<string>;
  firstRegistration: FormControl<string>;
  origin: FormControl<string>;
};

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
})
export class CarCreateComponent implements OnInit {
  public carList$?: Observable<Car[]>;
  addCarForm: FormGroup<addForm>;

  constructor(private carService: CarService) {
    this.addCarForm = new FormGroup<addForm>({
      model: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      firstRegistration: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.-]([0]?[1-9]|[1][0-2])[.-]([0-9]{4}|[0-9]{2})$/),
        ],
      }),
      origin: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^(GERMANY|USA|OTHER)$/)],
      }),
    });
  }

  ngOnInit(): void {}

  get model(): FormControl {
    return this.addCarForm.get('model') as FormControl;
  }
  get firstRegistration(): FormControl {
    return this.addCarForm.get('firstRegistration') as FormControl;
  }
  get origin(): FormControl {
    return this.addCarForm.get('origin') as FormControl;
  }

  onSubmit(): void {
    if (this.addCarForm.valid) {
      console.log(this.addCarForm.value);
      this.carService.addCar(this.addCarForm.value);
      // this.carList$?.addCar(this.addCarForm.value).subscribe()
    } else {
      this.addCarForm.markAllAsTouched();
    }
  }
}
