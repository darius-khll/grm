import { observable } from "mobx";

class SubStickerStore {
  @observable
  stickers = [
    {
      key: "Sport",
      name: "Sport",
      image: require("../RES/sport.jpg"),
      price: 14,
      numOfStickers: 14
    },
    {
      key: "Cars",
      name: "Cars",
      image: require("../RES/cars.jpg"),
      price: 14,
      numOfStickers: 14
    },
    {
      key: "Nature",
      name: "Nature",
      image: require("../RES/nature.jpg"),
      price: 14,
      numOfStickers: 14
    },
    {
      key: "Movies",
      name: "Movies",
      image: require("../RES/movies.jpg"),
      price: 14,
      numOfStickers: 14
    },
    {
      key: "Football",
      name: "Football",
      image: require("../RES/football.jpg"),
      price: 14,
      numOfStickers: 14
    },
    {
      key: "Basketball",
      name: "Basketball",
      image: require("../RES/basketball.jpg"),
      price: 14,
      numOfStickers: 14
    },
    {
      key: "Nations",
      name: "Nations",
      image: require("../RES/nations.jpg"),
      price: 14,
      numOfStickers: 14
    }
  ];
}

const subStickerStore = new SubStickerStore();

export default subStickerStore;
