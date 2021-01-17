import React from "react";
import ReactGA from "react-ga";

const useGAEventTracker = (type = "type") => {
  const trackEvent = (action = "action", label = "label") => {
    ReactGA.event({
      type,
      action,
      label,
    });
  };

  return trackEvent;
};

export default useGAEventTracker;
