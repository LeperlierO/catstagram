import { Component } from '@angular/core';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/Cat';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent {

  cats: Array<Cat> = []
  constructor(private catService: CatService){}

  ngOnInit(){
    this.loadCats();
  }

  loadCats(){
    this.catService.getCats().subscribe(cats => {
      this.cats = cats;
    })
  }

  deleteCat(id: number){
    this.catService.deleteCat(id).subscribe(res => {
      this.loadCats();
    });
  }

}
