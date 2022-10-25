import { YMaps, Map } from 'react-yandex-maps';

export default function MainMap():JSX.Element {
  return (
    <section  className="cities__map map">
      <YMaps style={{height: '100%'}}>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </YMaps>
    </section>
  );
}
