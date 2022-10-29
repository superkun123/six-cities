import { useState } from 'react';


export default function CityBtnList():JSX.Element {
  const [cityName, setCityName] = useState('Amsterdam');
  const citiesData = ['Paris', 'Colonge', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const getName = function (e):void {
    e.preventDefault();
    const name:string = this.textContent();
    setCityName(name);
  };
  return (
    <ul className="locations__list tabs__list">
      {citiesData.map((name) => (
        <li key={name} className="locations__item">
          <a onClick={getName()} className="locations__item-link tabs__item item--active" href="#">
            <span>{name}</span>
          </a>
        </li>))}
    </ul>
  );
}
