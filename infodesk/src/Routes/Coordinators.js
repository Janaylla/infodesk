export const goToHome = (history) => {
  history.push("/");
};
export const goToAbout = (history) => {
  history.push("/about");
};
export const goToFind = (history) => {
  history.push("/find");
};
export const goToVideos = (history) => {
  history.push("/videos");
};
export const goToVideo = (history, video) => {
  history.push(`/videos/${video}`);
};