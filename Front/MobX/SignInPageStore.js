import { observable } from "mobx";

class SignInPageStore {
  @observable
  countryCode = "+44";
  @observable
  modalVisible = false;
  @observable
  modal2Visible = false;
  @observable
  number = "";
}

const signInPageStore = new SignInPageStore();
export default signInPageStore;
