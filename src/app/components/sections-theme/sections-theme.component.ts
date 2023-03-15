import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-sections-theme',
  templateUrl: './sections-theme.component.html',
  styleUrls: ['./sections-theme.component.css']
})
export class SectionsThemeComponent {

  list_of_categories: Category[] = []

  constructor(private data_service: DataService){
    this.data_service.getCategorySectionsNews().subscribe({next: value => {
      this.list_of_categories = value;
    }, error(err) {
      console.log(err);
    },})
  }


}
