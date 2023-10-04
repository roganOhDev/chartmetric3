import { response as sampleApiResponse } from './sampleApiResponse.js';
import { AnswerDataDto } from './dto/answerDataDto.js';
import { OriginDataDto } from "./dto/responseDto";

function transformData(originData) {
  const originDataDtos = transformOriginDataIntoDto(originData);


}

function transformOriginDataIntoDto(originData) {
  return originData.map(e =>{

    const trackDtos = [];
    e.tracks.forEach(track => {
      trackDtos.push(new AnswerDataDto(track.timestp, track.trackName));
    })

    return new OriginDataDto(e.id, e.name, trackDtos);
  });
}

console.log(transformData(sampleApiResponse));
