import { observable } from "mobx";

class ContactSelectionStore {
  @observable
  data = [
    { name: "Asghar", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Akbar", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Ali", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Neda", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Soghra", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Zahra", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Mammad", image: require("../RES/sampleprofileimage.jpg") },
    { name: "Arash", image: require("../RES/sampleprofileimage.jpg") }
  ];
}

const contactSelectionStore = new ContactSelectionStore();
export default contactSelectionStore;
