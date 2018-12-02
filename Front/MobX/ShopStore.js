import { observable } from "mobx";

class ShopStore {
  @observable
  isShortcutAvailable = true;
}

const shopStore = new ShopStore();

export default shopStore;
