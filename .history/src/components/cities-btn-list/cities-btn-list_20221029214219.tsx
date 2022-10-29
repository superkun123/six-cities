/* eslint-disable no-console */


export default function CityBtnList():JSX.Element {
  const citiesData = ['Paris', 'Colonge', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const getName = function (this:HTMLElement) {
    console.log(this);

  };
  return (
    <ul className="locations__list tabs__list">
      {citiesData.map((name) => (
        <li key={name} className="locations__item">
          <button onClick={() => getName()} className="locations__item-link tabs__item item--active">
            <span>{name}</span>
          </button>
        </li>))}
    </ul>
  );
}
