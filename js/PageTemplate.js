class PageTemplate {

  constructor(config) {
    this.document = config.document;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }

  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this.document);
    });
  }
}

export default PageTemplate;