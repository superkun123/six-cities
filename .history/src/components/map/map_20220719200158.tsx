import { Map, TileLayer} from 'react-leaflet';

export default function MainMap():JSX.Element {
  return (
    <section id="map" className="cities__map map">
      <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </section>
  );
}

