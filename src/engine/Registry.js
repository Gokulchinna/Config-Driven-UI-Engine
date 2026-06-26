class ComponentRegistry {
  constructor() {
    this.components = {};
  }

  register(name, component) {
    this.components[name] = component;
  }

  get(name) {
    return this.components[name];
  }
}

export const registry = new ComponentRegistry();
