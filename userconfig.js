// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Chennai",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Mail",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com/",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Outlook",
              url: "https://outlook.office365.com/mail/",
              icon: "mail-opened",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "Socials",
          links: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: palette.peach,
            },

            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.green,
            },
            {
              name: "Telegram",
              url: "https://web.telegram.org/",
              icon: "brand-telegram",
              icon_color: palette.peach,
            },
            {
              name: "Discord",
              url: "https://discord.com/",
              icon: "brand-discord",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "Figma",
              url: "https://www.figma.com/",
              icon: "brand-figma",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Academia",
          links: [
            {
              name: "lms",
              url: "https://lms.snuchennai.edu.in/login/index.php",
              icon: "building-bank",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "Pod",
              url: "https://snuchennai.pod.ai/",
              icon: "letter-p",
              icon_color: palette.red,
            },
            {
              name: "Talentely",
              url: "https://system.talentely.com/academy/courses",
              icon: "file-star",
              icon_color: palette.blue,
            },
            {
              name: "Nptel",
              url: "https://swayam.gov.in/mycourses",
              icon: "letter-n",
              icon_color: palette.blue,
            },
            {
              name: "Unstop",
              url: "https://unstop.com/u/dhanush_007",
              icon: "circle-letter-u",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "AI Tools",
          links: [
            {
              name: "ChatGPT",
              url: "https://chatgpt.com/",
              icon: "robot",
              icon_color: palette.green,
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com/app?hl=en-IN",
              icon: "hexagon-letter-g",
              icon_color: palette.peach,
            },
            {
              name: "Perplexity",
              url: "https://www.perplexity.ai/",
              icon: "square-letter-p",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Productivity",
          links: [
            {
              name: "Todoist",
              url: "https://todoist.com/app/today",
              icon: "circle-check",
              icon_color: palette.green,
            },
            {
              name: "Google Calendar",
              url: "https://calendar.google.com/calendar/u/0/r/week",
              icon: "calendar-plus",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Others",
          links: [
            {
              name: "Dhanush S M",
              url: "https://dhanushsm.vercel.app/",
              icon: "hexagon-letter-d",
              icon_color: palette.blue,
            },
            {
              name: "Canva",
              url: "https://www.canva.com/",
              icon: "letter-c",
              icon_color: palette.peach,
            },
            {
              name: "Google Meet",
              url: "https://workspace.google.com/products/meet/",
              icon: "brand-google",
              icon_color: palette.red,
            },
            {
              name: "Tiny Wow",
              url: "https://tinywow.com/",
              icon: "transform",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
