import { observable } from "mobx";

class AboutStore {
  @observable
  isShortcutAvailable = true;
}

const aboutStore = new AboutStore();

export default aboutStore;
