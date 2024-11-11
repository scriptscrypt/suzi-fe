import { cn } from "@/lib/utils";
import useNavStore from "@/stores/useNavStore";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
const TopNav = () => {
  const { currentStep, setCurrentStep, setShowModal } = useNavStore();

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="flex gap-4 w-[100%] mx-auto max-w-6xl items-center justify-between rounded-2xl bg-gradient-to-t from-blue-100 to-white p-6">
        <button className="text-gray-400" onClick={handleBack}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-1 w-2 md:w-16 rounded",
              currentStep >= 1 ? "bg-primary" : "bg-gray-200"
            )}
          />
          <div
            className={cn(
              "flex h-6 md:h-8 w-6 md:w-8 items-center justify-center rounded-full text-sm",
              currentStep >= 1
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200"
            )}
          >
            1
          </div>
          <div
            className={cn(
              "h-1 w-2 md:w-16 rounded",
              currentStep >= 2 ? "bg-primary" : "bg-gray-200"
            )}
          />
          <div
            className={cn(
              "flex h-6 md:h-8 w-6 md:w-8 items-center justify-center rounded-full text-sm",
              currentStep >= 2
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200"
            )}
          >
            2
          </div>
          <div
            className={cn(
              "h-1 w-2 md:w-16 rounded",
              currentStep >= 3 ? "bg-primary" : "bg-gray-200"
            )}
          />
          <div
            className={cn(
              "flex h-6 md:h-8 w-6 md:w-8 items-center justify-center rounded-full text-sm",
              currentStep >= 3
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200"
            )}
          >
            3
          </div>
          <div
            className={cn(
              "h-1 w-2 md:w-16 rounded",
              currentStep >= 4 ? "bg-primary" : "bg-gray-200"
            )}
          />
          <div
            className={cn(
              "flex h-6 md:h-8 w-6 md:w-8 items-center justify-center rounded-full text-sm",
              currentStep >= 4
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200"
            )}
          >
            4
          </div>
        </div>
        <Button
          variant="secondary"
          className="bg-gradient-to-b from-[#AEBFCE] to-[#243F62] text-white"
        >
          Dashboard
        </Button>
      </div>
    </>
  );
};

export default TopNav;
