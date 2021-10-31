import {useEffect, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import useMap from './useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import { Location } from '../../types/offers';
import { City } from '../../types/city';

type MapProps = {
  location: City,
  points: Location[],
}

function CurrentMap({location, points}: MapProps) {
  const mapRef = useRef(null);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  console.log();

  useEffect(() => {
    const instance = new Map(mapRef.current, {
      center: {
        lat: location.lat,
        lng: location.lng,
      },
      zoom: location.zoom,
    });

    const layer = new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    );
    instance.addLayer(layer);

    points.forEach((point) => {
      leaflet
        .marker({
          lat: point.latitude,
          lng: point.longitude,
        }, {
          icon: defaultCustomIcon,
        })
        .addTo(instance);
    });
  }, [points, location]);

  return (
    <section className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default CurrentMap;
