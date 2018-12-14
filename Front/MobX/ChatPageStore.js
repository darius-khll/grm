import { observable } from "mobx";

class ChatPageStore {
  @observable
  textNormal = "";
}

const chatPageStore = new ChatPageStore();
export default chatPageStore;
