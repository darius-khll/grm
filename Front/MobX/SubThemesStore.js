import { observable } from "mobx";

class SubThemesStore {
  @observable
  themes = [
    {
      key: "Arsenal",
      name: "Arsenal",
      image: require("../RES/arsenal.jpg")
    },
    {
      key: "Real Madrid",
      name: "Real Madrid",
      image: require("../RES/realmadrid.jpg")
    },
    {
      key: "Liverpool",
      name: "Liverpool",
      image: require("../RES/liverpool.jpg")
    },
    {
      key: "Barcelona",
      name: "Barcelona",
      image: require("../RES/barcelona.jpg")
    },
    {
      key: `Manchester United`,
      name: "Manchester United",
      image: require("../RES/manchesterunited.jpg")
    },
    {
      key: "Bayern Munchen",
      name: "Bayern Munchen",
      image: require("../RES/bayern.jpg")
    },
    {
      key: "Dortmund",
      name: "Dortmund",
      image: require("../RES/dortmund.jpg")
    }
  ];
}

const subThemesStore = new SubThemesStore();

export default subThemesStore;
