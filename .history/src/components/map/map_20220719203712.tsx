import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function MainMap():JSX.Element {
  return (
    <section  className="cities__map map" style={{filter: 'grayscale(1)'}}>
      <YMaps style={{height: '100%'}}>
        <div style={{height: '100%'}}>
          <Map height={'100%'} width={'100%'}  defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </div>
      </YMaps>
    </section>
  );
}

