import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-agregar-alumno',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
