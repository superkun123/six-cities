/* eslint-disable no-console */
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {OfferData, SingleOffer} from '../../types/types';

type OfferCardListProprs = {
    offerData: OfferData,
}

export default function MainMap({offerData}:OfferCardListProprs):JSX.Element {
  const getCityCoords = [offerData[0].city.location.latitude, offerData[0].city.location.longitude];
  console.log(getCityCoords);
  return (
    <div style={{filter: 'grayscale(1)', height: '100%'}}>
      <YMaps style={{height: '100%', width: '100%'}}>
        <div style={{height: '100%', width: '100%'}}>
          <Map height={'100%'} width={'100%'}  defaultState={{ center: getCityCoords? getCityCoords : [12, 12], zoom: 11 }}>
            {offerData.map((props:SingleOffer) => <Placemark key={props.id} singleOffer={props} geometry={[props.location.latitude, props.location.longitude]} />)}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

