import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
