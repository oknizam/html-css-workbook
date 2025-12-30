let instance;
class SingletonPattern {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    instance.items = [];
  }

  addItems(item) {
    instance.items.push(item);
  }

  getItems() {
    return instance.items;
  }
}

export const singletonInstane = Object.freeze(new SingletonPattern());
