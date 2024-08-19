import React, { useState, useEffect } from "react";
import styles from "../styles";

const ProTierForm = () => {
  const [currCycle, setCycle] = useState("monthly"); // 'monthly' or 'annual'
  const [currMembers, setCurrMembers] = useState(100);
  const [currFlights, setCurrFlights] = useState(100);
  const [currCalFeeds, setCurrCalFeeds] = useState(2);
  const [price, setPrice] = useState(199);

  let additionalMembers = currMembers - 100;
  let additionalFlights = (currFlights - 100) / 100;
  let additionalCalFeeds = currCalFeeds - 2;

  const handleAddMembers = (num) => {
    setCurrMembers(num + 25);
  };

  const handleRemoveMembers = (num) => {
    setCurrMembers(num - 25);
  };

  const handleAddFlights = (num) => {
    setCurrFlights(num + 100);
  };

  const handleRemoveFlights = (num) => {
    setCurrFlights(num - 100);
  };

  const handleAddCal = (num) => {
    setCurrCalFeeds(num + 1);
  };

  const handleRemoveCal = (num) => {
    setCurrCalFeeds(num - 1);
  };

  useEffect(() => {
    const basePrice = currCycle === "annual" ? 199 * 0.9 : 199; // 10% discount for annual billing
    const additionalMembersCost = currMembers > 100 ? additionalMembers * 2 : 0;
    const additionalFlightCost = currFlights > 100 ? additionalFlights * 45 : 0;
    const additionalCalCost = currCalFeeds > 2 ? additionalCalFeeds * 10 : 0;
    setPrice(
      basePrice +
        additionalMembersCost +
        additionalFlightCost +
        additionalCalCost
    );
  }, [currMembers, currFlights, currCalFeeds, currCycle]);

  return (
    <div>
      <div className={`${styles.sectionBoxFlat} w-full text-darkBlue`}>
        <div className={`${styles.contentBoxSmall} flex flex-col`}>
          <div className="flex justify-end mb-4">
            <h1 className="text-2xl font-semibold pb-4 w-full">Pro Plan</h1>
            <div className="flex items-center gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={currCycle === "monthly"}
                  onChange={() => setCycle("monthly")}
                  className="mr-2"
                />
                Monthly
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={currCycle === "annual"}
                  onChange={() => setCycle("annual")}
                  className="mr-2"
                />
                Annual
              </label>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-grow flex-col gap-4">
              <div className="border-b-2 border-gray pb-2 w-full text-left h-[40px]">
                <div
                  className="tooltip tooltip-right"
                  data-tip="You can add 25 mobile users at a time."
                >
                  <p className="border-b-2 border-gray border-dashed">
                    Mac & Mobile Viewers
                  </p>
                </div>
              </div>

              <div className="border-b-2 border-gray pb-2 w-full text-left h-[40px]">
                <div
                  className="tooltip tooltip-right"
                  data-tip="You can add 25 mobile users at a time."
                >
                  <p className="border-b-2 border-gray border-dashed">
                    AI Flight Parsing
                  </p>
                </div>
              </div>
              <div className="border-b-2 pb-2 w-full text-left h-[40px]">
                <div
                  className="tooltip tooltip-right"
                  data-tip="You can add 25 mobile users at a time."
                >
                  <p className="border-b-2 border-gray border-dashed">
                    Personalized iCal Feeds
                  </p>
                </div>
              </div>
              <p className="font-bold  pb-2">Price</p>
            </div>
            <div className="flex flex-grow flex-col gap-4">
              <div className="flex border-b-2 border-gray pb-2 h-[40px]">
                <p className="w-[64px]">{currMembers}</p>
                <div className="flex gap-1 ">
                  <button
                    onClick={() => handleAddMembers(currMembers)}
                    className="bg-blue text-white rounded-full h-[24px] w-[24px]"
                  >
                    +
                  </button>
                  <button
                    onClick={
                      currMembers > 100
                        ? () => handleRemoveMembers(currMembers)
                        : null
                    }
                    className={` h-[24px] w-[24px] rounded-full ${
                      currMembers === 100
                        ? "bg-gray text-white cursor-not-allowed"
                        : "bg-blue text-white"
                    }`}
                    disabled={currMembers === 100}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex border-b-2 border-gray pb-2 h-[40px]">
                <p className="w-[64px]">{currFlights}</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleAddFlights(currFlights)}
                    className="bg-blue text-white rounded-full h-[24px] w-[24px] "
                  >
                    +
                  </button>
                  <button
                    onClick={
                      currFlights > 100
                        ? () => handleRemoveFlights(currFlights)
                        : null
                    }
                    className={`h-[24px] w-[24px] rounded-full ${
                      currFlights === 100
                        ? "bg-gray text-white cursor-not-allowed"
                        : "bg-blue text-white"
                    }`}
                    disabled={currFlights === 100}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex border-b-2 pb-2 h-[40px]">
                <p className="w-[64px]">{currCalFeeds}</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleAddCal(currCalFeeds)}
                    className="bg-blue text-white rounded-full h-[24px] w-[24px] "
                  >
                    +
                  </button>
                  <button
                    onClick={
                      currCalFeeds > 2
                        ? () => handleRemoveCal(currCalFeeds)
                        : null
                    }
                    className={` h-[24px] w-[24px] rounded-full ${
                      currCalFeeds === 2
                        ? "bg-gray text-white cursor-not-allowed"
                        : "bg-blue text-white"
                    }`}
                    disabled={currCalFeeds === 2}
                  >
                    -
                  </button>
                </div>
              </div>
              <p className=" pb-2">{`$${price}/mo`}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="w-full min-w-[64px] border-b-2 border-gray pb-2 h-[40px]">
                {additionalMembers > 0 ? `+$${additionalMembers * 2}` : null}
              </p>
              <p className="w-full min-w-[64px] border-b-2 border-gray pb-2 h-[40px]">
                {additionalFlights > 0 ? `+$${additionalFlights * 45}` : null}
              </p>
              <p className="w-full min-w-[64px] border-b-2  pb-2 h-[40px]">
                {additionalCalFeeds > 0 ? `+$${additionalCalFeeds * 10}` : null}
              </p>
              <div className="w-full min-w-[64px] pb-2 h-[40px]"></div>
            </div>
          </div>

          <button className="mt-[32px] bg-blue text-white h-[40px] rounded-md w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProTierForm;
