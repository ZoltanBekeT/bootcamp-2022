import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from '@/app/models/car.vo';
import { Observable } from 'rxjs';
import { CarService } from '@/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  public carList$?: Observable<Car[]>;
  myForm: FormGroup;
  searchResults: string = '';

  constructor(fb: FormBuilder, private carService: CarService) {
    this.myForm = fb.group({
      searchText: [''],
    });
  }

  ngOnInit(): void {
    this.carList$ = this.carService.getCars();
  }

  onSubmit(): void {
    this.carList$ = this.carService.searchCars(this.myForm.value.searchText);
    // this.searchResults = this.carList$.subscribe(res => res.length)
  }
}
