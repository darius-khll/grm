import { observable } from "mobx";

class CheckCodeStore {
  @observable
  code = "";
  @observable
  isModalVisible = false;
  @observable
  isCheckedAgree = false;
}

const checkCodeStore = new CheckCodeStore();
export default checkCodeStore;
