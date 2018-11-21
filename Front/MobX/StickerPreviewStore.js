import { observable } from "mobx";

class StickerPreviewStore {
  @observable
  name = "Liverpool";
  @observable
  price = 100;
  @observable
  previews = [
    {
      image: require("../RES/livtrans.png")
    },
    {
      image: require("../RES/livtrans.png")
    },
    {
      image: require("../RES/livtrans.png")
    },
    {
      image: require("../RES/livtrans.png")
    },
    {
      image: require("../RES/livtrans.png")
    },
    {
      image: require("../RES/livtrans.png")
    }
  ];
  @observable
  id;
}

const stickerPreviewStore = new StickerPreviewStore();

export default stickerPreviewStore;
