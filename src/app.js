import React, { useCallback, useState }  from 'react';
import List from './components/list';
import ListBasket from './components/list-basket';
import Controls from './components/controls';
import ControlsBasket from './components/controls-basket';
import ItogBasket from './components/itog-basket';
import Head from './components/head';
import PageLayout from './components/page-layout';
import ModalLayout from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;
  const items = store.getState().basket;
  const state = store.getState();
  const sum = store.getState().itog;
  const lengthBasket = store.getState().lenBasket;

  const [ModalOn, setModal] = useState(false);

  const callbacks = {
    
    ModalOn: useCallback(() => {
      setModal(true)
    }, [setModal]),

    ModalOff: useCallback(() => {
      setModal(false)
    }, [setModal]),

    addItem: useCallback((item) => {
      store.addItemBasket(item)
    }, [store]),

    deleteItem: useCallback((item) => {
      store.deleteItemBasket(item)
    }, [store]),

  };

  return (
    <>
      <PageLayout>
        <Head title="Магазин" />
        <Controls onAdd={callbacks.ModalOn} sum={sum} amount={lengthBasket}/>
        <List list={list} onAddItemBasket={callbacks.addItem} />
       {ModalOn &&
        <ModalLayout >
          <ControlsBasket onClose={callbacks.ModalOff} />
          <ListBasket list={items} onDeleteItemBasket={callbacks.deleteItem} />
          <ItogBasket sum={sum}/>
        </ModalLayout>}
      </PageLayout>
    </>
  );
}

export default App;
