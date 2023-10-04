export class AnswerDataDto {
  constructor(x, trackName) {
    this.x = x;
    this.y = 1;
    this.tracks = [trackName];
    this.tooltip = ``;
  }

  addNewTrackName(trackName) {
    this.tracks.push(trackName);
    this.y++;
  }

  setToolTip() {
    const groupedTracks = {};

    this.tracks.forEach(track => {
      if (groupedTracks[track]) {
        groupedTracks[track]++;

      } else {
        groupedTracks[track] = 1;
      }
    });

    for (const trackName in groupedTracks) {
      this.tooltip += `${trackName} (${groupedTracks[trackName]}), `
    }

    this.tooltip = this.tooltip.slice(0, -2);
  }
}
