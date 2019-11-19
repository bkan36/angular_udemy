export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incActToInac() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incinactToAct() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }
}
