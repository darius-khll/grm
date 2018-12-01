import { observable } from "mobx";

class SettingStore {
  @observable
  isShortcutAvailable = true;
}

const settingStore = new SettingStore();

export default settingStore;
