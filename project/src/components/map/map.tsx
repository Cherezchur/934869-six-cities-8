import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import { Location } from '../../types/offers';
import { City } from '../../types/city';

type MapProps = {
  city: City,
  points: Location[],
}

function Map({city, points}: MapProps) {
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap(mapRef, city);

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

  useEffect(() => {
    console.log(map);
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
