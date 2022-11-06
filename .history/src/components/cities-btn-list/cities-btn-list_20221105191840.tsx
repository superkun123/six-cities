import { useDispatch} from 'react-redux';
import { CityChange } from '../../store/actions';


export default function CityBtnList():JSX.Element {
  const citiesData = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const dispatch = useDispatch();
  const getName = function (value:any) {
    const name:string = value;
    dispatch(CityChange(name));
  };
  return (
    <ul className="locations__list tabs__list">
      {citiesData.map((name) => (
        <li key={name} className="locations__item">
          <button onClick={(e) => getName(e.currentTarget.textContent)} className="locations__item-link tabs__item item--active">            <span>{name}</span>
          </button>
        </li>))}
    </ul>
  );
}
