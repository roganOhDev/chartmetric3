import { response as sampleApiResponse } from './sampleApiResponse.js';
import { AnswerDataDto } from './dto/answerDataDto.js';
import { OriginDataDto } from "./dto/originDataDto.js";


function solveProblem(originData) {
  const originDataDtos = transformOriginDataIntoDto(originData);

  const mapByTimestp = createMapByTimestp(originDataDtos);

  return Array.from(mapByTimestp.values())
    .map(e => e.chooseReturnFields())
    .sort((a, b) => new Date(a.x) - new Date(b.x));
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


console.log(solveProblem(sampleApiResponse));
