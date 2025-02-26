import { Metadata } from 'next';

export const meta: Metadata = {
  metadataBase: new URL('https://fairco.in/'),
  title: 'FAIRCoin Explorer (⊜)',
  description:
    'Explore FAIRCoin (FAIR), a sustainable and fair cryptocurrency. Track your transactions, wallet, and network info in real time.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'FAIRCoin Explorer (⊜)',
    type: 'website',
    siteName: 'fairco.in',
    description:
      'Explore transactions and accounts on the FAIRCoin blockchain. A sustainable and fair cryptocurrency for everyone.',
    images: '/FairCoinExplorer-OG.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@faircoin',
    creator: '@faircoin',
    images: '/FairCoinExplorer-OG.jpg',
  },
  icons: {
    icon: {
      type: 'image/svg+xml',
      url: '/static/faircoin-favicon.svg',
    },
  },
};

export const DEFAULT_TITLE = 'FAIRCoin Explorer (⊜)';

export const DEFAULT_DESCRIPTION =
  'Explore FAIRCoin (FAIR), a sustainable and fair cryptocurrency. Track your transactions, wallet, and network info in real time.';

export const DEFAULT_KEYWORDS = [
  'FAIRCoin',
  'FAIR',
  '⊜',
  'FAIRWallet',
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

export const DEFAULT_MAINNET_SERVER = 'https://api.fairco.in';
export const DEFAULT_TESTNET_SERVER = 'https://api.testnet.fairco.in';
