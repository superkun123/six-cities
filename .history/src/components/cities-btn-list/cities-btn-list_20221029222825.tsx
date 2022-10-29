/* eslint-disable no-console */
import { useState } from 'react';


export default function CityBtnList(currentCityName:any):JSX.Element {
  const [cityName, setCityName] = useState('Amsterdam');
  const citiesData = ['Paris', 'Colonge', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const getName = function (value:any) {
    const name:string = value;
    console.log(value);
    setCityName(name);
  };
  currentCityName(cityName);
  return (
    <ul className="locations__list tabs__list">
      {citiesData.map((name) => (
        <li key={name} className="locations__item">
          <button onClick={(e) => getName(e.currentTarget.textContent)} className="locations__item-link tabs__item item--active">            <span>{name}</span>
          </button>
          <p>{cityName}</p>
        </li>))}
    </ul>
  );
}
