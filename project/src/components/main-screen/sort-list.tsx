import { useState } from 'react';
import { SortItems } from '../../const';

type SortListProps = {
  onSortItemClick: (sortItem: string) => void;
  currentSort: string;
}

function SortList({onSortItemClick, currentSort}: SortListProps):JSX.Element {

  const [isSortListOpened, toogleSortListOpend] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => toogleSortListOpend(!isSortListOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={isSortListOpened ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        {
          SortItems.map((sortItem) => {
            const keyValue = sortItem;
            return (
              <li
                key={keyValue}
                className={sortItem === currentSort ? 'places__option places__option--active' : 'places__option'}
                tabIndex={0}
                onClick={() => onSortItemClick(sortItem)}
              >
                {sortItem}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

export default SortList;
