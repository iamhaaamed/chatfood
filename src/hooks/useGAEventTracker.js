import ReactGA from "react-ga";

const useGAEventTracker = (category = "category") => {
  const trackEvent = (action = "action", label = "label") => {
    ReactGA.event({
      category,
      action,
      label: JSON.stringify(label),
    });
  };

  return trackEvent;
};

export default useGAEventTracker;
