import { Button } from "@/components/ui/button";
import useNav from "@/hooks/useNav";
import Image from "next/image";
import sendLogo from "@/assets/svgs/sendLogo.svg";
import bg1 from "@/assets/bg1.png";
import suziLanding from "@/assets/suziLanding.png";
import useNavStore from "@/stores/useNavStore";

const LandingComp = () => {
  const { setCurrentStep } = useNavStore();

  const handleLaunch = () => {
    setCurrentStep(1);
  };

  return (
    <div className="flex min-h-screen w-full text-black">
      {/* Main container */}
      <div className="flex flex-1 flex-col">
        {/* Background wrapper */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <div className="relative h-full w-full">
            <Image
              src={bg1}
              alt="Background with Suzi character"
              fill
              className="object-cover w-[80%] h-full blur-md"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="flex my-auto mx-32 z-20">
          <div className="flex flex-1 flex-col w-full max-w-2xl p-0 bg-white rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between max-w-3xl bg-gradient-to-t rounded-2xl from-blue-100 to-white p-6 rounded-4xl">
              <div className="flex items-center gap-2">
                <Image
                  src={sendLogo}
                  alt="Suzi logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-gray-600/10 p-1"
                />
                <span className="text-2xl font-semibold text-gray-600">
                  Suzi by Send
                </span>
              </div>

              <Button
                variant="secondary"
                className="bg-gradient-to-b from-[#AEBFCE] to-[#243F62] text-white"
              >
                Dashboard
              </Button>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col lg:flex-row gap-12 mt-24 p-6">
              {/* Left column */}
              <div className="flex flex-col flex-1 gap-8">
                <div>
                  <h1 className="font-cursive text-7xl font-bold text-gray-800">
                    <span className="font-mogra">Agents </span>
                    on
                    <br />
                    Solana
                  </h1>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#AED2FF] p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
                      1
                    </div>
                    <p className="text-lg text-gray-600/80">
                      Add your tg alpha chat
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#FFC2F8]  p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
                      2
                    </div>
                    <p className="text-lg text-gray-600/80">
                      Add USDC and set spending limit
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#BAFFA8]  p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
                      3
                    </div>
                    <p className="text-lg text-gray-600/80">
                      Let the agent trade! ^*^
                    </p>
                  </div>
                </div>

                {/* CTA section */}
                <div className="flex flex-col gap-4">
                  <Button
                    onClick={handleLaunch}
                    className="h-12 w-full rounded-xl bg-black text-lg font-semibold text-white hover:bg-black/80"
                  >
                    Launch Now!
                  </Button>
                  <p className="text-sm text-gray-600/60">
                    0.5 SOL will be deducted to create your suzi
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600/60">
                    <div className="flex items-center justify-center rounded-full bg-gray-600/10 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <p>
                      This is the start of an experiment, process at your own
                      risk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column - Suzi Image */}
          <div className="flex flex-1 items-center justify-center">
            <Image
              src={suziLanding}
              alt="Suzi logo"
              width={400}
              height={400}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingComp;
