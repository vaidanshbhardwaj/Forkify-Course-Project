import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _message = '';
  _errorMessage =
    'No Bookmarks yet, make one by clicking the bookmark icon on your favourite recipes';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
