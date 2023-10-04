export class OriginDataDto {
  constructor(id, name, tracks) {
    this.id = id;
    this.name = name;
    this.tracks = tracks;
  }

  Track = class Track{
    constructor(timestamp, trackName){
      this.timestp = timestamp;
      this.trackName = trackName;
    }
  }

}
