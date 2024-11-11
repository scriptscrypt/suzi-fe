"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CircleDollarSign, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/bg1.png";
import suziImg1 from "../assets/suzi1.png";
import suziImg3 from "../assets/suzi3.png";
import ConfirmModal from "./modals/ConfirmModal";
import LandingComp from "./Landing/LandingComp";
import useNavStore from "@/stores/useNavStore";
import TopNav from "./SuziConfig/TopNav";

// Animation variants
const pageTransition = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
  },
};

const inputAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const AnimatedButton = motion(Button);

export function SuziComp() {
  const { currentStep, setCurrentStep, setShowModal } = useNavStore();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [botToken, setBotToken] = useState("");
  const [funds, setFunds] = useState("");
  const [spendingLimit, setSpendingLimit] = useState("");
  const [goWild, setGoWild] = useState(false);

  const colors = [
    { name: "red", class: "bg-red-500" },
    { name: "yellow", class: "bg-yellow-400" },
    { name: "green", class: "bg-green-500" },
    { name: "blue", class: "bg-blue-500" },
  ];

  const characters = ["trump", "toly", "mother", "elon"];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSpankMe = () => {
    setShowModal(true);
  };

  return (
    <AnimatePresence mode="wait">
      {currentStep === 0 && <LandingComp />}
      {currentStep !== 0 && (
        <motion.div
          className="min-h-screen p-4 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={bg1}
            alt="Background image"
            width={400}
            height={400}
            className="absolute -z-10 inset-0 h-full w-full object-cover blur-md"
          />
          <motion.div
            className="flex flex-col justify-center bg-white rounded-3xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TopNav />
            <Card className="mx-auto mt-0 max-w-6xl rounded-3xl rounded-t-none overflow-hidden">
              <motion.div
                className="p-8"
                variants={pageTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      className="grid grid-cols-1 gap-8 lg:grid-cols-2"
                      variants={pageTransition}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div
                        className="space-y-8"
                        variants={cardAnimation}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h1 className="font-mogra text-4xl font-bold">
                            Create your Suzi
                          </h1>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <h2 className="text-xl font-medium">
                            name your suzi
                          </h2>
                          <Input
                            className="rounded-lg border-dashed"
                            placeholder="name"
                          />
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <h2 className="text-xl font-medium">pick a color</h2>
                          <div className="flex gap-4 rounded-lg border border-dashed p-4">
                            {colors.map((color, index) => (
                              <motion.button
                                key={color.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                  "h-12 w-12 rounded-lg",
                                  color.class,
                                  selectedColor === color.name &&
                                    "ring-2 ring-primary ring-offset-2"
                                )}
                                onClick={() => setSelectedColor(color.name)}
                              />
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <h2 className="text-xl font-medium">
                            pick a character
                          </h2>
                          <div className="grid grid-cols-4 gap-4 rounded-lg border border-dashed p-4">
                            {characters.map((character, index) => (
                              <motion.button
                                key={character}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                  "aspect-square rounded-lg bg-gray-100 p-2",
                                  selectedCharacter === character &&
                                    "ring-2 ring-primary ring-offset-2"
                                )}
                                onClick={() => setSelectedCharacter(character)}
                              >
                                <span className="text-sm">{character}</span>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>

                        <AnimatedButton
                          onClick={handleNext}
                          className="w-24"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Next &gt;
                        </AnimatedButton>
                      </motion.div>

                      <motion.div
                        className="space-y-4"
                        variants={imageAnimation}
                      >
                        <motion.div
                          className="overflow-hidden rounded-2xl bg-gray-100"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src={suziImg1}
                            alt="Suzi character"
                            width={600}
                            height={600}
                            className="w-full"
                          />
                        </motion.div>
                        <motion.div
                          className="rounded-xl bg-white p-4 shadow-lg"
                          variants={cardAnimation}
                        >
                          <p className="text-gray-600">
                            suzi is like mother, she&apos;s gorgeous, deep in
                            crypto and deep in... you know what
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      className="grid grid-cols-1 gap-8 lg:grid-cols-2"
                      variants={pageTransition}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div
                        className="space-y-8"
                        variants={cardAnimation}
                      >
                        <motion.h1
                          className="font-mogra text-4xl font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Set Up API
                          <br />
                          &amp; Group
                        </motion.h1>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl font-medium">
                              Set your bot api token
                            </h2>
                            <motion.button
                              className="text-gray-400 hover:text-gray-600"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <HelpCircle className="h-5 w-5" />
                            </motion.button>
                          </div>
                          <Input
                            className="rounded-lg border-dashed font-mono"
                            placeholder="xoxb-1234567..."
                            value={botToken}
                            onChange={(e) => setBotToken(e.target.value)}
                          />
                          <AnimatedButton
                            className="w-full"
                            variant="default"
                            onClick={handleSpankMe}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Spank me
                          </AnimatedButton>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <h2 className="text-xl font-medium">
                            Add to a group
                          </h2>
                          <motion.div
                            className="rounded-lg border border-dashed p-4"
                            whileHover={{ scale: 1.01 }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="h-16 w-16 rounded-full bg-gray-100"></div>
                              <div>
                                <h3 className="font-medium">Group Name</h3>
                                <p className="text-sm text-gray-500">
                                  100 members
                                </p>
                              </div>
                            </div>
                          </motion.div>
                          <AnimatedButton
                            className="w-full"
                            variant="default"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Add
                          </AnimatedButton>
                        </motion.div>

                        <div className="flex gap-4">
                          <AnimatedButton
                            onClick={handleBack}
                            variant="outline"
                            className="w-24"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            &lt; Back
                          </AnimatedButton>
                          <AnimatedButton
                            onClick={handleNext}
                            className="w-24"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Next &gt;
                          </AnimatedButton>
                        </div>
                      </motion.div>

                      <motion.div
                        className="rounded-xl bg-gray-900 p-6 text-sm font-mono text-cyan-400"
                        variants={cardAnimation}
                      >
                        <motion.div
                          className="mb-4 text-lg text-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          Logs
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {/* Log content */}
                          <p>&lt;Agent 1 • tool using upgrade terminal&gt;</p>
                          <p>help</p>
                          <p>&lt;Agent 2 • World Interface&gt;</p>
                          <p>exOS v0.5</p>
                          <p>---</p>
                          <p>Command: help</p>
                          <p>Time: 10/20/2024, 2:48:33 PM</p>
                          <p>---</p>
                          <p>~~ MESSAGE OF THE DAY ~~</p>
                          <p>
                            NEW! &apos;twitter home&apos; and &apos;twitter
                            mentions&apos; commands are now generally available.
                          </p>
                          <p>
                            NEW! &apos;search query&apos; and &apos;web
                            open&apos; commands are now generally available.
                          </p>
                          <p>---</p>
                          <p>Global Help</p>
                          <p>
                            Available environments: twitter, exo, meme, search,
                            sydney, web
                          </p>
                          <p>
                            Use &quot;&lt;environment&gt; help&quot; for
                            environment-specific commands.
                          </p>
                          <p>---</p>
                          <p>
                            Type &apos;help&apos; for available commands.
                            IMPORTANT: YOU SOMETIMES GET STUCK ON ONE THREAD OF
                            THOUGHT. REMEMBER TO RETURN BACK TO TWITTER, ALWAYS.
                            twitter post is your friend. Its your best friend.
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      className="grid grid-cols-1 gap-8 lg:grid-cols-2"
                      variants={pageTransition}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div
                        className="space-y-8"
                        variants={cardAnimation}
                      >
                        <motion.h1
                          className="font-mogra text-4xl font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Suzi
                        </motion.h1>
                        <motion.h1
                          className="font-mogra text-4xl font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Set Budget
                          <br />
                          &amp; Limits
                        </motion.h1>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl font-medium">
                              Send funds to Suzi
                            </h2>
                            <motion.button
                              className="text-gray-400 hover:text-gray-600"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <HelpCircle className="h-5 w-5" />
                            </motion.button>
                          </div>
                          <div className="relative">
                            <Input
                              className="rounded-lg border-dashed pl-8"
                              placeholder="$$$$"
                              value={funds}
                              onChange={(e) => setFunds(e.target.value)}
                            />
                            <CircleDollarSign className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          variants={inputAnimation}
                        >
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl font-medium">
                              Set spending limit
                            </h2>
                            <motion.button
                              className="text-gray-400 hover:text-gray-600"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <HelpCircle className="h-5 w-5" />
                            </motion.button>
                          </div>
                          <div className="relative">
                            <Input
                              className="rounded-lg border-dashed pl-8"
                              placeholder="$$$$"
                              value={spendingLimit}
                              onChange={(e) => setSpendingLimit(e.target.value)}
                            />
                            <CircleDollarSign className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-center space-x-2"
                          variants={inputAnimation}
                        >
                          <Checkbox
                            id="wild"
                            checked={goWild}
                            onCheckedChange={(checked) =>
                              setGoWild(checked as boolean)
                            }
                          />
                          <label
                            htmlFor="wild"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Go wild? 0w0
                          </label>
                        </motion.div>

                        <AnimatedButton
                          className="w-full"
                          variant="default"
                          onClick={handleSpankMe}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Spank me
                        </AnimatedButton>

                        <div className="flex gap-4">
                          <AnimatedButton
                            onClick={handleBack}
                            variant="outline"
                            className="w-24"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            &lt; Back
                          </AnimatedButton>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative"
                        variants={imageAnimation}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Image
                            src={suziImg3}
                            alt="Suzi character with SEND shirt"
                            width={600}
                            height={800}
                            className="w-full"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute left-4 top-1/2 max-w-[300px] rounded-xl bg-white p-4 shadow-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-gray-600">
                            We have created a smart account wallet for you and
                            your agent, mother Suzi. You can set a spending
                            limit for her or ask her to go wild! ^^
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <ConfirmModal />
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
