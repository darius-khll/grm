import { computed, observable } from "mobx";

class ContactsStore {
  @observable
  isDrawerOpen = false;
  @observable
  isShortcutAvailable = true;
  @observable
  sections = [
    {
      title: "#",
      data: []
    },
    {
      title: "A",
      data: [
        {
          name: "Ali",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Arash",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "B",
      data: []
    },
    {
      title: "C",
      data: []
    },
    {
      title: "D",
      data: []
    },
    {
      title: "E",
      data: []
    },
    {
      title: "F",
      data: [
        {
          name: "Farid",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Farbod",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "G",
      data: []
    },
    {
      title: "H",
      data: []
    },
    {
      title: "I",
      data: []
    },
    {
      title: "J",
      data: [
        {
          name: "Jason",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Jili",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "K",
      data: []
    },
    {
      title: "L",
      data: []
    },
    {
      title: "M",
      data: []
    },
    {
      title: "N",
      data: []
    },
    {
      title: "O",
      data: []
    },
    {
      title: "P",
      data: []
    },
    {
      title: "Q",
      data: []
    },
    {
      title: "R",
      data: []
    },
    {
      title: "S",
      data: []
    },
    {
      title: "T",
      data: []
    },
    {
      title: "U",
      data: []
    },
    {
      title: "V",
      data: []
    },
    {
      title: "W",
      data: []
    },
    {
      title: "X",
      data: []
    },
    {
      title: "Y",
      data: [
        {
          name: "Yazdan",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Yas",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "Z",
      data: []
    },
    {
      title: "Others",
      data: []
    }
  ];
  @observable
  sectionsData = [
    {
      title: "#",
      data: []
    },
    {
      title: "A",
      data: [
        {
          name: "Ali",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Arash",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "B",
      data: []
    },
    {
      title: "C",
      data: []
    },
    {
      title: "D",
      data: []
    },
    {
      title: "E",
      data: []
    },
    {
      title: "F",
      data: [
        {
          name: "Farid",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Farbod",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "G",
      data: []
    },
    {
      title: "H",
      data: []
    },
    {
      title: "I",
      data: []
    },
    {
      title: "J",
      data: [
        {
          name: "Jason",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Jili",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "K",
      data: []
    },
    {
      title: "L",
      data: []
    },
    {
      title: "M",
      data: []
    },
    {
      title: "N",
      data: []
    },
    {
      title: "O",
      data: []
    },
    {
      title: "P",
      data: []
    },
    {
      title: "Q",
      data: []
    },
    {
      title: "R",
      data: []
    },
    {
      title: "S",
      data: []
    },
    {
      title: "T",
      data: []
    },
    {
      title: "U",
      data: []
    },
    {
      title: "V",
      data: []
    },
    {
      title: "W",
      data: []
    },
    {
      title: "X",
      data: []
    },
    {
      title: "Y",
      data: [
        {
          name: "Yazdan",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Yas",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "Z",
      data: []
    },
    {
      title: "Others",
      data: []
    }
  ];
  @computed
  get dataSource() {
    return this.sectionsData.slice();
  }
  get dataSections() {
    return this.sections.slice();
  }
}

const contactsStore = new ContactsStore();

export default contactsStore;
