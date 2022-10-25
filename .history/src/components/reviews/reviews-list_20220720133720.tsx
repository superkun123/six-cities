import FavoritesCard from '../favorites-card/favorites-card';
import {OfferData, SingleOffer} from '../../types/types';

type FavoritesCardListProprs = {
    offerData: OfferData,
}

export default function ReviewsList({offerData}:FavoritesCardListProprs):JSX.Element {
  return (
    <ul className="reviews__list">
      {offerData.map((props:SingleOffer) => <FavoritesCard key={props.id} singleOffer={props} />)}
    </ul>
  );
}
