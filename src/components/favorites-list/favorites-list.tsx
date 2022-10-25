import FavoritesCard from '../favorites-card/favorites-card';
import {OfferData, SingleOffer} from '../../types/types';

type FavoritesCardListProprs = {
    offerData: OfferData,
}

export default function FavoritesCardList({offerData}:FavoritesCardListProprs):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerData.map((props:SingleOffer) => <FavoritesCard key={props.id} singleOffer={props} />)}
    </div>
  );
}
