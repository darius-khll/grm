import { observable } from "mobx";

class AboutStore {
  @observable
  isShortcutAvailable;
}

const aboutStore = new AboutStore();

export default aboutStore;
