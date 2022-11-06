/* eslint-disable no-console */
import { useLocation } from 'react-router-dom';
import { OfferData, SingleOffer} from '../../types/types';
import { commentGet } from '../../mocks/commentGet';
import  ReviewForm  from '../review_form/review-form';
import Header from '../header/header';
import ReviewsList from '../reviews/reviews-list';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import MainMap from '../map/map';
// import { nearby } from '../../mocks/nearby';
// import OfferCardList from '../offer-card/offer-card-list';


type PropertyScreenProps = {
  offerData: OfferData
}

type FetchType = {
  data: SingleOffer,
}


export default function Property({offerData}:PropertyScreenProps):JSX.Element {
  const location = useLocation();
  const state = location.state as number;
  const data = state;
  const [Fetchdata, setData] = useState(offerData[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://8.react.pages.academy/six-cities/hotels/${data}`) as FetchType;
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(`data: ${data}`);
  console.log(Fetchdata);


  const reviewsCont = commentGet.length;
  const rating = `${Fetchdata.rating * 20}%`;


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {Fetchdata.images.map((img) => (
                <div  key={`image${img}`} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="Photo studio" />
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{Fetchdata.type}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {Fetchdata.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: rating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value"> {Fetchdata?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Entire place
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {Fetchdata.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {Fetchdata.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{Fetchdata.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {Fetchdata?.goods.map((good) => (
                    <li key={`goods:${good}`} className="property__inside-item">
                      {good}
                    </li>),
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="../img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCont}</span></h2>
                <ReviewsList commentGet={commentGet}  />
                <ReviewForm></ReviewForm>
              </section>
            </div>
          </div>
          {/* <section className="property__map map">
            <MainMap offerData={nearby}  />
          </section> */}
        </section>
        <div className="container">
          {/* <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferCardList offerData={nearby}></OfferCardList>
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
}
