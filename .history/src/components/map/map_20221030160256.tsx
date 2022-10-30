/* eslint-disable no-console */
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {OfferData, SingleOffer} from '../../types/types';
import { useEffect } from 'react';

type OfferCardListProprs = {
    offerData: OfferData,
}

export default function MainMap({offerData}:OfferCardListProprs):JSX.Element {
  let getCityCoords = [offerData[0].city.location.latitude, offerData[0].city.location.longitude];
  useEffect(() => {
    // Update the document title using the browser API
    getCityCoords = [offerData[0].city.location.latitude, offerData[0].city.location.longitude];
  }, [offerData]);
  console.log(getCityCoords);
  return (
    <div style={{filter: 'grayscale(1)', height: '100%'}}>
      <YMaps style={{height: '100%', width: '100%'}}>
        <div style={{height: '100%', width: '100%'}}>
          <Map height={'100%'} width={'100%'}  defaultState={{ center: getCityCoords, zoom: 11 }}>
            {offerData.map((props:SingleOffer) => <Placemark key={props.id} singleOffer={props} geometry={[props.location.latitude, props.location.longitude]} />)}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

