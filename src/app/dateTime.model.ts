export interface IDateTime {
  time?: string;
  milliseconds_since_epoch?: number;
  date?: string;
}

export class DateTime implements IDateTime {
  constructor(
    public time?: string,
    public milliseconds_since_epoch?: number,
    public date?: string
  ) {
    this.time = time ? time : null;
    this.milliseconds_since_epoch = milliseconds_since_epoch ? milliseconds_since_epoch : null;
    this.date = date ? date : null;
  }
}
