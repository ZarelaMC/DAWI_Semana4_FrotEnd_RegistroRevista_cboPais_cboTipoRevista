import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';
@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-consulta-autor',
  templateUrl: './consulta-autor.component.html',
  styleUrls: ['./consulta-autor.component.css']
})
export class ConsultaAutorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
