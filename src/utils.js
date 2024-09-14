const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

export function WordEndings(num) {
  var  lastNumber = num - Math.trunc(num/10)*10;
  let MWord = ' раз '
  if ( num==12 || num==13 || num == 14 ) {
    return MWord;
  }
  var  lastNumber2 = num - Math.trunc(num/100)*100;
  if ( lastNumber2==12 || lastNumber2==13 || lastNumber2 == 14 ) {
    return MWord;
  }
  if ( num == 2 || num == 3 || num == 4 ) {
    MWord = ' раза '
    return MWord;
  }
  if (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
      MWord = ' раза ';
      return MWord;
  }

  return MWord;
}
