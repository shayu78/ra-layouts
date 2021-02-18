import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardView/CardView';
import ListView from '../ListView/ListView';
import { products } from './products_data';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Store() {
  const iconViewsList = ["view_list", "view_module"];

  const idProducts = products.map((value) => {
    value.id = nanoid();  // используем nanoid для создания уникального ключа
    return value;
  });

  const [selectedViewIcon, setSelectedViewIcon] = useState('view_list');  // начальное значение - показываем карточки товаров

  const getViewIcon = () => setSelectedViewIcon((value) => value === iconViewsList[0]
    ? iconViewsList[1] : iconViewsList[0]);

  return (
    <>
      <IconSwitch icon={selectedViewIcon} onSwitch={getViewIcon} />
      {
        selectedViewIcon === iconViewsList[1]
          ? <ListView items={idProducts} />
          : <CardsView cards={idProducts} />
      }
    </>
  );
}
