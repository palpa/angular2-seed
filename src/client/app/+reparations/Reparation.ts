export interface Reparation {
  id:number;
  failure:string;
  deviceSerialNumber:string;
  deviceTypeId:number;
  deviceTypeName:string;
  currentStateName:string;
  currentResponsibleName:string;
  currentStateDescriptionId:number;
  creationDate:Date;
  completed:boolean;
  reparationCycleId:number;
  reparationCycleName:string;
  lastUpdated:Date;
}
