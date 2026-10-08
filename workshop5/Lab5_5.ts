class FitnessProfile {
  private _weight: number = 0;
  private _height: number = 0;

  set weight(value: number) {
    if (value > 0) {
      this._weight = value;
    } else {
      console.log("น้ำหนักต้องเป็นจำนวนบวกเท่านั้น");
    }
  }

  set height(value: number) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("ส่วนสูงต้องเป็นจำนวนบวกเท่านั้น");
    }
  }

  get bmi(): number {
    if (this._height === 0) return 0;
    return this._weight / (this._height * this._height);
  }
}

const profile = new FitnessProfile();

profile.weight = 83;
profile.height = 1.78;
console.log(profile.bmi);

profile.weight = -5;
