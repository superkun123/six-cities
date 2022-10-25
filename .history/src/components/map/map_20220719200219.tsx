import {TileLayer} from 'react-leaflet';

export default function MainMap():JSX.Element {
  return (
    <section id="map" className="cities__map map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </section>
  );
}

