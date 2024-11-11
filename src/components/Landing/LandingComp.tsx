// import { Button } from "@/components/ui/button";
// import useNav from "@/hooks/useNav";
// import Image from "next/image";
// import sendLogo from "@/assets/svgs/sendLogo.svg";
// import bg1 from "@/assets/bg1.png";
// import suziLanding from "@/assets/suziLanding.png";
// import useNavStore from "@/stores/useNavStore";

// const LandingComp = () => {
//   const { setCurrentStep } = useNavStore();

//   const handleLaunch = () => {
//     setCurrentStep(1);
//   };

//   return (
//     <div className="flex min-h-screen w-full text-black">
//       {/* Main container */}
//       <div className="flex flex-1 flex-col">
//         {/* Background wrapper */}
//         <div className="absolute inset-0 z-10 w-full h-full">
//           <div className="relative h-full w-full">
//             <Image
//               src={bg1}
//               alt="Background with Suzi character"
//               fill
//               className="object-cover w-[80%] h-full blur-md"
//             />
//           </div>
//         </div>

//         {/* Content container */}
//         <div className="flex flex-col md:flex-row m-4 md:my-auto lg:mx-32 z-20">
//           <div className="flex flex-wrap flex-1 flex-col w-full max-w-2xl p-0 bg-white rounded-3xl">
//             {/* Header */}
//             <div className="flex items-center justify-between max-w-3xl bg-gradient-to-t rounded-2xl from-blue-100 to-white p-6 rounded-4xl">
//               <span className="flex gap-1 items-center text-2xl font-semibold text-gray-600">
//                 <span className="">Suzi</span>
//                 <span className="">by</span>

//                 <div className="flex items-center gap-2">
//                   <Image
//                     src={sendLogo}
//                     alt="Suzi logo"
//                     width={40}
//                     height={40}
//                     className="rounded-full bg-gray-600/10 p-1"
//                   />
//                   Send
//                 </div>
//               </span>

//               <Button
//                 variant="secondary"
//                 className="bg-gradient-to-b from-[#AEBFCE] to-[#243F62] text-white"
//               >
//                 Dashboard
//               </Button>
//             </div>

//             {/* Main content */}
//             <div className="flex flex-1 flex-col lg:flex-row gap-12 mt-12 p-6">
//               {/* Left column */}
//               <div className="flex flex-col flex-1 gap-8">
//                 <div>
//                   <h1 className="font-cursive text-7xl font-bold text-gray-800">
//                     <span className="font-mogra">Agents </span>
//                     on
//                     <br />
//                     Solana
//                   </h1>
//                 </div>

//                 {/* Steps */}
//                 <div className="flex flex-col gap-4">
//                   <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#AED2FF] p-4">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
//                       1
//                     </div>
//                     <p className="text-lg text-gray-600/80">
//                       Add your tg alpha chat
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#FFC2F8]  p-4">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
//                       2
//                     </div>
//                     <p className="text-lg text-gray-600/80">
//                       Add USDC and set spending limit
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#BAFFA8]  p-4">
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
//                       3
//                     </div>
//                     <p className="text-lg text-gray-600/80">
//                       Let the agent trade! ^*^
//                     </p>
//                   </div>
//                 </div>

//                 {/* CTA section */}
//                 <div className="flex flex-col gap-4">
//                   <Button
//                     onClick={handleLaunch}
//                     className="h-12 w-full rounded-xl bg-black text-lg font-semibold text-white hover:bg-black/80"
//                   >
//                     Launch Now!
//                   </Button>
//                   <p className="text-sm text-gray-600/60">
//                     0.5 SOL will be deducted to create your suzi
//                   </p>
//                   <div className="flex items-center gap-2 text-sm text-gray-600/60">
//                     <div className="flex items-center justify-center rounded-full bg-gray-600/10 p-1">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="h-4 w-4"
//                       >
//                         <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
//                         <path d="M12 9v4" />
//                         <path d="M12 17h.01" />
//                       </svg>
//                     </div>
//                     <p>
//                       This is the start of an experiment, process at your own
//                       risk
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Right column - Suzi Image */}
//           <div className="flex flex-1 items-center justify-center">
//             <Image
//               src={suziLanding}
//               alt="Suzi logo"
//               width={400}
//               height={400}
//               className="h-full w-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingComp;

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import sendLogo from "@/assets/svgs/sendLogo.svg";
import bg1 from "@/assets/bg1.png";
import suziLanding from "@/assets/suziLanding.png";
import useNavStore from "@/stores/useNavStore";
import { motion } from "framer-motion";

const LandingComp = () => {
  const { setCurrentStep } = useNavStore();

  const handleLaunch = () => {
    setCurrentStep(1);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex min-h-screen w-full text-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main container */}
      <div className="flex flex-1 flex-col">
        {/* Background wrapper */}
        <motion.div
          className="absolute inset-0 z-10 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-full w-full">
            <Image
              src={bg1}
              alt="Background with Suzi character"
              fill
              className="object-cover w-[80%] h-full blur-md"
            />
          </div>
        </motion.div>

        {/* Content container */}
        <div className="flex flex-col md:flex-row m-4 md:my-auto lg:mx-32 z-20">
          <motion.div
            className="flex flex-wrap flex-1 flex-col w-full max-w-2xl p-0 bg-white rounded-3xl"
            variants={itemVariants}
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between max-w-3xl bg-gradient-to-t rounded-2xl from-blue-100 to-white p-6 rounded-4xl"
              variants={itemVariants}
            >
              <motion.span
                className="flex gap-1 items-center text-2xl font-semibold text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span>Suzi</span>
                <span>by</span>

                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={sendLogo}
                    alt="Suzi logo"
                    width={40}
                    height={40}
                    className="rounded-full bg-gray-600/10 p-1"
                  />
                  Send
                </motion.div>
              </motion.span>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  className="bg-gradient-to-b from-[#AEBFCE] to-[#243F62] text-white"
                >
                  Dashboard
                </Button>
              </motion.div>
            </motion.div>

            {/* Main content */}
            <div className="flex flex-1 flex-col lg:flex-row gap-12 mt-12 p-6">
              {/* Left column */}
              <motion.div
                className="flex flex-col flex-1 gap-8"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h1 className="font-cursive text-7xl font-bold text-gray-800">
                    <span className="font-mogra">Agents </span>
                    on
                    <br />
                    Solana
                  </h1>
                </motion.div>

                {/* Steps */}
                <div className="flex flex-col gap-4">
                  {[
                    {
                      border: "border-[#AED2FF]",
                      text: "Add your tg alpha chat",
                    },
                    {
                      border: "border-[#FFC2F8]",
                      text: "Add USDC and set spending limit",
                    },
                    {
                      border: "border-[#BAFFA8]",
                      text: "Let the agent trade! ^*^",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 rounded-xl border border-dashed ${step.border} p-4`}
                      variants={stepVariants}
                      custom={index}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/10 text-gray-600">
                        {index + 1}
                      </div>
                      <p className="text-lg text-gray-600/80">{step.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA section */}
                <motion.div
                  className="flex flex-col gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleLaunch}
                      className="h-12 w-full rounded-xl bg-black text-lg font-semibold text-white hover:bg-black/80"
                    >
                      Launch Now!
                    </Button>
                  </motion.div>
                  <motion.p
                    className="text-sm text-gray-600/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    0.5 SOL will be deducted to create your suzi
                  </motion.p>
                  <motion.div
                    className="flex items-center gap-2 text-sm text-gray-600/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
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
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Suzi Image */}
          <motion.div
            className="flex flex-1 items-center justify-center"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={suziLanding}
              alt="Suzi logo"
              width={400}
              height={400}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingComp;
