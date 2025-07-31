import { Os } from '@/model/model'

export const OSList: Os[] = [
  { val: 'Mac', file: 'chrome-mac.zip' },
  { val: 'Mac_Arm', file: 'chrome-mac.zip' },
  { val: 'Win_x64', file: 'chrome-win.zip' },
  { val: 'Win_Arm64', file: 'chrome-win.zip' },
  { val: 'Win', file: 'chrome-win32.zip' },
  { val: 'Linux_x64', file: 'chrome-linux.zip' },
  { val: 'Linux', file: 'chrome-linux.zip' },
  { val: 'Android', file: 'chrome-android.zip' },
  // { val: 'Arm', file: 'chrome-linux.zip' },
] as const

export const DownloadUrl = {
  example:
    'https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Mac/584585/',
  base: 'https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=',
} as const

export const Links = [
  {
    name: 'Official Version List',
    href: 'https://chromium.googlesource.com/chromium/src/+refs',
  },
  {
    name: 'Official Look Up Page (chromiumdash)',
    href: 'https://chromiumdash.appspot.com/',
  },
  {
    name: 'Official Download Page',
    href: 'https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html',
  },
] as const

export const Explains = [
  {
    title: 'Find a version',
    detail: 'use Browser Find, or search below.',
    short: '',
    href: '',
    steps: [],
  },
  {
    title: 'Chrome version vs Chromium version',
    detail:
      'MAJOR and MINOR track updates to the Google Chrome stable channel.',
    short: 'Chromium version MAJOR.MINOR is the same as Chrome version',
    href: 'https://www.chromium.org/developers/version-numbers#:~:text=MAJOR%20and%20MINOR%20track%20updates%20to%20the%20Google%20Chrome%20stable%20channel.',
    steps: [],
  },
  {
    title: 'Version vs Position',
    detail:
      'Version is what we common see, Position is a `Branch Base Position`',
    short: '',
    href: '',
    steps: [],
  },
  {
    title: 'Executable file, like',
    detail:
      'chrome-mac.zip, chrome-win.zip, chrome-win32.zip, chrome-linux.zip, chrome-android.zip ...',
    short: '',
    href: '',
    steps: [],
  },
  {
    title: 'How to map a Version to a Position url, steps',
    steps: [
      {
        text: 'get all versions',
        href: 'https://chromium.googlesource.com/chromium/src/+refs',
      },
      {
        text: 'find a position number by version (there is an api from https://chromiumdash.appspot.com/)',
        href: 'https://chromiumdash.appspot.com/fetch_version?version=91.0.4472.169',
      },
      {
        text: 'loop all positions of the OS(e.g. Mac), find out if exist in step2 data',
        href: 'https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Mac/',
      },
      {
        text: 'ignore some wrong data',
      },
      {
        text: 'sum all data, produce clickable links in this page',
      },
    ],
    detail: '',
    short: '',
    href: '',
  },
  {
    title: 'Resources',
    steps: [
      {
        text: 'Raw JSON files',
        href: 'https://github.com/vikyd/chromium-history-version-position',
      },
      {
        text: 'Current page source code',
        href: 'https://github.com/vikyd/download-chromium-history-version-src',
      },
      {
        text: 'Crawler',
        href: 'https://github.com/vikyd/chromium-history-version-crawler',
      },
      {
        text: 'Crawler Github Actions',
        href: 'https://github.com/vikyd/chromium-history-version-crawler/actions',
      },
    ],
    detail: '',
    short: '',
    href: '',
  },
] as const
