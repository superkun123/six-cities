import OfferCardList from '../offer-card/offer-card-list';
import { OfferData } from '../../types/types';
import Header from '../header/header';
import MainMap from '../map/map';
import { useDispatch, useSelector } from 'react-redux';
import { CityChange } from '../../store/actions';
import { selectCount } from '../../store/reducer';
import CityBtnList from '../cities-btn-list/cities-btn-list';


type MainScreenProps = {
  placesCount: number,
  offerData: OfferData,
}


export default function MainScreen(props: MainScreenProps ):JSX.Element {
  const {placesCount, offerData} = props;
  const dispatch = useDispatch();
  const currentCity = 'Рим';
  const cityName = useSelector(selectCount);
  return (
    <div className="page page--gray page--main">
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <button onClick={() => dispatch(CityChange(currentCity))}>Амстердам</button>
        <div className="tabs">
          <section className="locations container">
            <CityBtnList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferCardList offerData={offerData} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className='cities__map map'>
                <MainMap offerData={offerData} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
