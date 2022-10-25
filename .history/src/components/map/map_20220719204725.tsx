import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {OfferData, SingleOffer} from '../../types/types';

type OfferCardListProprs = {
    offerData: OfferData,
}

export default function MainMap({offerData}:OfferCardListProprs):JSX.Element {
  return (
    <section  className="cities__map map" style={{filter: 'grayscale(1)'}}>
      <YMaps style={{height: '100%'}}>
        <div style={{height: '100%'}}>
          <Map height={'100%'} width={'100%'}  defaultState={{ center: [52.4150875, 4.8234417], zoom: 11 }}>
            {offerData.map((props:SingleOffer) => <Placemark key={props.id} geometry={[55.684758, 37.738521]} />)}
          </Map>
        </div>
      </YMaps>
    </section>
  );
}
