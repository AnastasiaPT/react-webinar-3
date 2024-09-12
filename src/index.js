import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    { code: 1, title: 'Название элемента', num: 0 },
    { code: 2, title: 'Некий объект', num: 0 },
    { code: 3, title: 'Заголовок', num: 0  },
    { code: 4, title: 'Очень длинное название элемента из семи слов', num: 0  },
    { code: 5, title: 'Запись', num: 0  },
    { code: 6, title: 'Шестая запись', num: 0  },
    { code: 7, title: 'Седьмая запись', num: 0  },
  ],
  rq_c: 7,
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
