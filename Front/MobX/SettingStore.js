import { observable } from "mobx";

class SettingStore {
  @observable
  isDrawerOpen = false;
  @observable
  isShortcutAvailable = true;
}

const settingStore = new SettingStore();

export default settingStore;
