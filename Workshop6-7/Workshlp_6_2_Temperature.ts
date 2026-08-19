class WeatherStation {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    get fahrenheit(): number {
        return (this._celsius * 9 / 5) + 32;
    }

    set fahrenheit(value: number) {
        let convertedCelsius: number = (value - 32) * 5 / 9;

        // Validation: Absolute Zero is -273.15 Celsius
        if (convertedCelsius < -273.15) {
            console.log("Error: Temperature cannot be below Absolute Zero!");
        } else {
            this._celsius = convertedCelsius;
        }
    }
}

console.log("=== Test Workshop 6.2 ===");
let station = new WeatherStation(0);
console.log("Initial Fahrenheit: " + station.fahrenheit);

station.fahrenheit = 104; 
console.log("Updated Fahrenheit: " + station.fahrenheit);

station.fahrenheit = -500; 
console.log("");