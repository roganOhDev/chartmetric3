export class OriginDataDto {
  constructor(id, name, tracks) {
    this.id = id;
    this.name = name;
    this.tracks = tracks;
  }
}

OriginDataDto.Track = class {
  constructor(timestamp, trackName) {
    this.timestp = timestamp;
    this.trackName = trackName;
  }
}