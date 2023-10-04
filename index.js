import { response as sampleApiResponse } from './sampleApiResponse.js';
import { AnswerDataDto } from './dto/answerDataDto.js';
import { OriginDataDto } from "./dto/originDataDto.js";


function solveProblem1(originData) {
  const originDataDtos = transformOriginDataIntoDto(originData);

  const mapByTimestp = createMapByTimestp(originDataDtos);

  return Array.from(mapByTimestp.values()).sort((a, b) => {
    return new Date(a.x) - new Date(b.x);
  })
}

function createMapByTimestp(originDataDtos) {
  const mapByTimestp = new Map();

  originDataDtos.forEach(originDataDto => pushTrackIntoMap(originDataDto.tracks, mapByTimestp));

  mapByTimestp.forEach(e => e.setToolTip());
  return mapByTimestp;
}

function pushTrackIntoMap(tracks, mapByTimestp) {
  tracks.forEach(track => {
    if (mapByTimestp.has(track.timestp)) {
      mapByTimestp.get(track.timestp).addNewTrackName(track.trackName);

    } else {
      mapByTimestp.set(track.timestp, new AnswerDataDto(track.timestp, track.trackName));
    }
  });
}

function transformOriginDataIntoDto(originData) {
  return originData.map(e => {

    const trackDtos = [];
    e.tracks.forEach(track => {
      trackDtos.push(new OriginDataDto.Track(track.timestp, track.trackName));
    })

    return new OriginDataDto(e.id, e.name, trackDtos);
  });
}


//  --------------------------------------------------------------------------------------------

//todo fix cnt
function solveProblem2(originData) {
  const groupedData = {};

  originData.forEach(item => {
    item.tracks.forEach(track => {
      if (!groupedData[track.timestp]) {
        groupedData[track.timestp] = {x: track.timestp, y: 0, tooltip: ''};
      }
      groupedData[track.timestp].y++;
      groupedData[track.timestp].tooltip += `${track.trackName} (1), `;
    });
  });

  for (const key in groupedData) {
    groupedData[key].tooltip = groupedData[key].tooltip.slice(0, -2);
  }

  return Object.values(groupedData).sort((a, b) => {
    return new Date(a.x) - new Date(b.x);
  });
}

//  --------------------------------------------------------------------------------------------

console.log(solveProblem1(sampleApiResponse));
// console.log(solveProblem2(sampleApiResponse));



