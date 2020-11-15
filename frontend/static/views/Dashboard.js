import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1> Welcome back to this SPA Home</h1>
            <p>The ValidationError class doesn't need an explicit constructor, because it doesn't need to do any custom initialization. The default constructor then takes care of initializing the parent Error from the argument it is given</p>
            <p><a href="/posts" data-link>View recent posts</a>
            </p>`;
  }
}
