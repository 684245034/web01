class Thermostat {
  private _temperature: number = 25;

  get temperature(): number {
    return this._temperature;
  }

  set temperature(value: number) {
    if (value >= 15 && value <= 30) {
      this._temperature = value;
    } else {
      console.log("Temperature out of range (15-30°C)");
    }
  }
}

const thermostat = new Thermostat();

thermostat.temperature = 25;
console.log(thermostat.temperature);

thermostat.temperature = 40;
console.log(thermostat.temperature);