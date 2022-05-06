const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Aliens EVO";
const description = "New generation of Aliens ready to invade the Metaverse";
const baseUri = "ipfs://QmVeUJWRbFxVceQcZPd6LQajBLq1ojKDS4tcWDsaZ2KAwN";

const solanaMetadata = {
  symbol: "EVO",
  seller_fee_basis_points: 500, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://aliens-evo.xyz",
  creators: [
    {
      address: "0x89fB60e754E800bD6E74Efc0919b627bB169c643",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Body" },
      { name: "Antennas" },
      { name: "Horns" },
      { name: "Halo" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 920,
  height: 929,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  external_url: "https://aliens-evo.xyz", // Replace with your website or remove this line if you do not have one.
};
const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
