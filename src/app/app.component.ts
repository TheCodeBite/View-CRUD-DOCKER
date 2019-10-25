import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from './Services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view';

  form: FormGroup;
  users: any;

  constructor(private fb: FormBuilder, private api: ServiceService){

  }

  ngOnInit(){
    this.form = this.fb.group({
      name: ['Kevin'],
      email: ['kamh.1996.hmak@hotmail.com'],
      password: ['123']
    });
     
  }

  onSubmit(formulario){
    console.log("este es el formulario");
    console.log(formulario);

    this.ngOnInit();
  }

  showUsers(){
    this.api.GetUsers().subscribe(response => {
      this.users = response
    });
  }

}
