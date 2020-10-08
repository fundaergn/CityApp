import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {City} from '../../model/domain/city';
import {CityService} from '../../model/service/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  public city: City;
  submitted = false;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.city = {};
  }

  newCity(): void {
    this.submitted = false;
    this.city = {};
  }

  // tslint:disable-next-line:typedef
  saveCity() {
    /*this.city.code='123';
    this.city.name='jsh';
    this.city.population='768';*/
    this.cityService.createCity(this.city)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.city = {};
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.saveCity();
  }

}
