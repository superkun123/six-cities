const citiesData = ['Paris', 'Colonge', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export default function CityBtnList():JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {citiesData.map((name) => (
        <li key={name} className="locations__item">
          <a className="locations__item-link tabs__item item--active" href="#">
            <span>{name}</span>
          </a>
        </li>))}
    </ul>
  );
}
