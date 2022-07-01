import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/Models/Tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: TecnicoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.service.findAll().subscribe(
      (tecnicoRetorno : Tecnico[]) =>{
        this.ELEMENT_DATA = tecnicoRetorno;
        this.dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },
      (error: any) =>{
        console.log(error);
      }
    );
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
