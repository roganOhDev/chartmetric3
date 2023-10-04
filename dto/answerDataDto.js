export class AnswerDataDto {
  constructor(x, tooltip) {
    this.x = x;
    this.y = 1;
    this.tracks = [tooltip];
    this.tooltip = ``;
  }

  addNewTooltip(newToolTip) {
    this.tracks.push(newToolTip);
    this.y++;
  }

  setToolTip() {
    const groupedTracks = {};

    this.tracks.forEach(track => {
      if (!groupedTracks[track]) {
        groupedTracks[track] = 1;

      } else {
        groupedTracks[track]++;
      }
    });

    for (const trackName in groupedTracks) {
      this.tooltip += `${trackName} (${groupedTracks[trackName]}), `
    }

    this.tooltip = this.tooltip.slice(0, -2);
  }
}

AnswerDataDto.Track = class {
  constructor(name) {
    this.name = name;
    this.cnt = 1;
  }
}
