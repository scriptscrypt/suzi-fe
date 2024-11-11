import useNav from "@/hooks/useNav";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { Check } from "lucide-react";
import React from "react";

const ConfirmModal = () => {
  const { showModal, setShowModal } = useNav();
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="max-w-md rounded-2xl p-0">
        <div className="relative flex flex-col items-center justify-center space-y-4 bg-gradient-to-b from-blue-100 to-white p-6 text-center">
          <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-blue-100 to-transparent" />
          <div className="relative z-10 rounded-full bg-blue-100 p-3">
            <div className="rounded-full bg-blue-500 p-2">
              <Check className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="relative z-10 space-y-2">
            <h2 className="text-2xl font-bold">
              <span className="font-cursive text-blue-500">Mother Suzi</span> is
              <br />
              ready for action!
            </h2>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
