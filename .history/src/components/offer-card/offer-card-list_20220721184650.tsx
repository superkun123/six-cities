import OfferCard from '../offer-card/offer-card';
import {OfferData, SingleOffer} from '../../types/types';

type OfferCardListProprs = {
    offerData: OfferData,
}

export default function OfferCardList({offerData}:OfferCardListProprs):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerData.map((props:SingleOffer) => <OfferCard key={props.id} singleOffer={props} />)}
    </div>
  );
}
