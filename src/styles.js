const styles = {
  h1: "font-body text-4xl sm:text-5xl md:text-6xl font-semibold text-center tracking-tighter",
  h2: "font-body text-3xl sm:text-4xl md:text-5xl font-semibold leading-7 pb-[16px] tracking-[-.035em]",
  h3: "font-body text-2xl sm:text-3xl md:text-4xl font-semibold text-left pb-[16px]  leading-tight tracking-tight",
  h4: "font-body text-xl sm:text-2xl md:text-3xl font-normal text-left pb-[16px] tracking-tight",
  h5: "font-body text-2xl md:text-2xl font-semibold text-left leading-tight pb-[8px] tracking-tight",
  body: "font-body text-lg text-left pb-[8px] leading-7 text-darkBlue",
  h2Body: "font-body text-center text-xl leading-7",
  tag: "font-body text-md text-blue font-semibold text-left pb-[8px]",

  hidden: "opacity-0",

  navBox: "mx-auto",
  contentBoxSmall: "max-w-[800px] mx-auto",
  contentBox: "max-w-[1240px] mx-auto",
  contentBoxBig: "max-w-[1400px] mx-auto",
  contentBoxHuge: "max-w-[1600px] mx-auto",
  sectionBox: "mx-auto py-[64px] lg:py-[112px] overflow-hidden",
  sectionBoxFlat: "mx-auto pt-[64px] lg:pt-[112px]",
  sectionBoxSmall: "mx-auto py-[40px]",
  h2Box: "max-w-[800px] mx-auto pb-[64px]",
  h2BoxFlat: "max-w-[600px] mx-auto",
  h2BodyLeft: "text-left text-xl leading-7",

  checkmark: "pr-[8px] pb-[8px]",

  button:
    "rounded-md bg-blue px-3.5 py-[12px] text-sm font-medium text-white shadow-sm",
  buttonBlack:
    "rounded-md bg-white text-darkBlue border-[1px] px-3.5 py-[12px] text-sm font-medium shadow-sm",
  heroButton:
    "rounded-md bg-blue px-8 py-4 text-xl font-medium text-white shadow-sm text-center flex items-center justify-center border-[2px] border-navyBlue",
  heroButtonBlack:
    "rounded-md bg-white text-darkBlue border-[2px] px-8 py-4 text-xl font-medium shadow-sm",
  heroButtonWhite:
    "rounded-md bg-white text-blue px-8 py-4 text-xl font-medium shadow-sm",

  twoColBox:
    "flex flex-col pb-[96px] items-center lg:gap-[32px] lg:grid lg:grid-cols-2",
  threeColBox:
    "flex flex-col pb-[80px] items-center lg:gap-[32px] lg:grid lg:grid-cols-3 lg:grid-cols-[400px,300px,300px]",
};

export default styles;
