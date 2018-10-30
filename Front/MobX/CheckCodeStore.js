import { observable } from "mobx";

class CheckCodeStore {
  @observable
  code = "";
  @observable
  isModalResend = false;
  @observable
  isModalAgree = false;
  @observable
  isCheckedAgree = false;
}

const checkCodeStore = new CheckCodeStore();
export default checkCodeStore;
