import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component'
import { AppMaterialModule } from '../../app.material.module';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-crud-sala',
  templateUrl: './crud-sala.component.html',
  styleUrls: ['./crud-sala.component.css']
})
export class CrudSalaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
