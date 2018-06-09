export class Phone{
  model:string;
  battery:string;
  description:string;

  constructor(model: string, battery: string, description: string) {
    this.model = model;
    this.battery = battery;
    this.description = description;
  }
}
