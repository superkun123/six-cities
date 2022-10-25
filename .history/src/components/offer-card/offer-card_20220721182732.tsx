import { useState } from 'react';
import { SingleOffer } from '../../types/types';
import { AppRoute}   from '../../utils/const/const';
import {Link} from 'react-router-dom';

type offerCardProprs = {
  singleOffer: SingleOffer,
}


const isPremium = function (classtype:string) {
  if (classtype === 'Premium') {
    return true;
  }
};


export default function OfferCard({singleOffer}:offerCardProprs):JSX.Element {
  const [isHover, setIsHover] = useState(false);
  return (
    <article className="cities__place-card place-card">
      {isPremium(singleOffer.class) &&
        <div className="place-card__mark">
          <span>{singleOffer.class}</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`../offer/${singleOffer.id}`} state={singleOffer.id}>
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img className="place-card__image" src={singleOffer.image} width="260" height="200" alt="Place" />
          </div>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{singleOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '93%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>
            {singleOffer.title}
          </Link>
        </h2>
        <p className="place-card__type">{singleOffer.type}</p>
        {isHover && (
          <div>
          Hovered
          </div>
        )}
      </div>
    </article>
  );
}
