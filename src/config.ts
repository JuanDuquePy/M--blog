import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Juan Duque',
  subtitle: 'Demo Site',
  lang: 'es',
  themeColor: {
    hue: 250,
    fixed: false,
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.webp',
    position: 'center',
    credit: {
      enable: true,
      text: 'Castillo De San Felipe En Cartagena Colombia',
      url: 'https://www.pexels.com/es-es/foto/el-historico-castillo-de-san-felipe-en-cartagena-colombia-29906581/'
    }
  },
  toc: {
    enable: true,
    depth: 2
  },
  favicon: [
     {
       src: '/favicon/logo.ico',  
       theme: 'light',
       sizes: '32x32',
     }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/JuanDuquePy',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.webp',
  name: 'Juan Duque',
  bio: 'Simplemente me gusta compartir mi opnión y conocimientos.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/JuanDuquePy',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
