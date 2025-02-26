import { Metadata } from 'next';

export const meta: Metadata = {
  metadataBase: new URL('https://explorer.hiro.so/'),
  title: 'Stacks Explorer by Hiro',
  description:
    'Explore Stacks, the leading Bitcoin L2. See your transactions, wallet, and network info in real time',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'Stacks Explorer by Hiro',
    type: 'website',
    siteName: 'explorer.hiro.so',
    description:
      'Explore transactions and accounts on the Stacks blockchain. Clone any contract and experiment in your browser with the Explorer sandbox.',
    images: '/StacksExplorer-OG.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stacks',
    creator: '@stacks',
    images: '/StacksExplorer-OG.jpg',
  },
  icons: {
    icon: {
      type: 'image/svg+xml',
      url: '/static/favicon.png',
    },
  },
};

export const DEFAULT_TITLE = 'FairCoin Explorer';

export const DEFAULT_DESCRIPTION =
  'Explore FairCoin, a sustainable and fair cryptocurrency. See your transactions, wallet, and network info in real time';

export const DEFAULT_KEYWORDS = [
  'FairCoin',
  'Blockchain',
  'Explorer',
  'Cryptocurrency',
  'Sustainable',
  'Fair',
  'Transactions',
  'Blocks',
  'Network',
];

export const DEFAULT_REFRESH_INTERVAL = 1000;

export const DEFAULT_MAINNET_SERVER = 'https://api.faircoin.network';
export const DEFAULT_TESTNET_SERVER = 'https://api.testnet.faircoin.network';
