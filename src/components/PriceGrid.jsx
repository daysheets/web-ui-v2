import styles from "../styles";
import { checkmark } from "../assets";
import { PopupButton } from "react-calendly";
import HelpContent from "./HelpContent";
import React, { useState } from "react";

const PriceGrid = () => {
  const tier1Stripe = "https://buy.stripe.com/6oE9CN0GOajC50YeVn";
  const tier2Stripe = "https://buy.stripe.com/eVaeX7gFMgI08da14y";
  const tier3Stripe = "https://buy.stripe.com/14k5mx4X42Ra50Y8x1";

  const [currTierSelected, setCurrTierSelected] = useState(0);

  const handleTierClick = (tier) => {
    setCurrTierSelected(tier);
  };

  const tiers = [
    {
      type: "base",
      usages: ["5 ($10 per additional)", "Unlimited", "1 editor per artist"],
      features: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      support: [true, false, false],
    },
    {
      type: "mid",
      usages: [
        "5 ($20 per additional)",
        "Unlimited",
        "Unlimited editors per artist",
      ],
      features: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      support: [true, true, false],
    },
    {
      type: "top",
      usages: [
        "5 ($10 per additional)",
        "Unlimited",
        "Unlimited editors per artist",
      ],
      features: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      support: [true, true, true],
    },
  ];

  const usages = [
    "Number of artists",
    "Mac & mobile viewers",
    "Team Collaboration",
  ];

  const baseTierUsages = [
    "5 ($10 per additional)",
    "Unlimited",
    "1 editor per artist",
  ];

  const midTierUsages = [
    "5 ($20 per additional)",
    "Unlimited",
    "Unlimited editors per artist",
  ];

  const topTierUsages = [
    "5 ($10 per additional)",
    "Unlimited",
    "Unlimited editors per artist",
  ];

  const features = [
    "Create tours on iOS",
    "Edit tours on iOS",
    "Offline editing",
    "Calculated drive times",
    "Add flights",
    "Add hotels",
    "Unlimited notes",
    "Manage guest lists",
    "Ground transfers",
    "Create personnel groups",
    "Group & individual visibility",
    "Import flights",
    "Private notes",
    "Export day sheets",
    "Export flight grids",
    "Export rooming lists",
    "Export transfer grids",
    "AI Box Office",
  ];

  const baseFeatures = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const midFeatures = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
  ];

  const topFeatures = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];

  const support = ["Email & Text Support", "Phone Support", "Priority Support"];

  const baseSupport = [true, false, false];

  const midSupport = [true, true, false];

  const topSupport = [true, true, true];

  return (
    <div className={`${styles.sectionBoxFlat} w-full`}>
      <div className={`${styles.contentBoxBig} pb-[64px]`}>
        <div className={`${styles.h2Box} flex flex-col items-center`}>
          <div
            className={` bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto`}
          >
            <h5>Introductory Pricing</h5>
          </div>
          <h2
            className={`${styles.h2} pb-[32px] text-center text-darkBlue pt-[32px]`}
          >
            An affordable solution, for vans to stadiums.
          </h2>
          <div className="flex flex-col items-center">
            <p className={`text-darkBlue ${styles.h2Body}`}>
              Daysheets introduces a new era of efficiency to tour management,
              with easy tabbing, speedy imports, and time-saving shortcuts.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[16px] mx-auto justify-center px-8 lg:px-0">
          {/* Starter */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Starter</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4">
              <span className="text-2xl">$</span>
              <h2 class="text-darkBlue text-6xl">45</h2>
              <div className="flex flex-col">
                <span className="text-lg">per</span>
                <span className="text-lg">month</span>
              </div>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg font-body">
              Sleek and simple for intimate or self managed tours.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">1 Admin</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Create & edit from mobile</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Daily Notes</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Add flights & hotels</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Manage Guest Lists</p>
              </div>
            </div>

            <a href={tier1Stripe} className={`${styles.button}`}>
              Get Started
            </a>
          </div>

          {/* Essentials */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Essentials</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4 w-full">
              <span className="text-2xl">$</span>
              <h2 class="text-darkBlue text-6xl">99</h2>
              <div className="flex flex-col">
                <span className="text-lg">per</span>
                <span className="text-lg">month</span>
              </div>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg font-body">
              Robust and flexible, perfect for teams touring in a bus.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">2 admins</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Unlimited sections of notes</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Export PDF day sheets</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />
                <p class="text-darkBlue">Maintain travel profiles</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Phone & Text Support</p>
              </div>
            </div>

            <a href={tier2Stripe} className={`${styles.button}`}>
              Get Started
            </a>
          </div>

          {/* Advanced */}
          <div class="flex flex-col grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div class="bg-dimBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white">
              <h5 className="text-blue">Advanced</h5>
            </div>

            <div class="flex flex-row mt-8 gap-2 items-center justify-center pb-4">
              <span className="text-2xl">$</span>
              <h2 class="text-darkBlue text-6xl">199</h2>
              <div className="flex flex-col">
                <span className="text-lg">per</span>
                <span className="text-lg">month</span>
              </div>
            </div>

            <div class="h-[2px] w-full bg-gray rounded-full"></div>

            <p className="pt-[16px] text-center text-lg font-body">
              Expansive & intuitive for bus and truck touring.
            </p>

            <div class="flex flex-col gap-2 mt-8 pb-[32px] w-full">
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Unlimited admins</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Groups & Visibility</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Import & request travel profiles</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Import flights</p>
              </div>
              <div class="flex flex-row gap-4">
                {" "}
                <img src={checkmark} alt="Checkmark" />{" "}
                <p class="text-darkBlue">Priority Support</p>
              </div>
            </div>

            <a href={tier3Stripe} className={`${styles.button}`}>
              Get Started
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[16px] mx-auto justify-center px-8 lg:px-0 pt-[16px]">
          {/* Ultimate */}
          <div className="flex flex-col lg:flex-row grow items-center bg-white px-[32px] py-[32px] rounded-lg  border-[2px] border-gray w-full">
            <div>
              <div className="flex flex-row mt-8 gap-2 pb-4 w-full">
                <h2 className="text-darkBlue text-4xl">
                  Enterprise: Custom solutions for Large-Scale Tours
                </h2>
              </div>

              <div>
                <p className="pt-[16px] text-lg  font-body">
                  Best for Managers, Tour Directors, or teams over 30.{" "}
                </p>

                <p className="pt-[16px] text-lg  font-body">
                  Unlock the full potential of your enterprise with our
                  comprehensive suite of solutions tailored for large-scale
                  operations. Our Enterprise Plan is designed to meet the unique
                  needs of businesses seeking robust and scalable solutions.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-8 pb-[32px] w-full">
                <p className="text-darkBlue">Whats included</p>
                <div className="flex flex-row gap-4">
                  {" "}
                  <img src={checkmark} alt="Checkmark" />{" "}
                  <p className="text-darkBlue">Unlimited admins</p>
                </div>
                <div className="flex flex-row gap-4">
                  {" "}
                  <img src={checkmark} alt="Checkmark" />{" "}
                  <p className="text-darkBlue">60+ mobile users</p>
                </div>
                <div className="flex flex-row gap-4">
                  {" "}
                  <img src={checkmark} alt="Checkmark" />{" "}
                  <p className="text-darkBlue">Prioritized feature requests</p>
                </div>
                <div className="flex flex-row gap-4">
                  {" "}
                  <img src={checkmark} alt="Checkmark" />{" "}
                  <p className="text-darkBlue">Setup assistance</p>
                </div>
                <div className="flex flex-row gap-4">
                  {" "}
                  <img src={checkmark} alt="Checkmark" />{" "}
                  <p className="text-darkBlue">24/7 Support</p>
                </div>
              </div>
            </div>

            <div className="w-[2px] hidden lg:block h-full bg-gray rounded-full mx-[32px]"></div>

            <div className="min-w-[150px] flex items-center justify-center">
              <PopupButton
                url="https://calendly.com/benatdaysheets/30"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Chat with us"
                className={`${styles.button}`}
              />
            </div>
          </div>
        </div>

        {/* Lg page table */}
        <div className="lg:flex hidden flex-col gap-[16px] pt-[16px]">
          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Usage</h3>
              </div>
              <div>
                {usages.map((usage, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Base Tier</h3>
              </div>
              <div>
                {baseTierUsages.map((usage, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Mid Tier</h3>
              </div>
              <div>
                {midTierUsages.map((usage, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Top Tier</h3>
              </div>
              <div>
                {topTierUsages.map((usage, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Feature</h3>
              </div>
              <div>
                {features.map((feature, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {baseFeatures.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500  my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {midFeatures.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500  my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {topFeatures.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500  my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Support</h3>
              </div>
              <div>
                {support.map((support, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {support}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {baseSupport.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500 my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {midSupport.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500  my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {topSupport.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500  my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Default page table */}

        <div className="flex lg:hidden flex-col gap-[16px] pt-[16px] mx-[16px]">
          <div className="flex">
            <div
              onClick={() => handleTierClick(0)}
              className={`p-[24px] cursor-pointer w-full flex justify-center  ${
                currTierSelected === 0 ? "border-b" : "border-none"
              }`}
            >
              Base
            </div>
            <div
              onClick={() => handleTierClick(1)}
              className={`p-[24px] cursor-pointer w-full flex justify-center ${
                currTierSelected === 1 ? "border-b" : "border-none"
              }`}
            >
              Mid
            </div>
            <div
              onClick={() => handleTierClick(2)}
              className={`p-[24px] cursor-pointer w-full flex justify-center  ${
                currTierSelected === 2 ? "border-b" : "border-none"
              }`}
            >
              Top
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Usage</h3>
              </div>
              <div>
                {usages.map((usage, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {tiers[currTierSelected].usages.map((usage, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Feature</h3>
              </div>
              <div>
                {features.map((feature, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {tiers[currTierSelected].features.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500  my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <div className="border-b">
                <h3 className="my-2 font-bold">Support</h3>
              </div>
              <div>
                {support.map((support, index) => (
                  <div className="border-b">
                    <p key={index} className="my-2">
                      {support}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-b h-full"></div>
              <div>
                {tiers[currTierSelected].support.map((feature, index) => (
                  <div key={index} className="border-b">
                    {feature ? (
                      <h3 className="text-green-500 my-2">✓</h3>
                    ) : (
                      <h3 className="text-red-500 my-2">—</h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HelpContent />
    </div>
  );
};

export default PriceGrid;
