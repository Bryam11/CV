import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }
  public phone = '[+593985133237]';
  public title = '[Hola, Quisiera saber mas informacio]';

  ngOnInit(): void {
  }

}
