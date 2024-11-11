"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import useNav from "@/hooks/useNav";
import { cn } from "@/lib/utils";
import { ArrowLeft, CircleDollarSign, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import bg1 from "../assets/bg1.png";
import suziImg1 from "../assets/suzi1.png";
import suziImg3 from "../assets/suzi3.png";
import ConfirmModal from "./modals/ConfirmModal";
import LandingComp from "./Landing/LandingComp";
import useNavStore from "@/stores/useNavStore";
import TopNav from "./SuziConfig/TopNav";

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
    <>
      {currentStep === 0 && <LandingComp />}
      {currentStep !== 0 && (
        <div className="min-h-screen p-4 flex items-center justify-center">
          <Image
            src={bg1}
            alt="Background image"
            width={400}
            height={400}
            className="absolute -z-10 inset-0 h-full w-full object-cover blur-md"
          />
          <div className="flex flex-col justify-center bg-white rounded-3xl">
            <TopNav />
            <Card className="mx-auto mt-0 max-w-6xl rounded-3xl rounded-t-none ">
              <div className="p-8">
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                      <div>
                        <h1 className="font-mogra text-4xl font-bold">
                          Create your Suzi
                        </h1>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-xl font-medium">name your suzi</h2>
                        <Input
                          className="rounded-lg border-dashed"
                          placeholder="name"
                        />
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-xl font-medium">pick a color</h2>
                        <div className="flex gap-4 rounded-lg border border-dashed p-4">
                          {colors.map((color) => (
                            <button
                              key={color.name}
                              className={cn(
                                "h-12 w-12 rounded-lg transition-transform hover:scale-110",
                                color.class,
                                selectedColor === color.name &&
                                  "ring-2 ring-primary ring-offset-2"
                              )}
                              onClick={() => setSelectedColor(color.name)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-xl font-medium">
                          pick a character
                        </h2>
                        <div className="grid grid-cols-4 gap-4 rounded-lg border border-dashed p-4">
                          {characters.map((character) => (
                            <button
                              key={character}
                              className={cn(
                                "aspect-square rounded-lg bg-gray-100 p-2 transition-transform hover:scale-105",
                                selectedCharacter === character &&
                                  "ring-2 ring-primary ring-offset-2"
                              )}
                              onClick={() => setSelectedCharacter(character)}
                            >
                              <span className="text-sm">{character}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <Button onClick={handleNext} className="w-24">
                        Next &gt;
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div className="overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                          src={suziImg1}
                          alt="Suzi character"
                          width={600}
                          height={600}
                          className="w-full"
                        />
                      </div>
                      <div className="rounded-xl bg-white p-4 shadow-lg">
                        <p className="text-gray-600">
                          suzi is like mother, she&apos;s gorgeous, deep in
                          crypto and deep in... you know what
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                      <div>
                        <h1 className="font-mogra text-4xl font-bold">
                          Set Up API
                          <br />
                          &amp; Group
                        </h1>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-medium">
                            Set your bot api token
                          </h2>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="h-5 w-5" />
                          </button>
                        </div>
                        <Input
                          className="rounded-lg border-dashed font-mono"
                          placeholder="xoxb-1234567..."
                          value={botToken}
                          onChange={(e) => setBotToken(e.target.value)}
                        />
                        <Button
                          className="w-full"
                          variant="default"
                          onClick={handleSpankMe}
                        >
                          Spank me
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-xl font-medium">Add to a group</h2>
                        <div className="rounded-lg border border-dashed p-4">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-gray-100"></div>
                            <div>
                              <h3 className="font-medium">Group Name</h3>
                              <p className="text-sm text-gray-500">
                                100 members
                              </p>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full" variant="default">
                          Add
                        </Button>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          onClick={handleBack}
                          variant="outline"
                          className="w-24"
                        >
                          &lt; Back
                        </Button>
                        <Button onClick={handleNext} className="w-24">
                          Next &gt;
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-xl bg-gray-900 p-6 text-sm font-mono text-cyan-400">
                      <div className="mb-4 text-lg text-white">Logs</div>
                      <div className="space-y-2">
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
                          NEW! &apos;search query&apos; and &apos;web open&apos;
                          commands are now generally available.
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
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                      <div>
                        <h1 className="font-mogra text-4xl font-bold">
                          Set Budget
                          <br />
                          &amp; Limits
                        </h1>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-medium">
                            Send funds to Suzi
                          </h2>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="h-5 w-5" />
                          </button>
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
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-medium">
                            Set spending limit
                          </h2>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="h-5 w-5" />
                          </button>
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
                      </div>

                      <div className="flex items-center space-x-2">
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
                      </div>

                      <Button
                        className="w-full"
                        variant="default"
                        onClick={handleSpankMe}
                      >
                        Spank me
                      </Button>

                      <div className="flex gap-4">
                        <Button
                          onClick={handleBack}
                          variant="outline"
                          className="w-24"
                        >
                          &lt; Back
                        </Button>
                        {/* <Button onClick={handleNext} className="w-24">
                  Next &gt;
                </Button> */}
                      </div>
                    </div>

                    <div className="relative">
                      <Image
                        src={suziImg3}
                        alt="Suzi character with SEND shirt"
                        width={600}
                        height={800}
                        className="w-full"
                      />
                      <div className="absolute left-4 top-1/2 max-w-[300px] rounded-xl bg-white p-4 shadow-lg">
                        <p className="text-gray-600">
                          We have created a smart account wallet for you and
                          your agent, mother Suzi. You can set a spending limit
                          for her or ask her to go wild! ^^
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <ConfirmModal />
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
