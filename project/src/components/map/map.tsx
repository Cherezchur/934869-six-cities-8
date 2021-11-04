import {useRef, useEffect} from 'react';
import leaflet, { LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { Location, Locations } from '../../types/offers';
import { City } from '../../types/city';

type MapProps = {
  location: City,
  points: Locations,
  selectedPoint: Location | undefined;
}

function Map({location, points, selectedPoint}: MapProps) {
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap(mapRef, location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerGroup = new LayerGroup();

  useEffect(() => {
    map?.setView(location);
  }, [map, location]);

  const markerGroup = new LayerGroup();

  useEffect(() => {
    map?.setView(location);
  }, [map, location]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.latitude === selectedPoint.latitude ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerGroup);
      });
      markerGroup.addTo(map);
    }
    return () => {markerGroup.remove();};
  }, [map, points, selectedPoint]);

  return (
    <section className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;

