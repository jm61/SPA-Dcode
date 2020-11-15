import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Latest Posts</h1>
            <p>The ValidationError class doesn't need an explicit constructor, because it doesn't need to do any custom initialization. The default constructor then takes care of initializing the parent Error from the argument it is given</p>
            <a href="posts/4">Post 4</a>
            <a href="posts/5">Post 5</a>
            <p><a href="/" data-link>Home</a>
            </p>`;
  }
}
