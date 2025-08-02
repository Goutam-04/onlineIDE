import { loader } from "@monaco-editor/react";

// Static theme imports
import Active4D from "monaco-themes/themes/Active4D.json";
import AllHallowsEve from "monaco-themes/themes/All Hallows Eve.json";
import Amy from "monaco-themes/themes/Amy.json";
import BirdsOfParadise from "monaco-themes/themes/Birds of Paradise.json";
import Blackboard from "monaco-themes/themes/Blackboard.json";
import BrillianceBlack from "monaco-themes/themes/Brilliance Black.json";
import BrillianceDull from "monaco-themes/themes/Brilliance Dull.json";
import ChromeDevTools from "monaco-themes/themes/Chrome DevTools.json";
import CloudsMidnight from "monaco-themes/themes/Clouds Midnight.json";
import Clouds from "monaco-themes/themes/Clouds.json";
import Cobalt from "monaco-themes/themes/Cobalt.json";
import Dawn from "monaco-themes/themes/Dawn.json";
import Dreamweaver from "monaco-themes/themes/Dreamweaver.json";
import Eiffel from "monaco-themes/themes/Eiffel.json";
import EspressoLibre from "monaco-themes/themes/Espresso Libre.json";
import GitHub from "monaco-themes/themes/GitHub.json";
import IDLE from "monaco-themes/themes/IDLE.json";
import Katzenmilch from "monaco-themes/themes/Katzenmilch.json";
import KuroirTheme from "monaco-themes/themes/Kuroir Theme.json";
import LAZY from "monaco-themes/themes/LAZY.json";
import MagicWB from "monaco-themes/themes/MagicWB (Amiga).json";
import MerbivoreSoft from "monaco-themes/themes/Merbivore Soft.json";
import Merbivore from "monaco-themes/themes/Merbivore.json";
import MonokaiBright from "monaco-themes/themes/Monokai Bright.json";
import Monokai from "monaco-themes/themes/Monokai.json";
import NightOwl from "monaco-themes/themes/Night Owl.json";
import OceanicNext from "monaco-themes/themes/Oceanic Next.json";
import PastelsOnDark from "monaco-themes/themes/Pastels on Dark.json";
import SlushAndPoppies from "monaco-themes/themes/Slush and Poppies.json";
import SolarizedDark from "monaco-themes/themes/Solarized-dark.json";
import SolarizedLight from "monaco-themes/themes/Solarized-light.json";
import SpaceCadet from "monaco-themes/themes/SpaceCadet.json";
import Sunburst from "monaco-themes/themes/Sunburst.json";
import TextmateMac from "monaco-themes/themes/Textmate (Mac Classic).json";
import TomorrowNightBlue from "monaco-themes/themes/Tomorrow-Night-Blue.json";
import TomorrowNightBright from "monaco-themes/themes/Tomorrow-Night-Bright.json";
import TomorrowNightEighties from "monaco-themes/themes/Tomorrow-Night-Eighties.json";
import TomorrowNight from "monaco-themes/themes/Tomorrow-Night.json";
import Tomorrow from "monaco-themes/themes/Tomorrow.json";
import Twilight from "monaco-themes/themes/Twilight.json";
import UpstreamSunburst from "monaco-themes/themes/Upstream Sunburst.json";
import VibrantInk from "monaco-themes/themes/Vibrant Ink.json";
import XcodeDefault from "monaco-themes/themes/Xcode_default.json";
import Zenburnesque from "monaco-themes/themes/Zenburnesque.json";
import iPlastic from "monaco-themes/themes/iPlastic.json";
import idleFingers from "monaco-themes/themes/idleFingers.json";
import krTheme from "monaco-themes/themes/krTheme.json";
import monoindustrial from "monaco-themes/themes/monoindustrial.json";

// Your existing map of keys to theme names
const monacoThemes = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "birds-of-paradise": "Birds of Paradise",
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  clouds: "Clouds",
  cobalt: "Cobalt",
  dawn: "Dawn",
  dreamweaver: "Dreamweaver",
  eiffel: "Eiffel",
  "espresso-libre": "Espresso Libre",
  github: "GitHub",
  idle: "IDLE",
  katzenmilch: "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  lazy: "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  merbivore: "Merbivore",
  "monokai-bright": "Monokai Bright",
  monokai: "Monokai",
  "night-owl": "Night Owl",
  "oceanic-next": "Oceanic Next",
  "pastels-on-dark": "Pastels on Dark",
  "slush-and-poppies": "Slush and Poppies",
  "solarized-dark": "SolarizedDark",
  "solarized-light": "SolarizedLight",
  spacecadet: "SpaceCadet",
  sunburst: "Sunburst",
  "textmate--mac-classic-": "Textmate (Mac Classic)",
  "tomorrow-night-blue": "Tomorrow-Night-Blue",
  "tomorrow-night-bright": "Tomorrow-Night-Bright",
  "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  "tomorrow-night": "Tomorrow-Night",
  tomorrow: "Tomorrow",
  twilight: "Twilight",
  "upstream-sunburst": "Upstream Sunburst",
  "vibrant-ink": "Vibrant Ink",
  "xcode-default": "Xcode_default",
  zenburnesque: "Zenburnesque",
  iplastic: "iPlastic",
  idlefingers: "idleFingers",
  krtheme: "krTheme",
  monoindustrial: "monoindustrial",
};

// Mapping actual JSONs to theme names
const themesMap = {
  Active4D,
  "All Hallows Eve": AllHallowsEve,
  Amy,
  "Birds of Paradise": BirdsOfParadise,
  Blackboard,
  "Brilliance Black": BrillianceBlack,
  "Brilliance Dull": BrillianceDull,
  "Chrome DevTools": ChromeDevTools,
  "Clouds Midnight": CloudsMidnight,
  Clouds,
  Cobalt,
  Dawn,
  Dreamweaver,
  Eiffel,
  "Espresso Libre": EspressoLibre,
  GitHub,
  IDLE,
  Katzenmilch,
  "Kuroir Theme": KuroirTheme,
  LAZY,
  "MagicWB (Amiga)": MagicWB,
  "Merbivore Soft": MerbivoreSoft,
  Merbivore,
  "Monokai Bright": MonokaiBright,
  Monokai,
  "Night Owl": NightOwl,
  "Oceanic Next": OceanicNext,
  "Pastels on Dark": PastelsOnDark,
  "Slush and Poppies": SlushAndPoppies,
  SolarizedDark,
  SolarizedLight,
  SpaceCadet,
  Sunburst,
  "Textmate (Mac Classic)": TextmateMac,
  "Tomorrow-Night-Blue": TomorrowNightBlue,
  "Tomorrow-Night-Bright": TomorrowNightBright,
  "Tomorrow-Night-Eighties": TomorrowNightEighties,
  "Tomorrow-Night": TomorrowNight,
  Tomorrow,
  Twilight,
  "Upstream Sunburst": UpstreamSunburst,
  "Vibrant Ink": VibrantInk,
  Xcode_default: XcodeDefault,
  Zenburnesque,
  iPlastic,
  idleFingers,
  krTheme,
  monoindustrial,
};

// Vite-compatible defineTheme function
const defineTheme = (themeKey) => {
  return new Promise((res) => {
    loader.init().then((monaco) => {
      const themeName = monacoThemes[themeKey];
      const themeData = themesMap[themeName];

      if (!themeData) {
        console.error(`Theme "${themeKey}" not found.`);
        return res();
      }

      monaco.editor.defineTheme(themeKey, themeData);
      res();
    }).catch((err) => {
      console.error("Failed to initialize Monaco or load theme", err);
      res();
    });
  });
};

export { defineTheme };
