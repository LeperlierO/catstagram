import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../services/cat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {

  catForm: FormGroup;

  constructor(private fb: FormBuilder, private catService: CatService, private toastrService: ToastrService){
    this.catForm = this.fb.group({
      'imageUrl' : ['', Validators.required],
      'description' : ['']
    })
  }

  get imageUrl(){
    return this.catForm.get('imageUrl');
  }
 
  create(){
    this.catService.create(this.catForm.value).subscribe(res => {
      console.log(res);
      this.toastrService.success(`Le chat ${res} est créé`);
    })
  }
}
