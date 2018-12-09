import { observable } from "mobx";

class SettingStore {
  @observable
  isShortcutAvailable;
}

const settingStore = new SettingStore();

export default settingStore;
