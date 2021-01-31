// Convert a duration in seconds to `m:ss`, `mm:ss`, or `h:mm:ss`.
module.exports = function opinionatedDurationFormat(durationInSeconds) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  const secondsPadded = seconds < 10 ? `0${seconds}` : seconds;

  if (minutes < 60) {
    return `${minutes}:${secondsPadded}`;
  }

  const hours = Math.floor(minutes / 60);

  const remainderMinutes = Math.floor(minutes % 60);
  const remainderMinutesPadded =
    remainderMinutes < 10 ? `0${remainderMinutes}` : remainderMinutes;

  return `${hours}:${remainderMinutesPadded}:${secondsPadded}`;
};
