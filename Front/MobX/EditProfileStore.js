import { observable } from "mobx";

class EditProfileStore {
  @observable
  isDateTimePickerVisible = false;
  @observable
  isCheckedEmail = false;
  @observable
  isCheckedPhone = false;
  @observable
  country = "";
  @observable
  data = [
    {
      label: "Man",
      size: 15
    },
    {
      label: "Woman",
      size: 15
    },
    {
      label: "Other",
      size: 15
    }
  ];
}

const editProfileStore = new EditProfileStore();
export default editProfileStore;
