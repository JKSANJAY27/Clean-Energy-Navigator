"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

interface Place {
  name: string;
  formatted: string;
}

const NearbyResources = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            setError(`Geolocation error: ${error.message}`);
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getLocation();
  }, []); // Run only once on component mount

  useEffect(() => {
    const fetchNearbyResources = async () => {
      if (!location.latitude || !location.longitude) {
        return; // Don't fetch if location is not yet available
      }

      setLoading(true);
      setError(null);

      const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;  // Read from environment variable

      // Check if API Key was set
      if (!apiKey) {
        setError('Please set the GEOAPIFY_API_KEY environment variable.');
        setLoading(false);
        return;
      }
      var config = {
        method: 'get',
        url: `https://api.geoapify.com/v2/places?categories=commercial.shopping_mall&filter=circle:${location.longitude},${location.latitude},10000&limit=10&apiKey=${apiKey}`,
        headers: {}
      };

      try {
        const response = await axios(config);

        setPlaces(response.data.features.map((feature: any) => ({
          name: feature.properties.name || 'Unknown',
          formatted: feature.properties.formatted || 'No address available',
        })));
      } catch (err: any) {
        setError(`Failed to fetch nearby resources: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNearbyResources();
  }, [location.latitude, location.longitude]); // Run only when location changes

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Nearby Renewable Energy Resources</h3>
      {loading && <div className="text-gray-600">Loading nearby resources...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      {places.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700">
          {places.map((place, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">{place.name}</span> - {place.formatted}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-600">No resources found nearby.</div>
      )}
    </div>
  );
};

export default NearbyResources;