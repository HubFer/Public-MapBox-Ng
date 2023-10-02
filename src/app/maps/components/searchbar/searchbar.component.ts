import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  debouncer: Subject<string> = new Subject() 
  @ViewChild('searchInput') searchInput: ElementRef<HTMLElement> | undefined
  
  constructor(private places: PlacesService) {   }


  ngOnInit(): void {
    
    this.debouncer.pipe (debounceTime(300)) 
  .subscribe (valor=>{
    this.places.findLocation(valor) 
  })

  }

  search(searchValue: string) {
   this.debouncer.next(searchValue)
  }

}
