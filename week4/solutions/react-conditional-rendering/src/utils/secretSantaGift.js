const possibleGifts = [
  "teddy",
  "sock kit",
  "gift card",
  "mug",
  "hand cream",
  "ferrari"
];

const secretSantaGift = (gift) => {
  return Math.random() > 0.5
    ? gift
    : possibleGifts[Math.floor(Math.random() * possibleGifts.length)];
};

export default secretSantaGift;
