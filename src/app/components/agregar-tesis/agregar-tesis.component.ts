import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],

  selector: 'app-agregar-tesis',
  templateUrl: './agregar-tesis.component.html',
  styleUrls: ['./agregar-tesis.component.css']
})
export class AgregarTesisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
