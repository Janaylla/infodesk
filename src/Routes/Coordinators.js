export const goToHome = (history) => {
  history.push("/");
};
export const goToLogin = (history) => {
  history.push("/login");
};
export const goToSignUp = (history) => {
  history.push("/signup");
};
export const goToSignUpAddress = (history) => {
  history.push("/signup/address");
};
export const goToRestaurant = (history, id) => {
  history.push(`/restaurant/${id}`);
};
export const goToCart = (history) => {
  history.push("/cart");
};
export const goToProfile = (history) => {
  history.push("/profile");
};
export const goToEditProfile = (history) => {
  history.push("/edit/profile");
};
export const goToEditAddress = (history) => {
  history.push("/edit/address");
};
