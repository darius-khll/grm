import { observable } from "mobx";

class ShopStore {
  @observable
  isDrawerOpen = false;
  @observable
  isShortcutAvailable = true;
}

const shopStore = new ShopStore();

export default shopStore;
