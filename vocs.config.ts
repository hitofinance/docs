import { defineConfig } from 'vocs'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeMathML from '@daiji256/rehype-mathml';



export default defineConfig({
  title: 'Hito Finance',
  iconUrl: '/icon.svg',
  topNav: [
    { text: 'Website', link: 'https://hitofinance.xyz' },
    { text: 'Launch App', link: 'https://app.hitofinance.xyz' },
    { text: 'AI LSaaS', link: 'https://stafi.io' },
  ],
  description: 'Hito Finance is a premier liquid staking protocol on HyperEVM, powered by StaFi AI LSaaS and Maximum Extractable Value (MEV) strategies.',
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/hitofinance',
    },
    {
      icon: 'x',
      link: 'https://github.com/hitofinance',
    },
  ],

  theme: {
    accentColor: '#132F3F',
  },

  markdown: {
    code: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }, remarkPlugins: [
      remarkMath, remarkParse, remarkRehype
    ], rehypePlugins: [
      rehypeMathML, rehypeStringify
    ],
  },

  sidebar: [
    {
      text: 'Intoduction',
      collapsed: false,
      items: [
        {
          text: 'HyperLiquid',
          link: '/introduction/hyperliquid',
        },
        {
          text: 'Hito Finance',
          collapsed: false,
          link: '/introduction/hitofinance',
          items: [
            {
              text: 'Introduction',
              link: '/introduction/hitofinance',
            },
            {
              text: 'Liquid Staking Token(hHYPE)',
              link: '/introduction/hhype',
            },
          ],
        },
      ],
    },
    {
      text: 'Technical',
      collapsed: false,
      items: [
        {
          text: 'Overview',
          link: '/technical/architecture',
        },
        {
          text: 'AI LSaaS',
          link: '/technical/lsaas',
        },
        {
          text: 'MEV',
          link: '/technical/mev',
        },
        {
          text: 'Contract',
          link: '/technical/contract',
        },
      ],
    },
    {
      text: 'Guide',
      collapsed: false,
      items: [
        {
          text: 'Stake Hype with Hito',
          link: '/guide/stake',
        },
      ],
    },
  ],
})
