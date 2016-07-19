import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {ReparationService} from "./reparation.service";

/**
 * This class represents the lazy loaded ReparationsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-reparations',
  templateUrl: 'reparations.component.html',
  styleUrls: ['reparations.component.css'],
  providers: [ReparationService],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationsComponent implements OnInit {

  constructor(public service:ReparationService) {
  }

  ngOnInit() {
    this.service.init().subscribe();
  }

}
