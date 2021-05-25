import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import * as moment from 'moment';

@Component({
  selector: 'app-gantt2',
  templateUrl: './gantt2.component.html',
  styleUrls: ['./gantt2.component.scss']
})
export class Gantt2Component implements OnInit {

  @Input() items = [];
  @Input() isDragAndDrop: boolean = false;
  @Output() selectedItem = new EventEmitter<any>();

  arrayFechas = [];

  arrayDiv = [];

  line = {
    left: 0
  }

  user_photo_default = "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"; //url image

  today = moment().format('YYYY-MM-DD');

  constructor() { }

  ngOnInit() {
    //let dataDays = this.getPeriodo();
    //this.buildContainer(dataDays);
  }

  ngOnChanges(){
    if(this.items){
      console.log(this.items);
      //let dataDays = this.getPeriodo();
      //this.buildContainer(dataDays);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  drop2(event: CdkDragDrop<string[]>) {
    console.log(event);
    let indexPrevious = Number(event.previousContainer.id.split("-")[1]) - 1;
    let indexNext = Number(event.container.id.split("-")[1]) - 1;
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(this.items[indexNext].actividades, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(this.items[indexPrevious].actividades,
        this.items[indexNext].actividades, event.previousIndex, event.currentIndex);
    }
  }


  getPeriodo(){
    this.items.forEach(item => {
      this.arrayFechas.push(item.fechaInicio);
      this.arrayFechas.push(item.fechaFin);
    });
    console.log(this.arrayFechas);
    let array = this.arrayFechas.map((fechaActual) => new Date(fechaActual) );

    var max = new Date(Math.max.apply(null,array));
    var min = new Date(Math.min.apply(null,array));

    console.log(max);
    console.log(min);
    let difDays = moment(max).diff(moment(min), 'days');
    let difHours = moment(max).diff(moment(min), 'hours');
    let difSeconds = moment(max).diff(moment(min), 'seconds');
    console.log(difDays);
    console.log(difHours);
    return {maximo: max, minimo: min, difDays: difDays, difHours: difHours, difSeconds: difSeconds};
  }

  buildContainer(dataDays){
    let widthCont = Math.floor(document.getElementById("containerGanttFechas").clientWidth - 170);
    let widthContFechas = Math.floor(document.getElementById("containerGanttFechas").clientWidth - 20);
    console.log(widthCont);
    console.log(widthContFechas);
    let large = this.getDivide(widthCont);
    let large2 = this.getDivide(widthContFechas);
    let sumDiv = 0;
    let sumDiv2 = 0;
    let isDay = false;
    if(dataDays.difDays >= large){
      sumDiv = Number(dataDays.difDays) / Number(large);
      sumDiv = Math.floor(sumDiv);
      sumDiv2 = Number(dataDays.difDays) / Number(large2);
      //sumDiv2 = Math.trunc(sumDiv2);
      isDay = true;
    }else{
      sumDiv = Number(dataDays.difHours) / Number(large);
      sumDiv = Math.floor(sumDiv);
      sumDiv2 = Number(dataDays.difHours) / Number(large2);
      //sumDiv2 = Math.trunc(sumDiv2);
      isDay = false;
    }
    this.arrayDiv = [];
    this.arrayDiv.push({left: 0, name: ''});
    for (let i = 0; i < large2; i++) {
      let sum = sumDiv2 * i;
      let dateNew = isDay ? moment(dataDays.minimo).add(sum, 'days') : moment(dataDays.minimo).add(sum, 'hours');
      if(isDay){
        let dayPx = widthContFechas / dataDays.difSeconds;
        let daysPastIni = dateNew.diff(moment(dataDays.minimo), 'seconds');
        this.arrayDiv.push(
          {left: (dayPx * daysPastIni) + 150, 
            name: dateNew.format('MMM DD')
          });
      }else{
        let hourPx = widthContFechas / dataDays.difSeconds;
        let hoursPastIni = dateNew.diff(moment(dataDays.minimo), 'seconds');
        this.arrayDiv.push(
          {left: (hourPx * hoursPastIni) + 150, 
            name: dateNew.format('MMM DD HH:mm:ss')
          });
      }
      
    }
    this.buildLineToday(dataDays, widthCont);
    this.buildWidthBar(dataDays, isDay, widthCont);
  }

  buildWidthBar(dataDays, isDay, widthCont){
    this.items.forEach(item => {
      let ini = moment(item.fechaInicio);
      let fin = moment(item.fechaFin);
      if(isDay){
        let days = (moment(fin).diff(moment(ini), 'seconds')) < 5 && dataDays.difDays > 7 ? 5 : moment(fin).diff(moment(ini), 'seconds');
        item.widthBar = (days * 100) / dataDays.difSeconds;
        let dayPx = widthCont / dataDays.difSeconds;
        let daysPastIni = moment(ini).diff(moment(dataDays.minimo), 'seconds');
        item.leftPx = (dayPx * daysPastIni);
      }else{
        let hours = moment(fin).diff(moment(ini), 'seconds');
        item.widthBar = (hours * 100) / dataDays.difSeconds;
        let hourPx = widthCont / dataDays.difSeconds;
        let hoursPastIni = moment(ini).diff(moment(dataDays.minimo), 'seconds');
        item.leftPx = (hourPx * hoursPastIni);
      }
    });
  }

  getDivide(width){
    if(width >= 1200){
      return 6
    }else if(width >= 1000){
      return 4
    }else if(width >= 800){
      return 4
    }
    else if(width >= 600){
      return 4
    } else {
      return 4
    }
  }

  buildLineToday(dataDays, widthCont){
    let ini = moment(dataDays.minimo);
    let fin = moment(dataDays.maximo);
    let diffSecondsToday = moment().diff(moment(ini), 'seconds');
    let diffSecondsAll = moment(fin).diff(moment(ini), 'seconds');
    console.log(ini);
    console.log(fin);
    console.log(diffSecondsToday);
    console.log(diffSecondsAll);
    if(diffSecondsToday >= diffSecondsAll){
      this.line.left = 0;
    }else{
      let hourPx = widthCont / dataDays.difSeconds;
      let hoursPastIni = moment().diff(moment(dataDays.minimo), 'seconds');
      this.line.left = (hourPx * hoursPastIni) + 150;
    }
  }

  selectedBar(item){
    console.log(item);
    this.selectedItem.emit(item);
    this.items.forEach(item2 => {
      if(item2.id != item.id){
        item2.selected = false;
      }else{
        item2.selected = true;
      }
    });
  }


  getListConnect(namelist){
    let listString = [];
    this.items.forEach((item, index) => {
      if(namelist !== 'list-'+(index+1)){
        listString.push('list-'+(index+1));
      }
    });
    return listString;
  }

}

