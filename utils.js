export const path = file => `files/${file}`;

export function secondsToMinutes(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
}