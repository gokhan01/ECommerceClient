import { NgxSpinnerService } from "ngx-spinner";

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) {

  }

  showSpinner(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);
  }

  hideSpinner(spinnerType: SpinnerType) {
    this.spinner.hide(spinnerType);
  }
}

export enum SpinnerType {
  ballAtom = "loading1",
  ballPulseRise = "loading2",
  ballNewtonCradle = "loading3"
}
