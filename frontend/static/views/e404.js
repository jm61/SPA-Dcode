import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Error 404");
  }

  async getHtml() {
    return `
            <h1> Error 404, what are doing here!</h1>
            <a href="/">go to Dashboard</a>`;
  }
}