import { create } from "zustand";

type NavStore = {
  showLanding: boolean;
  setShowLanding: (show: boolean) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  // Reset function to return to initial state
  reset: () => void;
};

const useNavStore = create<NavStore>((set) => ({
  // Initial state
  showLanding: true,
  currentStep: 0,
  showModal: false,

  // Actions
  setShowLanding: (show) => set({ showLanding: show }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setShowModal: (show) => set({ showModal: show }),

  // Reset function
  reset: () =>
    set({
      showLanding: true,
      currentStep: 0,
      showModal: false,
    }),
}));

export default useNavStore;
