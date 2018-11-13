import { observable } from "mobx";

class SearchPageStore {
  @observable
  idSearchText = "";
  @observable
  phoneSearchText = "";
  @observable
  tagSearchText = "";
}

const searchPageStore = new SearchPageStore();
export default searchPageStore;
