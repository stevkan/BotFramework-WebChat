# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- CHANGELOG line template
### Added/Changed/Removed
-  Added something, by [@johndoe](https://github.com/johndoe), in PR [#XXX](https://github.com/microsoft/BotFramework-WebChat/pull/XXX)

### Changed (for dependency bumps)
-  `core`: Bumps to [`abc@1.2.3`](https://npmjs.com/package/abc/), by [@johndoe](https://github.com/johndoe), in PR [#XXX](https://github.com/microsoft/BotFramework-WebChat/pull/XXX)

### Fixed
-  Fix [#XXX](https://github.com/microsoft/BotFramework-WebChat/issues/XXX). Patched something, by [@johndoe](https://github.com/johndoe) in PR [#XXX](https://github.com/microsoft/BotFramework-WebChat/pull/XXX)
-->

<!-- ### Added
-  Added something, by [@johndoe](https://github.com/johndoe), in PR [#XXX](https://github.com/microsoft/BotFramework-WebChat/pull/XXX)
-->

## [Unreleased]

### Changed

-  `*`: Bumps all dev dependencies to latest version, by [@compulim](https://github.com/compulim), in PR [#2182](https://github.com/microsoft/BotFramework-WebChat/pull/2182), notably
   -  [`@babel/*@7.5.4`](https://www.npmjs.com/package/@babel/core)
   -  [`jest@24.8.0`](https://www.npmjs.com/package/jest)
   -  [`lerna@3.15.0`](https://www.npmjs.com/package/lerna)
   -  [`typescript@3.5.3`](https://www.npmjs.com/package/typescript)
   -  [`webpack@4.35.3`](https://www.npmjs.com/package/webpack)
-  `*`: Bumps [`@babel/runtime@7.5.4`](https://www.npmjs.com/package/@babel/runtime), by [@compulim](https://github.com/compulim), in PR [#2182](https://github.com/microsoft/BotFramework-WebChat/pull/2182)
-  `*`: Bumps Docker container for headless Chrome to `selenium/standalone-chrome:3.141.59-radium`, by [@compulim](https://github.com/compulim), in PR [#2182](https://github.com/microsoft/BotFramework-WebChat/pull/2182)
-  `*`: Moves from [`babel-plugin-version-transform`](https://www.npmjs.com/package/babel-plugin-version-transform) to [`babel-plugin-transform-inline-environment-variables`](https://www.npmjs.com/package/babel-plugin-transform-inline-environment-variables), by [@compulim](https://github.com/compulim), in PR [#2182](https://github.com/microsoft/BotFramework-WebChat/pull/2182)
-  `*`: Bumps ESLint and related dependencies to latest version, by [@compulim](https://github.com/compulim), in PR [#2185](https://github.com/microsoft/BotFramework-WebChat/pull/2185)
   - [`eslint-plugin-react@7.14.2`](https://www.npmjs.com/package/eslint-plugin-react)
   - [`eslint@6.0.1`](https://www.npmjs.com/package/eslint)
-  `*`: Bumps React, Redux and their related dependencies to latest version, by [@compulim](https://github.com/compulim), in PR [#2184](https://github.com/microsoft/BotFramework-WebChat/pull/2184)
   - [`react-dom@16.8.6`](https://www.npmjs.com/package/react-dom)
   - [`react-redux@5.1.1`](https://www.npmjs.com/package/react-redux)
   - [`react@16.8.6`](https://www.npmjs.com/package/react)
   - [`redux@4.0.4`](https://www.npmjs.com/package/redux)
   - Removed [`redux-promise-middleware`](https://www.npmjs.com/package/redux-promise-middleware)
-  `*`: Bumps `lodash-*`(https://www.npmjs.com/package/lodash), by [@compulim](https://github.com/compulim), in PR [#2199](https://github.com/microsoft/BotFramework-WebChat/pull/2199)
   - [`lodash@4.17.14`](https://www.npmjs.com/package/lodash)
   - [`lodash.mergewith@4.6.2`](https://www.npmjs.com/package/lodash.mergewith)
   - [`lodash.template@4.5.0`](https://www.npmjs.com/package/lodash.template)
   - [`lodash.templatesettings@4.2.0`](https://www.npmjs.com/package/lodash.template)
   - [`mixin-deep@1.3.2`](https://www.npmjs.com/package/mixin-deep)
   - [`set-value@2.0.1`](https://www.npmjs.com/package/set-value)
   - [`union-value@1.0.1`](https://www.npmjs.com/package/union-value)

### Fixed

-  Fix [#2160](https://github.com/microsoft/BotFramework-WebChat/issues/2160). Clear suggested actions after clicking on a suggested actions of type `openUrl`, by [@tdurnford](https://github.com/tdurnford) in PR [#2190](https://github.com/microsoft/BotFramework-WebChat/pull/2190)
-  Fix [#2187](https://github.com/microsoft/BotFramework-WebChat/issues/2187). Bump core-js and update core-js modules on index-es5.js, by [@corinagum](https://github.com/corinagum) in PR [#2195](https://github.com/microsoft/BotFramework-WebChat/pull/2195)
-  Fix [#1954](https://github.com/microsoft/BotFramework-WebChat/issues/1954). Estimate clock skew and adjust timestamp for outgoing activity, by [@compulim](https://github.com/compulim) in PR [#2208](https://github.com/microsoft/BotFramework-WebChat/pull/2208)
-  Fix [#2193](https://github.com/microsoft/BotFramework-WebChat/issues/2193). Fix Adaptive Card/attachments do not get read by Narrator, by [@corinagum](https://github.com/corinagum) in PR [#2226](https://github.com/microsoft/BotFramework-WebChat/pull/2226)
-  Fix [#2150](https://github.com/microsoft/BotFramework-WebChat/issues/2193). Fix timestamps read by Narrator, by [@corinagum](https://github.com/corinagum) in PR [#2226](https://github.com/microsoft/BotFramework-WebChat/pull/2226)
-  Fix [#2240](https://github.com/microsoft/BotFramework-WebChat/issues/2240). Fix microphone button should be re-enabled after error, by [@compulim](https://github.com/compulim) in PR [#2241](https://github.com/microsoft/BotFramework-WebChat/pull/2241)
-  Fix [#2250](https://github.com/microsoft/BotFramework-WebChat/issues/2250). Fix React warnings related prop types, by [@compulim](https://github.com/compulim) in PR [#2253](https://github.com/microsoft/BotFramework-WebChat/pull/2253)

### Added

-  Added bubble nub and style options, by [@compulim](https://github.com/compulim), in PR [#2137](https://github.com/Microsoft/BotFramework-WebChat/pull/2137)
-  Fix [#1808](https://github.com/microsoft/BotFramework-WebChat/issues/1808). Added documentation on activity types, by [@corinagum](https://github.com/corinagum) in PR [#2228](https://github.com/microsoft/BotFramework-WebChat/pull/2228)

### Samples

-  [Single sign-on for Microsoft Teams apps](https://microsoft.github.io/BotFramework-WebChat/19.c.single-sign-on-for-teams-apps/), by [@compulim](https://github.com/compulim) in [#2196](https://github.com/microsoft/BotFramework-WebChat/pull/2196)
-  [Customize Web Chat with Reaction Buttons](https://microsoft.github.io/BotFramework-WebChat/09.customization-reaction-buttons/). Updated reaction handlers to send `messageReaction` activities, by [@tdurnford](https://github.com/tdurnford) in [#2239](https://github.com/microsoft/BotFramework-WebChat/pull/2239)

## [4.5.0] - 2019-07-10

### Added

-  `*`: Added [`eslint`](https://npmjs.com/package/eslint/) to static code analysis, by [@compulim](https://github.com/compulim), in PR [#1970](https://github.com/microsoft/BotFramework-WebChat/pull/1970)
-  Added pt-PT language, by [@bodyzatva](https://github.com/bodyzatva) in PR [#2005](https://github.com/microsoft/BotFramework-WebChat/pull/2005) and PR [#2020](https://github.com/microsoft/BotFramework-WebChat/pull/2020)
-  Added documentation for using Web Chat dev build, by [@corinagum](https://github.com/corinagum), in PR [#2074](https://github.com/microsoft/BotFramework-WebChat/pull/2074)
-  Added the Web Chat version to DirectLine's botAgent option, by [@tdurnford](https://github.com/tdurnford), in PR [#2101](https://github.com/microsoft/BotFramework-WebChat/pull/2101)
-  Added `richCardWrapTitle` to `defaultStyleOptions`, by [@tdurnford](https://github.com/tdurnford), in PR [#2115](https://github.com/microsoft/BotFramework-WebChat/pull/2115)
-  Added test harness for speech recognition and synthesis for [#2122](https://github.com/microsoft/BotFramework-WebChat/issues/2122), by [@compulim](https://github.com/compulim), in PR [#2153](https://github.com/microsoft/BotFramework-WebChat/pull/2153)

### Changed

-  `*`: Bumps to [`lerna@3.13.4`](https://npmjs.com/package/lerna/), by [@corinagum](https://github.com/corinagum), in PR [#1989](https://github.com/microsoft/BotFramework-WebChat/pull/1989)
-  `*`: Bumps to:
   -  [`lerna@3.13.4`](https://npmjs.com/package/lerna/),
   -  [`react-scripts@3.0.0`](https://npmjs.com/package/react-scripts/),
   -  [`webpack@4.30.0`](https://npmjs.com/package/webpack/), by [@corinagum](https://github.com/corinagum), in PR [#1965](https://github.com/microsoft/BotFramework-WebChat/pull/1965)
-  `bundle`: Bumps to [`adaptivecards@1.2.0`](https://npmjs.com/package/adaptivecards), by [@corinagum](https://github.com/corinagum), in PR [#2064](https://github.com/microsoft/BotFramework-WebChat/pull/2064)

### Fixed

-  Fix [#1974](https://github.com/microsoft/BotFramework-WebChat/issues/1974). Update `/docs/` folder to `/media/` and delete unused images, by [@corinagum](https://github.com/corinagum) in PR [#1975](https://github.com/microsoft/BotFramework-WebChat/pull/1975)
-  Fix [#1980](https://github.com/microsoft/BotFramework-WebChat/issues/1980). Changed `sendBoxTextArea` styles to break words longer than the `textarea`, by [@tdurnford](https://github.com/tdurnford) in PR [#1986](https://github.com/microsoft/BotFramework-WebChat/pull/1986)
-  Fix [#1969](https://github.com/microsoft/BotFramework-WebChat/issues/1969). Move `styleSet`s related to Adaptive Cards to full bundle, by [@corinagum](https://github.com/corinagum) in PR [#1987](https://github.com/microsoft/BotFramework-WebChat/pull/1987)
-  Fix [#1429](https://github.com/microsoft/BotFramework-WebChat/issues/1429). Changed Markdown-It options to render newline characters correctly, by [@tdurnford](https://github.com/tdurnford) in PR [#1988](https://github.com/microsoft/BotFramework-WebChat/pull/1988)
-  Fix [#1736](https://github.com/microsoft/BotFramework-WebChat/issues/1736). Fixed only first activity in a batch is spoken, by [@compulim](https://github.com/compulim) in PR [#2016](https://github.com/microsoft/BotFramework-WebChat/pull/2016)
-  Fix [#2008](https://github.com/microsoft/BotFramework-WebChat/issues/2008). Fixed playground due to recent eslint changes, by [@compulim](https://github.com/compulim) in PR [#2009](https://github.com/microsoft/BotFramework-WebChat/pull/2009)
-  Fix [#1876](https://github.com/microsoft/BotFramework-WebChat/issues/1876). Accessibility fixes on Web Chat transcript, by [@corinagum](https://github.com/corinagum) in PR [#2018](https://github.com/microsoft/BotFramework-WebChat/pull/2018)
-  Fix [#1829](https://github.com/microsoft/BotFramework-WebChat/issues/1829). Fixed long text not being synthesized by Cognitive Services by bumping to [`react-say@1.2.0`](https://github.com/compulim/react-say), by [@compulim](https://github.com/compulim) in PR [#2035](https://github.com/microsoft/BotFramework-WebChat/pull/2035)
-  Fix [#1982](https://github.com/microsoft/BotFramework-WebChat/issues/1982). Move to prettier! by [@corinagum](https://github.com/corinagum) in PR [#2038](https://github.com/microsoft/BotFramework-WebChat/pull/2038)
-  Fix [#1429](https://github.com/microsoft/BotFramework-WebChat/issues/1429). Added Markdown string preprocessing so the renderer will respect CRLF carriage returns (\r\n), by [@tdurnford](https://github.com/tdurnford) in PR [#2055](https://github.com/microsoft/BotFramework-WebChat/pull/2055)
-  Fix [#2057](https://github.com/microsoft/BotFramework-WebChat/issues/2057). Added `sip:` protocol to sanitize HTML options, by [@tdurnford](https://github.com/tdurnford) in PR [#2061](https://github.com/microsoft/BotFramework-WebChat/pull/2061)
-  Fix [#2062](https://github.com/microsoft/BotFramework-WebChat/issues/2062). Fixed Markdown rendering issue in cards, by [@tdurnford](https://github.com/tdurnford) in PR [#2063](https://github.com/microsoft/BotFramework-WebChat/pull/2063)
-  Fix [#1896](https://github.com/microsoft/BotFramework-WebChat/issues/1896). Added data schema to render base64 images, by [@denscollo](https://github.com/denscollo) in PR[#2067](https://github.com/microsoft/BotFramework-WebChat/pull/2067)
-  Fix [#2068](https://github.com/microsoft/BotFramework-WebChat/issues/2068). Fixed Adaptive Cards validate and rich card speak issues, by [@tdurnford](https://github.com/tdurnford) in PR [#2075](https://github.com/microsoft/BotFramework-WebChat/pull/2075)
-  Fix [#1966](https://github.com/microsoft/BotFramework-WebChat/issues/1966). Update Localization files for es-ES, ja-JP, zh-HANS, zh-HANT, zh-YUE, by [@corinagum](https://github.com/corinagum) in PR [#2077](https://github.com/microsoft/BotFramework-WebChat/pull/2077)
-  Fix [#2078](https://github.com/microsoft/BotFramework-WebChat/issues/2078). Update Localization files for tr-TR by [@vefacaglar](https://github.com/vefacaglar)
-  Fix [#2069](https://github.com/microsoft/BotFramework-WebChat/issues/2069). Fixed Markdown renderer issue in playground, by [@tdurnford](https://github.com/tdurnford) in PR[#2073](https://github.com/microsoft/BotFramework-WebChat/pull/2073)
-  Fix [#1971](https://github.com/microsoft/BotFramework-WebChat/issues/1971). Fix mobile UX of Sendbox, SendButton, and SuggestedAction focus, by [@corinagum](https://github.com/corinagum) in PR [#2087](https://github.com/microsoft/BotFramework-WebChat/pull/2087)
-  Fix [#1627](https://github.com/microsoft/BotFramework-WebChat/issues/1627). Fixed timestamps randomly stopped from updating, by [@compulim](https://github.com/compulim) in PR [#2090](https://github.com/microsoft/BotFramework-WebChat/pull/2090)
-  Fix [#2001](https://github.com/microsoft/BotFramework-WebChat/issues/2001). Strip Markdown from ARIA labels, so screen readers do not speak Markdown in text, by [@corinagum](https://github.com/corinagum) in PR [#2096](https://github.com/microsoft/BotFramework-WebChat/pull/2096)
-  Fix [#1926](https://github.com/microsoft/BotFramework-WebChat/issues/1926). Fixed scroll stickiness issue when submitting an Adaptive Card form with suggested actions opened, by [@compulim](https://github.com/compulim) in PR [#2107](https://github.com/microsoft/BotFramework-WebChat/pull/2107)
-  Fix [#2110](https://github.com/microsoft/BotFramework-WebChat/issues/2110). Fixed sendBox input/textarea background color issue, by [@tdurnford](https://github.com/johndoe) in PR [#2111](https://github.com/microsoft/BotFramework-WebChat/pull/2111)
-  Fix [#2104](https://github.com/microsoft/BotFramework-WebChat/issues/2104). Remove deprecated `/master/webchat**.js` links from samples, by [@corinagum](https://github.com/corinagum) in PR [#2105](https://github.com/microsoft/BotFramework-WebChat/pull/2105)
-  Fix [#1863](https://github.com/microsoft/BotFramework-WebChat/issues/1863). Remove title, subtitle, and text of cards from being spoken by [@corinagum](https://github.com/corinagum) in PR [#2118](https://github.com/microsoft/BotFramework-WebChat/pull/2118)
-  Fix [#2134](https://github.com/microsoft/BotFramework-WebChat/issues/2134). Added `azure-pipelines.yml` for embed package, by [@compulim](https://github.com/compulim) in PR [#2135](https://github.com/microsoft/BotFramework-WebChat/pull/2135)
-  Fix [#2106](https://github.com/microsoft/BotFramework-WebChat/issues/2016). Fix `AdaptiveCardHostConfig` warning associated with the `CommonCard` component, by [@tdurnford](https://github.com/tdurnford) in PR [#2108](https://github.com/microsoft/BotFramework-WebChat/pull/2108)
-  Fix [#1872](https://github.com/microsoft/BotFramework-WebChat/issues/1872). Fixed `observeOnce` to unsubscribe properly, by [@compulim](https://github.com/compulim) in PR [#2140](https://github.com/microsoft/BotFramework-WebChat/pull/2140)
-  Fix [#2022](https://github.com/microsoft/BotFramework-WebChat/issues/2022). Fixed `"expectingInput"` in `inputHint` is not respected, by [@compulim](https://github.com/compulim) and [@corinagum](https://github.com/corinagum) in PR [#2149](https://github.com/microsoft/BotFramework-WebChat/pull/2149) and PR [#2166](https://github.com/microsoft/BotFramework-WebChat/pull/2166)

### Samples

-  `*`: [Single sign-on for enterprise apps](https://microsoft.github.io/BotFramework-WebChat/19.a.single-sign-on-for-enterprise-apps/), by [@compulim](https://github.com/compulim) in [#2002](https://github.com/microsoft/BotFramework-WebChat/pull/2002)
-  `*`: [Upload to Azure Storage](https://microsoft.github.io/BotFramework-WebChat/20.a.upload-to-azure-storage/), by [@compulim](https://github.com/compulim) in [#2127](https://github.com/microsoft/BotFramework-WebChat/pull/2127)
-  `*`: [Speech UI demo](https://microsoft.github.io/BotFramework-WebChat/13.customization-speech-ui). Reconfigured to use Cognitive Services properly, by [@compulim](https://github.com/compulim) in PR [#2132](https://github.com/microsoft/BotFramework-WebChat/pull/2132)
-  `*`: [Single sign-on for Intranet apps](https://microsoft.github.io/BotFramework-WebChat/19.b.single-sign-on-for-intranet-apps/), by [@compulim](https://github.com/compulim) in [#2144](https://github.com/microsoft/BotFramework-WebChat/pull/2144)

## [4.4.1] - 2019-05-02

### Added

-  Added handling of reconnection, by [@compulim](https://github.com/compulim), in PR [#1880](https://github.com/microsoft/BotFramework-WebChat/pull/1880)
-  Added embed page, by [@compulim](https://github.com/compulim), in PR [#1910](https://github.com/microsoft/BotFramework-WebChat/pull/1910), PR [#1928](https://github.com/microsoft/BotFramework-WebChat/pull/1928) and PR [#1938](https://github.com/microsoft/BotFramework-WebChat/pull/1938)

### Changed

-  Deployment: Bumps to [`blobxfer@1.7.1`](https://github.com/azure/blobxfer/), by [@compulim](https://github.com/compulim), in PR [#1897](https://github.com/microsoft/BotFramework-WebChat/pull/1897)
-  Deployment: Adds `charset` to content type of JavaScript files on CDN, by [@compulim](https://github.com/compulim), in PR [#1897](https://github.com/microsoft/BotFramework-WebChat/pull/1897)
-  `component`: Bumps to [`react-film@1.2.1-master.db29968`](https://npmjs.com/package/react-film/), by [@corinagum](https://github.com/corinagum) and [@compulim](https://github.com/compulim), in PR [#1900](https://github.com/microsoft/BotFramework-WebChat/pull/1900) and PR [#1924](https://github.com/microsoft/BotFramework-WebChat/pull/1924)
-  Build: Bumps to [`@babel/*`](https://babeljs.io/), by [@corinagum](https://github.com/corinagum), in PR [#1918](https://github.com/microsoft/BotFramework-WebChat/pull/1918)
-  `component`: Carousel flippers on carousel layout and suggested actions will use initial cursor style, by [@compulim](https://github.com/compulim), in PR [#1924](https://github.com/microsoft/BotFramework-WebChat/pull/1924)

### Fixed

-  Fix [#1423](https://github.com/microsoft/BotFramework-WebChat/issues/1423). Added sample for hosting WebChat in Angular, by [@omarsourour](https://github.com/omarsourour) in PR [#1813](https://github.com/microsoft/BotFramework-WebChat/pull/1813)
-  Fix [#1767](https://github.com/microsoft/BotFramework-WebChat/issues/1767). Remove `cursor: pointer` from buttons, by [@corinagum](https://github.com/corinagum) in PR [#1819](https://github.com/microsoft/BotFramework-WebChat/pull/1819)
-  Fix [#1774](https://github.com/microsoft/BotFramework-WebChat/issues/1774). Add `styleSetOption` to allow word break. Default to `break-word`, by [@corinagum](https://github.com/corinagum) in PR [#1832](https://github.com/microsoft/BotFramework-WebChat/pull/1832)
-  Fix [#1847](https://github.com/microsoft/BotFramework-WebChat/issues/1847). Bump react-say, which adds babel-runtime dependency, by [@corinagum](https://github.com/corinagum) in PR [#1849](https://github.com/microsoft/BotFramework-WebChat/pull/1849)
-  Add [#1524](https://github.com/microsoft/BotFramework-WebChat/issues/1524) Add Offline UI: connecting for the first time, by [@corinagum](https://github.com/corinagum), in PR [#1866](https://github.com/microsoft/BotFramework-WebChat/pull/1866)
-  Fix [#1768](https://github.com/microsoft/BotFramework-WebChat/issues/1768). Add style options to be able to modify all Send Box borders, by [@corinagum](https://github.com/corinagum) in PR [#1871](https://github.com/microsoft/BotFramework-WebChat/pull/1871)
-  Fix [#1827](https://github.com/microsoft/BotFramework-WebChat/issues/1827). Remove renderer for unknown activities, by [@corinagum](https://github.com/corinagum) in PR [#1873](https://github.com/microsoft/BotFramework-WebChat/pull/1873)
-  Fix [#1586](https://github.com/microsoft/BotFramework-WebChat/issues/1586). Fix theming of suggested actions buttons, by [@corinagum](https://github.com/corinagum) in PR [#1883](https://github.com/microsoft/BotFramework-WebChat/pull/1883)
-  Fix [#1837](https://github.com/microsoft/BotFramework-WebChat/issues/1837), [#1643](https://github.com/microsoft/BotFramework-WebChat/issues/1643). Fix style conflicts with bootstrap and bump `memoize-one`, by [@corinagum](https://github.com/corinagum) in PR [#1884](https://github.com/microsoft/BotFramework-WebChat/pull/1884)
-  Fix [#1877](https://github.com/microsoft/BotFramework-WebChat/issues/1877). Add viewport meta tag and fix a few sample links, by [@corinagum](https://github.com/corinagum) in PR [#1919](https://github.com/microsoft/BotFramework-WebChat/pull/1919)
-  Fix [#1789](https://github.com/microsoft/BotFramework-WebChat/issues/1789). Focus send box after message is being sent, by [@corinagum](https://github.com/corinagum) in PR [#1915](https://github.com/microsoft/BotFramework-WebChat/pull/1915)
-  Fix [#1920](https://github.com/microsoft/BotFramework-WebChat/issues/1920). Added disabled property to send button, by [@tdurnford](https://github.com/tdurnford) in PR [#1922](https://github.com/microsoft/BotFramework-WebChat/pull/1922)
-  Fix [#1525](https://github.com/microsoft/BotFramework-WebChat/issues/1525). Add JavaScript error Offline UI, by [@corinagum](https://github.com/corinagum) in PR [#1927](https://github.com/microsoft/BotFramework-WebChat/pull/1927)
-  Fix [#1934](https://github.com/microsoft/BotFramework-WebChat/issues/1934). Fix spacing of empty ConnectivityStatus component, by [@corinagum](https://github.com/corinagum) in PR [#1939](https://github.com/microsoft/BotFramework-WebChat/pull/1939)
-  Fix [#1943](https://github.com/microsoft/BotFramework-WebChat/issues/1943). Fix extra vertical padding in IE11 and Firefox, by [@compulim](https://github.com/compulim) in PR [#1949](https://github.com/microsoft/BotFramework-WebChat/pull/1949)
-  Fix [#1945](https://github.com/microsoft/BotFramework-WebChat/issues/1945). QA fixes for 4.4, by [@corinagum](https://github.com/johndoe) in PR [#1950](https://github.com/microsoft/BotFramework-WebChat/pull/1950)
-  Fix [#1947](https://github.com/microsoft/BotFramework-WebChat/issues/1947). Fix scrollbar in suggested action should be hidden in Firefox, remove gaps, and use style set for customizing `react-film`, by [@compulim](https://github.com/compulim) in PR [#1953](https://github.com/microsoft/BotFramework-WebChat/pull/1953)
-  Fix [#1948](https://github.com/microsoft/BotFramework-WebChat/issues/1948). Fixed sample 17.chat-send-history to work with Firefox and Edge, by [@tdurnford](https://github.com/tdurnford) in PR [#1956](https://github.com/microsoft/BotFramework-WebChat/pull/1956)
-  Fix [#1304](https://github.com/microsoft/BotFramework-WebChat/issues/1304). Move Adaptive Cards from component to bundle, by [@compulim](https://github.com/compulim) and [@corinagum](https://github.com/corinagum) in PR [#1936](https://github.com/microsoft/BotFramework-WebChat/pull/1936)
-  Fix [#1990](https://github.com/microsoft/BotFramework-WebChat/issues/1990). Bump Adaptive Cards & fix textarea font-family from monospace to Web Chat's `primaryFont`, by [@corinagum](https://github.com/corinagum) in PR [#2064](https://github.com/microsoft/BotFramework-WebChat/pull/2064)

## [4.3.0] - 2019-03-04

### Added

-  Fix [#1383](https://github.com/microsoft/BotFramework-WebChat/issues/1383). Added options to hide upload button, by [@compulim](https://github.com/compulim) in PR [#1491](https://github.com/microsoft/BotFramework-WebChat/pull/1491)
-  Added support of avatar image, thru `styleOptions.botAvatarImage` and `styleOptions.userAvatarImage`, in PR [#1486](https://github.com/microsoft/BotFramework-WebChat/pull/1486)
-  Added ability to style sendbox background and text color, thru `styleOptions.sendBoxBackground` and `styleOptions.sendBoxTextColor`, in PR [#1575](https://github.com/microsoft/BotFramework-WebChat/pull/1575)
-  `core`: Added `sendEvent`, in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  `core`: Added `CONNECT_FULFILLING` action to workaround `redux-saga` [design decision](https://github.com/redux-saga/redux-saga/issues/1651), in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  `component`: Added missing Spanish (es-ES) by [@schgressive](https://github.com/schgressive) in PR [#1615](https://github.com/microsoft/BotFramework-WebChat/pull/1615)
-  Added missing Spanish (es-ES) by [@schgressive](https://github.com/schgressive) in PR [#1615](https://github.com/microsoft/BotFramework-WebChat/pull/1615)
-  Fix [#1602](https://github.com/microsoft/BotFramework-WebChat/issues/1602). Fix suggested actions regression of buttons, by [@corinagum](https://github.com/corinagum) in PR [#1616](https://github.com/microsoft/BotFramework-WebChat/pull/1616)
-  `component`: Allow font family and adaptive cards text color to be set via styleOptions, by [@a-b-r-o-w-n](https://github.com/a-b-r-o-w-n), in PR [#1670](https://github.com/microsoft/BotFramework-WebChat/pull/1670)
-  `component`: Add fallback logic to browser which do not support `window.Intl`, by [@compulim](https://github.com/compulim), in PR [#1696](https://github.com/microsoft/BotFramework-WebChat/pull/1696)
-  `*`: Added `username` back to activity, fixed [#1321](https://github.com/microsoft/BotFramework-WebChat/issues/1321), by [@compulim](https://github.com/compulim), in PR [#1682](https://github.com/microsoft/BotFramework-DirectLineJS/pull/1682)
-  `component`: Allow root component height and width customization via `styleOptions.rootHeight` and `styleOptions.rootWidth`, by [@tonyanziano](https://github.com/tonyanziano), in PR [#1702](https://github.com/microsoft/BotFramework-WebChat/pull/1702)
-  `component`: Added `cardActionMiddleware` to customize the behavior of card action, by [@compulim](https://github.com/compulim), in PR [#1704](https://github.com/microsoft/BotFramework-WebChat/pull/1704)
-  `bundle`: Add `watermark` and `streamUrl` parameters to createDirectLine, by [@corinagum](https://github.com/corinagum), in PR [#1817](https://github.com/microsoft/BotFramework-WebChat/pull/1817)
-  `component`: Added `textarea` option to `SendBox` per issues [#17](https://github.com/microsoft/BotFramework-WebChat/issues/17) and [#124](https://github.com/microsoft/BotFramework-WebChat/issues/124), by [@tdurnford](https://github.com/tdurnford), in PR [#1889](https://github.com/microsoft/BotFramework-WebChat/pull/1889)
-  `component`: Added `suggestedAction` images per issue [#1739](https://github.com/microsoft/BotFramework-WebChat/issues/1739), by [@tdurnford](https://github.com/tdurnford), in PR [#1909](https://github.com/microsoft/BotFramework-WebChat/pull/1909)

### Changed

-  Bumped `botframework-directlinejs` to 0.11.4 in PR [#1783](https://github.com/microsoft/BotFramework-WebChat/pull/1783)
-  Moved `botAvatarImage` and `userAvatarImage` to `styleOptions.botAvatarImage` and `styleOptions.userAvatarImage` respectively, in PR [#1486](https://github.com/microsoft/BotFramework-WebChat/pull/1486)
-  Fix string interpolation error in Russian localization and fallback for browsers without Intl support by [@odysseus1973](https://github.com/odysseus1973) in PR [#1509](https://github.com/microsoft/BotFramework-WebChat/pull/1509)
-  `playground`: Bumps to [`botframework-directlinejs@0.10.0`](https://github.com/microsoft/BotFramework-DirectLineJS/), in PR [#1511](https://github.com/microsoft/BotFramework-WebChat/pull/1511)
-  `playground`: Bumps to [`react-scripts@2.1.1`](https://npmjs.com/package/react-scripts/), in PR [#1535](https://github.com/microsoft/BotFramework-WebChat/pull/1535)
-  `*`: Bump to [`adaptivecards@1.1.2`](https://npmjs.com/package/adaptivecards/), in [#1558](https://github.com/microsoft/BotFramework-WebChat/pull/1558)
-  `core`: Fix [#1344](https://github.com/microsoft/BotFramework-WebChat/issues/1344). Use random user ID if not specified, by [@compulim](https://github.com/compulim) in PR [#1612](https://github.com/microsoft/BotFramework-WebChat/pull/1612)
-  `component`: Bump to [`react-film@1.1.2`](https://npmjs.com/package/react-film/) and [`react-scroll-to-bottom@1.3.1`](https://npmjs.com/package/react-scroll-to-bottom/), by [@compulim](https://github.com/compulim), in PR [#1621](https://github.com/microsoft/BotFramework-WebChat/pull/1621) and PR [#1725](https://github.com/microsoft/BotFramework-WebChat/pull/1725)
-  Expand german by [@matmuenzel](https://github.com/matmuenzel) in PR [#1740](https://github.com/microsoft/BotFramework-WebChat/pull/1740)
-  Update Russian and Japanese by [@corinagum](https://github.com/corinagum) in PR [#1747](https://github.com/microsoft/BotFramework-WebChat/pull/1747)
-  Update Spanish by [@ckgrafico](https://github.com/ckgrafico) in PR [#1757](https://github.com/microsoft/BotFramework-WebChat/pull/1757)
-  Update Danish by [@simon_lfr](https://github.com/LTank) in PR [#1810](https://github.com/microsoft/BotFramework-WebChat/pull/1810)
-  Update Swedish by [@pekspro](https://github.com/pekspro) in PR [#1797](https://github.com/microsoft/BotFramework-WebChat/pull/1797)
-  Update Dutch by [@imicknl](https://github.com/imicknl) in PR [#1812](https://github.com/microsoft/BotFramework-WebChat/pull/1812)

### Fixed

-  Fix [#1360](https://github.com/microsoft/BotFramework-WebChat/issues/1360). Added `roles` to components of Web Chat, by [@corinagum](https://github.com/corinagum) in PR [#1462](https://github.com/microsoft/BotFramework-WebChat/pull/1462)
-  Fix [#1409](https://github.com/microsoft/BotFramework-WebChat/issues/1409). Added microphone status as screen reader only text, by [@corinagum](https://github.com/corinagum) in PR [#1490](https://github.com/microsoft/BotFramework-WebChat/pull/1490)
-  Fix [#1605](https://github.com/microsoft/BotFramework-WebChat/issues/1305), [#1316](https://github.com/microsoft/BotFramework-WebChat/issues/1316), [#1341](https://github.com/microsoft/BotFramework-WebChat/issues/1341), [#1411](https://github.com/microsoft/BotFramework-WebChat/issues/1411). Fix color contrast ratios & downloadIcon narrator accessibility by [@corinagum](https://github.com/corinagum) in PR [#1494](https://github.com/microsoft/BotFramework-WebChat/pull/1494)
-  Fix [#1264](https://github.com/microsoft/BotFramework-WebChat/issues/1264), [#1308](https://github.com/microsoft/BotFramework-WebChat/issues/1308), [#1318](https://github.com/microsoft/BotFramework-WebChat/issues/1318), [#1334](https://github.com/microsoft/BotFramework-WebChat/issues/1334),[#1425](https://github.com/microsoft/BotFramework-WebChat/issues/1425). Update icons with accessibilty, Sent message accessibility, and fix sample README.md, [@corinagum](https://github.com/corinagum) in PR [#1506](https://github.com/microsoft/BotFramework-WebChat/pull/1506) and [#1542](https://github.com/microsoft/BotFramework-WebChat/pull/1542)
-  Fix [#1512](https://github.com/microsoft/BotFramework-WebChat/issues/1512). Fix #1512: fix sanitization of anchors (allow title attributes), by [@corinagum](https://github.com/corinagum) in PR [#1530](https://github.com/microsoft/BotFramework-WebChat/pull/1530)
-  Fix [#1499](https://github.com/microsoft/BotFramework-WebChat/issues/1499).
   -  Fix screen reader handling of name, activity, and timestamp,
   -  `connectCarouselFilmStrip`: Fixed `botAvatarInitials` and `userAvatarInitials` functionality from [recent name change](https://github.com/microsoft/BotFramework-WebChat/pull/1486),
   -  `BasicTranscript`: Fixed user activity should not be recreated after receive ACK from Direct Line,
   -  by [@corinagum](https://github.com/corinagum) in PR [#1528](https://github.com/microsoft/BotFramework-WebChat/pull/1528)
-  `component`: Fix [#1560](https://github.com/microsoft/BotFramework-WebChat/issues/1560), [#1625](https://github.com/microsoft/BotFramework-WebChat/issues/1625) and [#1635](https://github.com/microsoft/BotFramework-WebChat/issues/1635). Fixed carousel layout not showing date and alignment issues, by [@compulim](https://github.com/compulim) in PR [#1561](https://github.com/microsoft/BotFramework-WebChat/pull/1561) and [#1641](https://github.com/microsoft/BotFramework-WebChat/pull/1641)
-  `playground`: Fix [#1562](https://github.com/microsoft/BotFramework-WebChat/issues/1562). Fixed timestamp grouping "Don't group" and added "Don't show timestamp", by [@compulim](https://github.com/compulim) in PR [#1563](https://github.com/microsoft/BotFramework-WebChat/pull/1563)
-  `component`: Fix [#1576](https://github.com/microsoft/BotFramework-WebChat/issues/1576). Rich card without `tap` should be rendered properly, by [@compulim](https://github.com/compulim) in PR [#1577](https://github.com/microsoft/BotFramework-WebChat/pull/1577)
-  `core`: Some sagas missed handling successive actions, in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  `core`: `incomingActivitySaga` may throw null-ref exception if the first activity is from user, in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  `component`: Fix [#1328](https://github.com/microsoft/BotFramework-WebChat/issues/1328). Should not start microphone if input hint is set to `ignoringInput`, in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  `component`: Fix outgoing typing indicators are not sent and acknowledged properly, in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  Fix [#1402](https://github.com/microsoft/BotFramework-WebChat/issues/1402). Add `messageBack` support, by [@corinagum](https://github.com/corinagum) in PR [#1581](https://github.com/microsoft/BotFramework-WebChat/pull/1581)
-  Fix [#1539](https://github.com/microsoft/BotFramework-WebChat/issues/1539). Fix outgoing typing indicators are not sent and acknowledged properly, in PR [#1541](https://github.com/microsoft/BotFramework-WebChat/pull/1541)
-  `component`: Fix [#1547](https://github.com/microsoft/BotFramework-WebChat/issues/1547). Fixed unhandled activity type should be forwarded to custom middleware, by [@compulim](https://github.com/compulim) in PR [#1569](https://github.com/microsoft/BotFramework-WebChat/pull/1569)
-  `playground`: Fix [#1610](https://github.com/microsoft/BotFramework-WebChat/issues/1610). Fixed bot and user avatar initials not working, by [@compulim](https://github.com/compulim) in PR [#1611](https://github.com/microsoft/BotFramework-WebChat/pull/1611)
-  `bundle`: Fix [#1613](https://github.com/microsoft/BotFramework-WebChat/issues/1613). Pass conversationId to DirectLineJS constructor, by [@neetu-das](https://github.com/neetu-das) in PR [#1614](https://github.com/microsoft/BotFramework-WebChat/pull/1614)
-  `component`: Fix [#1626](https://github.com/microsoft/BotFramework-WebChat/issues/1626). Fixed `Number.isNaN` is not available in IE11, by [@compulim](https://github.com/compulim) in PR [#1628](https://github.com/microsoft/BotFramework-WebChat/pull/1628)
-  `bundle`: Fix [#1652](https://github.com/microsoft/BotFramework-WebChat/issues/1652). Pass `pollingInterval` to DirectLineJS constructor, by [@neetu-das](https://github.com/neetu-das) in PR [#1655](https://github.com/microsoft/BotFramework-WebChat/pull/1655)
-  `core`: Reworked logic on connect/disconnect for reliability on handling corner cases, by [@compulim](https://github.com/compulim) in PR [#1649](https://github.com/microsoft/BotFramework-WebChat/pull/1649)
-  `core`: Fix [#1521](https://github.com/microsoft/BotFramework-WebChat/issues/1521). Add connectivity status component and update localization, by [@corinagum](https://github.com/corinagum) in PR [#1679](https://github.com/microsoft/BotFramework-WebChat/pull/1679)
-  `core`: Fix [#1057](https://github.com/microsoft/BotFramework-WebChat/issues/1057). Fixed suggested actions destined for other recipients should not show up, by [@compulim](https://github.com/compulim) in PR [#1706](https://github.com/microsoft/BotFramework-WebChat/pull/1706)
-  `component`: Fixed pt-br locale not being selected, added `X minutes ago` and missing translations, by [@pedropacheco92](https://github.com/pedropacheco92) in PR [#1745](https://github.com/microsoft/BotFramework-WebChat/pull/1745)
-  `component`: Fix [#1741](https://github.com/microsoft/BotFramework-WebChat/issues/1741) where `scrollToEndButton` does not have `type="button"`by [@corinagum](https://github.com/corinagum) in PR [#1743](https://github.com/microsoft/BotFramework-WebChat/pull/1743)
-  `component`: Fix [#1625](https://github.com/microsoft/BotFramework-WebChat/issues/1625) to update `README.md` by [@corinagum](https://github.com/corinagum) in PR [#1752](https://github.com/microsoft/BotFramework-WebChat/pull/1752)

### Removed

-  `botAvatarImage` and `userAvatarImage` props, as they are moved inside `styleOptions`, in PR [#1486](https://github.com/microsoft/BotFramework-WebChat/pull/1486)
-  `sendTyping` props is now renamed to `sendTypingIndicator`, by [@compulim](https://github.com/compulim), in PR [#1584](https://github.com/microsoft/BotFramework-WebChat/pull/1584)

### Samples

-  `core`: [Programmatic access to post activity](https://microsoft.github.io/BotFramework-WebChat/15.c.programmatic-post-activity/), in [#1568](https://github.com/microsoft/BotFramework-WebChat/pull/1568)
-  `component`: [Hide upload button](https://microsoft.github.io/BotFramework-WebChat/05.d.hide-upload-button-styling/), in [#1491](https://github.com/microsoft/BotFramework-WebChat/pull/1491)
-  `component`: [Avatar image](https://microsoft.github.io/BotFramework-WebChat/04.b.display-user-bot-images-styling/), in [#1486](https://github.com/microsoft/BotFramework-WebChat/pull/1486)
-  `core`: [Incoming activity to JavaScript event](https://microsoft.github.io/BotFramework-WebChat/15.b.incoming-activity-event/), in [#1567](https://github.com/microsoft/BotFramework-WebChat/pull/1567)
-  `core`: [Send welcome event](https://microsoft.github.io/BotFramework-WebChat/15.b.backchannel-send-welcome-event/), in PR [#1286](https://github.com/microsoft/BotFramework-WebChat/pull/1286)
-  `core`: [Send typing indicator](https://microsoft.github.io/BotFramework-WebChat/07.b.customization-send-typing-indicator), in [#1541](https://github.com/microsoft/BotFramework-WebChat/pull/1541)
-  `component`: [Password input activity](https://microsoft.github.io/BotFramework-WebChat/10.b.customization-password-input/), in [#1569](https://github.com/microsoft/BotFramework-WebChat/pull/1569)
-  `*`: Updated [minimizable Web Chat](https://microsoft.github.io/BotFramework-WebChat/12.customization-minimizable-web-chat/) sample to use `WEB_CHAT/SEND_EVENT` action, in [#1631](https://github.com/microsoft/BotFramework-WebChat/pull/1631)
-  `component`: [Hybrid speech engine](https://microsoft.github.io/BotFramework-WebChat/06.f.hybrid-speech/), in [#1617](https://github.com/microsoft/BotFramework-WebChat/pull/1617)
-  `component`: Use Speech Services token for [speech UI sample](https://microsoft.github.io/BotFramework-WebChat/13.customization-speech-ui/), in [#1634](https://github.com/microsoft/BotFramework-WebChat/pull/1634)
-  `component`: [Selectable Activity](https://microsoft.github.io/BotFramework-WebChat/16.customization-selectable-activity/), in [#1624](https://github.com/microsoft/BotFramework-WebChat/pull/1624)
-  `component`: [Chat Send History](https://microsoft.github.io/BotFramework-WebChat/17.chat-send-history/), in [#1678](https://github.com/microsoft/BotFramework-WebChat/pull/1678)
-  `*`: Update `README.md`'s for samples 05-10 [#1444](https://github.com/microsoft/BotFramework-WebChat/issues/1444) and improve accessibility of anchors [#1681](https://github.com/microsoft/BotFramework-WebChat/issues/1681), by [@corinagum](https://github.com/corinagum) in PR [#1710](https://github.com/microsoft/BotFramework-WebChat/pull/1710)
-  `component`: [Customizing open URL behavior](https://microsoft.github.io/BotFramework-WebChat/18.customization-open-url), in PR [#1704](https://github.com/microsoft/BotFramework-WebChat/pull/1704)

## [4.2.0] - 2018-12-11

### Added

-  Build: Development build now include instrumentation code, updated build scripts
   -  `npm run build` will build for development with instrumentation code
   -  `npm run prepublishOnly` will build for production
   -  `npm run watch` will also run Webpack in watch loop
-  Build: Automated testing using visual regression testing technique in [#1323](https://github.com/microsoft/BotFramework-WebChat/pull/1323)
   -  [Docker-based](https://github.com/SeleniumHQ/docker-selenium) automated testing using headless Chrome and [Web Driver](https://npmjs.com/packages/selenium-webdriver)
   -  Screenshot comparison using [`jest-image-snapshot`](https://npmjs.com/packages/jest-image-snapshot) and [`pixelmatch`](https://npmjs.com/package/pixelmatch)
   -  Code is instrumented using [`istanbul`](https://npmjs.com/package/istanbul)
   -  Test report is hosted on [Coveralls](https://coveralls.io/github/compulim/BotFramework-WebChat)
-  Added French localization, by [@tao1](https://github.com/tao1) in PR [#1327](https://github.com/microsoft/BotFramework-WebChat/pull/1327)
-  Fix [#1344](https://github.com/microsoft/BotFramework-WebChat/issues/1344), by updating `README.md` and adding validation logic for `userID` props, in [#1447](https://github.com/microsoft/BotFramework-WebChat/pull/1447)
   -  If `userID` props present and also embedded in Direct Line token, will use the one from Direct Line token
   -  If `userID` props present, they must be string and not prefixed with `dl_`, to avoid confusion between `userID` props and Direct Line embedded user ID (which is forgery-proof)
   -  If `userID` props does not pass the validation test or not specified, Web Chat will use `default-user` instead
-  Added support for Cognitive Services Speech to Text and Text to Speech in PR [#1442](https://github.com/microsoft/BotFramework-WebChat/pull/1442)

### Changed

-  Core: Saga will run after custom middleware, in [#1331](https://github.com/microsoft/BotFramework-WebChat/pull/1331)
   -  Custom middleware run before saga to allow user to modify default behavior
-  Build: Bump dependencies, in [#1303](https://github.com/microsoft/BotFramework-WebChat/pull/1303)
   -  `@babel`
      -  `@babel/cli@7.1.2`
      -  `@babel/core@7.1.2`
      -  `@babel/plugin-proposal-class-properties@7.1.0`
      -  `@babel/plugin-proposal-object-rest-spread@7.0.0`
      -  `@babel/plugin-transform-runtime@7.1.0`
      -  `@babel/preset-env@7.1.0`
      -  `@babel/preset-react@7.0.0`
      -  `@babel/preset-typescript@7.1.0`
      -  `@babel/runtime@7.1.2`
   -  `concurrently@4.0.1`
   -  `jest`
      -  `babel-jest@23.6.0`
      -  `jest@23.6.0`
      -  `ts-jest@23.10.4`
   -  `typescript@3.1.6`
   -  `webpack`
      -  `webpack@4.24.0`
      -  `webpack-command@0.4.2`
-  Fix Russian localization by [@odysseus1973](https://github.com/odysseus1973) in PR [#1377](https://github.com/microsoft/BotFramework-WebChat/pull/1377)

### Fixed

-  Fix [#1397](https://github.com/microsoft/BotFramework-WebChat/issues/1397). Patched activities without `from` field, in PR [#1405](https://github.com/microsoft/BotFramework-WebChat/pull/1405)
-  Fix [#1237](https://github.com/microsoft/BotFramework-WebChat/issues/1237). Added new sample called `migration`, by [@corinagum](https://github.com/corinagum) in PR [#1398](https://github.com/microsoft/BotFramework-WebChat/pull/1398)
-  Fix [#1332](https://github.com/microsoft/BotFramework-WebChat/issues/1332). Updated sample names and add table to README, by [@corinagum](https://github.com/corinagum) in PR [#1435](https://github.com/microsoft/BotFramework-WebChat/pull/1435)
-  Fix [#1125](https://github.com/microsoft/BotFramework-WebChat/issues/1125). Added error handling for Adaptive Card JSON render, by [@corinagum](https://github.com/corinagum) in PR [#1395](https://github.com/microsoft/BotFramework-WebChat/pull/1395)
-  Build: Webpack watch mode now emits non-minified code for shorter dev RTT, in [#1331](https://github.com/microsoft/BotFramework-WebChat/pull/1331)

### Samples

-  Backchannel: [Inject custom data into every `POST_ACTIVITY`](https://microsoft.github.io/BotFramework-WebChat/15.backchannel-piggyback-on-outgoing-activities/), in [#1331](https://github.com/microsoft/BotFramework-WebChat/pull/1331)
-  UI: [Minimizable Web Chat](https://microsoft.github.io/BotFramework-WebChat/12.customization-minimizable-web-chat/), in [#1290](https://github.com/microsoft/BotFramework-WebChat/pull/1290)
-  Others: [Using Web Chat v3](https://microsoft.github.io/BotFramework-WebChat/webchat-v3/), in [#1287](https://github.com/microsoft/BotFramework-WebChat/pull/1287)
-  Speech: [Cognitive Services Speech to Text and Text to Speech](https://github.com/microsoft/BotFramework-WebChat/tree/master/samples/06.c.cognitive-services-speech-services-js) (both subscription key and authorization token flow)
-  Speech: [Cognitive Services Speech to Text using lexical result](https://github.com/microsoft/BotFramework-WebChat/tree/master/samples/06.e.cognitive-services-speech-services-with-lexical-result) (text normalization)

## [4.1.0] - 2018-10-31

### Added

-  Initial release of Web Chat v4
