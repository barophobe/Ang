import { 
	Component, 
	OnInit, 
	Input, 
	ViewEncapsulation, 
	OnChanges,
	SimpleChanges,
  DoCheck 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //default is .emulated, could also be .native or .none
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element: {type:string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
  	console.log('ngOnChanges called!');
  	console.log(changes);
  }

  ngOnInit() {
  	console.log('ngOnIt called!');
  }
  
  ngDoCheck() {
    console.log('ngOnIt called!');
  }

}
