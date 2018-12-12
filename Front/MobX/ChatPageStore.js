import { observable } from "mobx";

class ChatPageStore {
  @observable
  chatData = [
    {
      type: "text",
      send: true,
      content: "Hi"
    },
    {
      type: "text",
      send: false,
      content: "Hello"
    },
    {
      type: "text",
      send: true,
      content: "How Are You?"
    },
    {
      type: "text",
      send: false,
      content: "fine, how are you doing?"
    },
    {
      type: "text",
      send: true,
      content: "I'm doing great."
    },
    {
      type: "text",
      send: true,
      content: "Do you have a plan for tonight?"
    },
    {
      type: "text",
      send: false,
      content: "Not yet!"
    },
    {
      type: "text",
      send: true,
      content: "How about my home for dinner?"
    },
    {
      type: "text",
      send: false,
      content: "That is OK."
    },
    {
      type: "text",
      send: false,
      content: "when?"
    },
    {
      type: "text",
      send: true,
      content: "How about 6 pm?"
    },
    {
      type: "text",
      send: false,
      content:
        "That is too soon. how about 7? That is too soon. how about 7? That is too soon. how about 7? That is too soon. how about 7?"
    },
    {
      type: "text",
      send: true,
      content: "That is good too!"
    },
    {
      type: "text",
      send: false,
      content: "OK!"
    },
    {
      type: "text",
      send: true,
      content: "My Place at 7 pm then!"
    },
    {
      type: "text",
      send: false,
      content: "That is alright!"
    },
    {
      type: "text",
      send: true,
      content: "See you"
    },
    {
      type: "text",
      send: false,
      content: "ok, bye"
    }
  ];
}

const chatPageStore = new ChatPageStore();
export default chatPageStore;
