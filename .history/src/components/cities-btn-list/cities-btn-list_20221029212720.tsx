import { useState } from 'react';


export default function CityBtnList():JSX.Element {
  const [cityName, setCityName] = useState('Amsterdam');
  const citiesData = ['Paris', 'Colonge', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const getName = function (this:any) {
    const name:string = this.text();
    setCityName(name);
  };
  return (
    <ul className="locations__list tabs__list">
      {citiesData.map((name) => (
        <li key={name} className="locations__item">
          <button onClick={() => getName()} className="locations__item-link tabs__item item--active">
            <span>{name}</span>
          </button>
          <p>{cityName}</p>
        </li>))}
    </ul>
  );
}
