import { observable } from "mobx";

class CheckCodeStore {
  @observable
  code = "";
  @observable
  isModalVisible = false;
}

const checkCodeStore = new CheckCodeStore();
export default checkCodeStore;
