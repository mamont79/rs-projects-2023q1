import './sources.css';

class Sources {
  draw(data) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement; // вот как пример, через доп проверку if не получилось

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;
