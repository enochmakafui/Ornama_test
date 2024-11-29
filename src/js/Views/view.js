export default class View {
  _rootElement = document.getElementById('root');

  render() {
    const markup = this._generateMarkup();
    this._clear();
    this._rootElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._rootElement.innerHTML = '';
  }
}
