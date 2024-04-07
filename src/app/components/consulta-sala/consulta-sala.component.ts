import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-consulta-sala',
  templateUrl: './consulta-sala.component.html',
  styleUrls: ['./consulta-sala.component.css']
})
export class ConsultaSalaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
