import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component'
import { AppMaterialModule } from '../../app.material.module';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-crud-autor',
  templateUrl: './crud-autor.component.html',
  styleUrls: ['./crud-autor.component.css']
})
export class CrudAutorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
