import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gantt2';

  data = [
    {
      responsable: 'Empleado 1',
      name: 'Jose Lopez',
      urlFotografia: null,
      actividades : [
        {
          estatus: 'Terminada',
          numero: '001',
          color: '#0E6655',
          colorAvance: '#0E6655',
          avance: '100%',
          viewTooltip: false,
          name: 'Instalación',
          fechaInicio: '2021-05-01 00:00:00',
          fechaFin: '2021-05-02 00:00:00'
        },
        {
          estatus: 'Atrasada',
          numero: '002',
          color: '#E74C3C',
          colorAvance: '#A93226',
          avance: '50%',
          viewTooltip: false,
          name: 'Construcción',
          fechaInicio: '2021-05-09 00:00:00',
          fechaFin: '2021-05-20 00:00:00'
        },
        {
          estatus: 'En tiempo',
          numero: '003',
          color: '#3498DB',
          colorAvance: '#1F618D',
          avance: '10%',
          viewTooltip: false,
          name: 'Supervision',
          fechaInicio: '2021-05-22 00:00:00',
          fechaFin: '2021-06-01 00:00:00'
        }
      ]
    },
    {
      responsable: 'Empleado 2',
      name: 'Luis Perez',
      urlFotografia: null,
      actividades : [
        {
          estatus: 'En tiempo',
          numero: '004',
          color: '#3498DB',
          colorAvance: '#1F618D',
          avance: '50%',
          viewTooltip: false,
          name: 'Revision',
          fechaInicio: '2021-05-23 00:00:00',
          fechaFin: '2021-06-03 00:00:00'
        }
      ]
    },
    {
      responsable: 'Empleado 3',
      name: 'Javier Rodriguez',
      urlFotografia: null,
      actividades : [
        {
          estatus: 'Terminada',
          numero: '005',
          color: '#0E6655',
          colorAvance: '#0E6655',
          avance: '100%',
          viewTooltip: false,
          name: 'Desarrollo',
          fechaInicio: '2021-05-19 00:00:00',
          fechaFin: '2021-05-24 00:00:00'
        },
        {
          estatus: 'Atrasada',
          numero: '006',
          color: '#E74C3C',
          colorAvance: '#A93226',
          avance: '50%',
          viewTooltip: true,
          name: 'Implementación',
          fechaInicio: '2021-05-23 00:00:00',
          fechaFin: '2021-05-24 00:00:00'
        }
      ]
    }
  ]

  data2 = [
    {
      responsable: 'Empleado 1',
      name: 'Jose Lopez',
      urlFotografia: null,
      actividades : [
        {
          estatus: 'Terminada',
          numero: '001',
          color: '#0E6655',
          colorAvance: '#0E6655',
          avance: '100%',
          viewTooltip: false,
          name: 'Instalación',
          fechaInicio: '2021-05-01 00:00:00',
          fechaFin: '2021-05-02 00:00:00'
        },
        {
          estatus: 'Atrasada',
          numero: '002',
          color: '#E74C3C',
          colorAvance: '#A93226',
          avance: '50%',
          viewTooltip: false,
          name: 'Construcción',
          fechaInicio: '2021-05-09 00:00:00',
          fechaFin: '2021-05-20 00:00:00'
        },
        {
          estatus: 'En tiempo',
          numero: '003',
          color: '#3498DB',
          colorAvance: '#1F618D',
          avance: '10%',
          viewTooltip: false,
          name: 'Supervision',
          fechaInicio: '2021-05-22 00:00:00',
          fechaFin: '2021-06-01 00:00:00'
        }
      ]
    },
    {
      responsable: 'Empleado 2',
      name: 'Luis Perez',
      urlFotografia: null,
      actividades : [
        {
          estatus: 'En tiempo',
          numero: '004',
          color: '#3498DB',
          colorAvance: '#1F618D',
          avance: '50%',
          viewTooltip: false,
          name: 'Revision',
          fechaInicio: '2021-05-23 00:00:00',
          fechaFin: '2021-06-03 00:00:00'
        }
      ]
    },
    {
      responsable: 'Empleado 3',
      name: 'Javier Rodriguez',
      urlFotografia: null,
      actividades : [
        {
          estatus: 'Terminada',
          numero: '005',
          color: '#0E6655',
          colorAvance: '#0E6655',
          avance: '100%',
          viewTooltip: false,
          name: 'Desarrollo',
          fechaInicio: '2021-05-19 00:00:00',
          fechaFin: '2021-05-24 00:00:00'
        },
        {
          estatus: 'Atrasada',
          numero: '006',
          color: '#E74C3C',
          colorAvance: '#A93226',
          avance: '50%',
          viewTooltip: true,
          name: 'Implementación',
          fechaInicio: '2021-05-23 00:00:00',
          fechaFin: '2021-05-24 00:00:00'
        }
      ]
    }
  ]

  constructor(){}

  ngOnInit(){
    
  }
}
