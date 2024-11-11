import React, { useState } from "react";

const useNav = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return {
    showLanding,
    setShowLanding,

    currentStep,
    setCurrentStep,

    showModal,
    setShowModal
  };
};

export default useNav;