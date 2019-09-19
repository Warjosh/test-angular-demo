import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {

    /*  */
        Productos = [{
            name: 'prodcutoq', cantidad: '12',  precio: '12', company: 'KFC'
        }];
        columnsProductos = [
            { prop: 'Nombre' },
            { cantidad: 'Cantidad' },
            { precio: 'Precio' },
            { company: 'Compañia' }
        ];
        Proveedores = [
            { name: 'Austin', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
        ];
        columnsProveedores = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];        
        Tiendas = [
            { name: 'tienda 1', decp: 'dirc 1', company: 'Swimlane' },
            { name: 'tienda 2', decp: 'dirc 2 ', company: 'KFC' },
            { name: 'tienda 3', decp: 'dirc 3', company: 'Burger King' }
        ];
        columnsTiendas = [
            { prop: 'Nombre' },
            { name: 'Descricion' },
            { name: 'Compañia' }
        ];
        Inventariado = [
            { name: 'Austin', tipo: 'Male', company: 'Swimlane' }
        ];
        columnsInventariado = [
            { prop: 'Nombre' },
            { name: 'Tipo' },
            { name: 'Compañia' }
        ];

        opciones = [
            'Productos',
            'Proveedores',
            'Tiendas',
            'Inventariado'
        ];

        opcion: string;

        selected = [];
    /*  */
    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor( private renderer : Renderer, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
    }


    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
    }
    
    onActivate(event) {
        this.selected = event.row; 
        console.log('Activate Event', event, );
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }



    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');


    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
