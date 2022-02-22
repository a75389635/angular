import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { ApiService } from '../app/service/api-service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ ApiService ]
})
export class TestComponent implements OnInit {

  data: any = null;

  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      ['id']: ''
    });

  }

  getAllAttractions () {

    const id = this.form.get('id')?.value;

    return this.api.getAllAttractions(id).subscribe(res => {

      this.data = res.body;

    });
  }
  

}
