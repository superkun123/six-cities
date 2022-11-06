import OfferCard from '../offer-card/offer-card';
import {OfferData, SingleOffer} from '../../types/types';

type OfferCardListProprs = {
    data: OfferData,
}

export default function OfferCardList({data}:OfferCardListProprs):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {data.map((props:SingleOffer) => <OfferCard key={props.id} singleOffer={props} />)}
    </div>
  );
}
