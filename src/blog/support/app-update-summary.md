---
title: "App updates summery"
date: "2021-06-06"
auther: "@sternetIndustries"
auther_link: ""
uuid: "appUpdateSummery"
related_uuid: "how_to_install/linkAlexa"
banner_img: "support/appUpdateSummery/headerImage.png"
main_img: "support/testblog/blogPost1.png"
mdxTemplateType: "support"
---

# upcoming updates

`roadmap`

- [ ] device grouping within app
- [ ] ligh/dark theme support as per OS default
- [ ] port app builds to bare RN project
- [ ] smartConfig pairing setup for seamless pairing process
- [ ] RN library for wifi check during BGService loop
- [ ] music Sync with microphone

# ver2.2.3-beta

`June 10, 2021`

- [c6j23f fixed] `pairingScreen` continue without pairing fixed

# ver2.2.2-beta

`June 6, 2021`

- `controll-from-anywhere` actions are now live
- [#ae32f4 fixed] backend sync now working
- alexa Integration added environment
- [#aedd80 fixed] change close icon to `Done` phrase at deviceConfig screen

### ui improvements

<br></br>

- new device deleteScreen
  - added functionality for resetting hardware upon device delete action
  - ability to unlink device from cloud user's DB

# ver2.1.1-beta

`May 29, 2021`

- Controll from anywhere feature added
- bugfixes to local LAN/WLAN connectivity
- [#c2f31 - fixed] AuthAPI fails upon mqtt state being saved in device local storage

# ver2.0.4-beta

`May 24, 2021`

- [#b3a1d6 - fixed] android app crashes on pairing screen{lottie files replaced with supported versions}

# ver2.0.3-beta

`May 22, 2021`

### changelog

<br></br>

- device settings UI updated
- save last state toggle button introduced
- device Icons for device-card

- new test pairing screen introduces
- device menu options updated

### bugfix

<br></br>

- [#c26fe9 - closed] connectivity issue resolved (socket lost as app goes in background) {more on git}
- [#ao1296 - testing] timers appear n disappear un expectedly

### halts

<br></br>

- 2.0.3 compatability layer will freeze backend sync across devices untill next update
