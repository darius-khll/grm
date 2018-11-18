import { observable } from "mobx";

class StickerStore {
  @observable
  categories = [
    {
      key: "Sport",
      name: "Sport",
      image: require("../RES/sport.jpg")
    },
    {
      key: "Cars",
      name: "Cars",
      image: require("../RES/cars.jpg")
    },
    {
      key: "Nature",
      name: "Nature",
      image: require("../RES/nature.jpg")
    },
    {
      key: "Movies",
      name: "Movies",
      image: require("../RES/movies.jpg")
    },
    {
      key: "Football",
      name: "Football",
      image: require("../RES/football.jpg")
    },
    {
      key: "Basketball",
      name: "Basketball",
      image: require("../RES/basketball.jpg")
    },
    {
      key: "Nations",
      name: "Nations",
      image: require("../RES/nations.jpg")
    }
  ];
}

const stickerStore = new StickerStore();

export default stickerStore;
