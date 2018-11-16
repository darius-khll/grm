import { compited, observable } from "mobx";

class SearchPageStore {
  @observable
  idSearchText = "";
  @observable
  phoneSearchText = "";
  @observable
  tagSearchText = "";
  @observable
  searchIdList = [
    {
      key: "James",
      image: require("../RES/sampleprofileimage.jpg"),
      id: "JamesId"
    },
    {
      key: "Joel",
      image: require("../RES/sampleprofileimage.jpg"),
      id: "JoelId"
    },
    {
      key: "John",
      image: require("../RES/sampleprofileimage.jpg"),
      id: "JohnId"
    },
    {
      key: "Jillian",
      image: require("../RES/sampleprofileimage.jpg"),
      id: "JillianId"
    },
    {
      key: "Jimmy",
      image: require("../RES/sampleprofileimage.jpg"),
      id: "JimmyId"
    },
    {
      key: "Julie",
      image: require("../RES/sampleprofileimage.jpg"),
      id: "JulieId"
    }
  ];
  @observable
  searchPhoneList = [
    {
      key: "James",
      image: require("../RES/sampleprofileimage.jpg"),
      phone: "09120620574"
    },
    {
      key: "Joel",
      image: require("../RES/sampleprofileimage.jpg"),
      phone: "09120620574"
    },
    {
      key: "John",
      image: require("../RES/sampleprofileimage.jpg"),
      phone: "09120620574"
    },
    {
      key: "Jillian",
      image: require("../RES/sampleprofileimage.jpg"),
      phone: "09120620574"
    },
    {
      key: "Jimmy",
      image: require("../RES/sampleprofileimage.jpg"),
      phone: "09120620574"
    },
    {
      key: "Julie",
      image: require("../RES/sampleprofileimage.jpg"),
      phone: "09120620574"
    }
  ];
  @observable
  searchTagList = [
    {
      key: "James",
      image: require("../RES/sampleprofileimage.jpg"),
      tags: ["hobby1", "hobby2", "hobby1", "hobby2", "hobby1", "hobby2"],
      get getTags() {
        return this.tags.map(tag => `#${tag}  `);
      }
    },
    {
      key: "Joel",
      image: require("../RES/sampleprofileimage.jpg"),
      tags: ["hobby1", "hobby2"],
      get getTags() {
        return this.tags.map(tag => `#${tag}  `);
      }
    },
    {
      key: "John",
      image: require("../RES/sampleprofileimage.jpg"),
      tags: ["hobby1", "hobby2"],
      get getTags() {
        return this.tags.map(tag => `#${tag}  `);
      }
    },
    {
      key: "Jillian",
      image: require("../RES/sampleprofileimage.jpg"),
      tags: ["hobby1", "hobby2"],
      get getTags() {
        return this.tags.map(tag => `#${tag}  `);
      }
    },
    {
      key: "Jimmy",
      image: require("../RES/sampleprofileimage.jpg"),
      tags: ["hobby1", "hobby2"],
      get getTags() {
        return this.tags.map(tag => `#${tag}  `);
      }
    },
    {
      key: "Julie",
      image: require("../RES/sampleprofileimage.jpg"),
      tags: ["hobby1", "hobby2"],
      get getTags() {
        return this.tags.map(tag => `#${tag}  `);
      }
    }
  ];
}

const searchPageStore = new SearchPageStore();
export default searchPageStore;
