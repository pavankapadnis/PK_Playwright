class GooglePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });
  }
}

module.exports = GooglePage;
