import { utils } from 'ethers';

const DAY = 3600 * 24;
const MONTH = DAY * 30;
const QUARTER = MONTH * 3;

export = {
  TGE: '2022-10-13T10:00:00Z',
  pools: [
    {
      name: 'team & advisors & reserve',
      TGEpercentage: 0,
      vestingCliff: 12 * MONTH + DAY,
      vestingPeriod: MONTH,
      vestingCount: 25,
      accounts: [
        {
          address: '0xa982D3Cf68A71084113dAb8cD8983ec13aAcd57c',
          total: 50000000,
        },
        {
          address: '0x7eB642831F88e406CA76A39F98988613CC6E7500',
          total: 50000000,
        },
        {
          address: '0x598f74E9e9104ece6f9140577872895eEdC44230',
          total: 15000000,
        },
        {
          address: '0xCf4Ef4291dcCE10E3c241A4a8238299F987c794e',
          total: 59000000,
        },
      ],
    },
    {
      name: 'marketing',
      TGEpercentage: 0,
      vestingCliff: DAY,
      vestingPeriod: MONTH,
      vestingCount: 7,
      accounts: [
        {
          address: '0xbbb2905D5e918887d06a11c7ef150aBB65126b43',
          total: 25000000,
        },
        {
          address: '0x2b16Ae2027D08b49fEa85b1B1Fe1f0fcDa16D22E',
          total: 25000000,
        },
        {
          address: '0x1fbD1f88f8b2947db7D4E7a0F059701286410dF3',
          total: 25000000,
        },
      ],
    },
    {
      name: 'earn & staking',
      TGEpercentage: 0,
      vestingCliff: DAY,
      vestingPeriod: MONTH,
      vestingCount: 37,
      accounts: [
        {
          address: '0x46604c4f6214dFbE0bab5c21247B3ADE06Bcc94a',
          total: 150000000,
        },
      ],
    },
  ],
  upfront: [],
};
