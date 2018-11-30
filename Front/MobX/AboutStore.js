import { observable } from "mobx";

class AboutStore {
  @observable
  isDrawerOpen = false;
  @observable
  isShortcutAvailable = true;
}

const aboutStore = new AboutStore();

export default aboutStore;
