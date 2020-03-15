import React from "react";

export default function useUserLocation() {
  const [userLocation, setUserLocation] = React.useState(null);
  const [isSupport, setIsSupport] = React.useState(true);
  const [isAllowed, setIsAllowed] = React.useState(true);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          setIsAllowed(false);
        },
        {
          enableHighAccuracy: true
        }
      );
    } else {
      setIsSupport(false);
    }
  }, []);

  return { userLocation, isSupport, isAllowed };
}
