/* eslint-disable no-console */
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {OfferData, SingleOffer} from '../../types/types';

type OfferCardListProprs = {
    offerData: OfferData,
    cityCoords:Array<number>
}

export default function MainMap({offerData, cityCoords}:OfferCardListProprs):JSX.Element {
  console.log(cityCoords);
  return (
    <div style={{filter: 'grayscale(1)', height: '100%'}}>
      <YMaps style={{height: '400px', width: '100%'}}>
        <div style={{height: '100%', width: '100%'}}>
          <Map height={'100%'} width={'100%'}  state={{ center: cityCoords, zoom: 11 }}>
            {offerData.map((props:SingleOffer) => <Placemark key={props.id} singleOffer={props} geometry={[props.location.latitude, props.location.longitude]} />)}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

