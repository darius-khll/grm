import { observable } from "mobx";

class ProfileImageStore {
  @observable
  image = null;
}

const profileImageStore = new ProfileImageStore();
export default profileImageStore;
