---
title: DIY Keyboard - Project Heimdall
layout: home
nav_order: "0"
parent: Projects
---
# Project Heimdall
<img src="/img/thumbnail-v1.png" alt="ProjectHeimdall"/>
This was my first dive into building DIY mechanical keyboards, and needless to say, it was a huge undertaking. As such, there were so many different videos, wiki's and Discord channels as well as prior knowledge that all came together to allow me to build this keyboard, so I'll do my best to build out a comprehensive list of my sources, but keep in mind it will be constantly growing.

# Getting Started
So, you want to design a custom keyboard from scratch? Well, let's assume (like me) that you don't know the first thing about designing a custom keyboard from scratch. In that case, where do you start?

Well first, let's take stock of what knowledge you'll need to gain in order to complete this project:

### PCB Design
- You’ll need to be comfortable designing your own printed circuit board (PCB) — this is what connects all your switches, microcontroller, and components together. That means learning a tool like KiCad or EasyEDA, understanding switch footprints, matrix wiring, and how to place diodes and connectors correctly.
  
### 3D Design
- Next, you’ll need a case to hold everything. That means diving into 3D modeling software like Fusion 360 or FreeCAD to design a custom enclosure that fits your PCB, supports your switches, and ideally looks awesome on your desk.
  
### Firmware
- Once your hardware is built, it won’t do anything unless you program it. That’s where firmware like QMK or ZMK comes in. You’ll need to learn how to configure your keymap, define layers, and tell the microcontroller how to talk to the rest of the keyboard.

### Where I started
- **PCB Design**
	- I had designed several PCB's up to this point, but nothing more complicated than connecting some traces between through hole components. Definitely nothing with any SMD components, and I have only ever glanced at datasheets (only to become overwhelmed and immediately close them).
- **3d design**
	- While I am certainly not "gifted" in this category, I have to admit I have some formal training in CAD from my early days of College as a mechanical engineer. 
- **Firmware**
	- This is the category that I am most comfortable in, which is lucky as that's my day job. However, I don't have experience writing QMK and I haven't written C code in like 8 years, so I still had many things to learn.

# Useful Links
## Video Guides
- [https://www.youtube.com/watch?v=7azQkSu0m_U](https://www.youtube.com/watch?v=7azQkSu0m_U)
- [https://www.youtube.com/watch?v=iznKltVU1yw](https://www.youtube.com/watch?v=iznKltVU1yw)
- [https://www.youtube.com/watch?v=kGKN8SGkUD0](https://www.youtube.com/watch?v=kGKN8SGkUD0)

## Guides
- [https://github.com/ruiqimao/keyboard-pcb-guide?tab=readme-ov-file#setting-up](https://github.com/ruiqimao/keyboard-pcb-guide?tab=readme-ov-file#setting-up)
- [https://www.reddit.com/r/MechanicalKeyboards/comments/5nzpd2/guide_how_to_make_your_own_keyboard_pcb/](https://www.reddit.com/r/MechanicalKeyboards/comments/5nzpd2/guide_how_to_make_your_own_keyboard_pcb/)

## KiCad Parts Libraries
- [https://github.com/tmk/kicad_lib_tmk](https://github.com/tmk/kicad_lib_tmk)
- [https://github.com/tmk/keyboard_parts.pretty](https://github.com/tmk/keyboard_parts.pretty)
- [https://github.com/egladman/keebs.pretty](https://github.com/egladman/keebs.pretty)

## Common MCU Datasheets
- [RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf?ref=ohmbedded.com)
- [STM32F072CBT6](https://www.st.com/resource/en/datasheet/stm32g474cb.pdf)
## Everything Else
- [https://i.imgur.com/ajqxJWz.png](https://i.imgur.com/ajqxJWz.png)
- [https://github.com/NCKiser/STM32F072_template](https://github.com/NCKiser/STM32F072_template)
- [https://github.com/Zambumon/SKUF](https://github.com/Zambumon/SKUF)
- [https://maxkeyboard.com/ansi-layout-custom-color-cherry-mx-keycap-set.html](https://maxkeyboard.com/ansi-layout-custom-color-cherry-mx-keycap-set.html)
- [https://yuzukeycaps.com/](https://yuzukeycaps.com/)
- [https://www.google.com/search?q=monport+auto+focus+adjust&rlz=1C5GCEM_en&oq=monport+auto+focus+adjust&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEINTE0NWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8](https://www.google.com/search?q=monport+auto+focus+adjust&rlz=1C5GCEM_en&oq=monport+auto+focus+adjust&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEINTE0NWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8)
- [https://amzn.to/3XczB5T](https://amzn.to/3XczB5T)
- [https://keyboard-tools.xyz/](https://keyboard-tools.xyz/)
- [https://docs.qmk.fm/custom_quantum_functions](https://docs.qmk.fm/custom_quantum_functions)
- [https://github.com/getreuer/qmk-keymap?tab=readme-ov-file](https://github.com/getreuer/qmk-keymap?tab=readme-ov-file)
- [https://plate.keeb.io/](https://plate.keeb.io/)
- [https://discord.com/channels/728571839529353216/1040846204856193154/1040846268945145866](https://discord.com/channels/728571839529353216/1040846204856193154/1040846268945145866)
- [https://hackaday.com/2023/08/07/all-about-usb-c-example-circuits/](https://hackaday.com/2023/08/07/all-about-usb-c-example-circuits/)
- [https://github.com/daprice/keyswitches.pretty?tab=readme-ov-file](https://github.com/daprice/keyswitches.pretty?tab=readme-ov-file)
- [https://kicanvas.org/](https://kicanvas.org/)
- [https://kbplate.ai03.com/](https://kbplate.ai03.com/)
- [https://www.etsy.com/listing/549370705/custom-sublimation-transfers-sizes-up-to?ref=yr_purchases](https://www.etsy.com/listing/549370705/custom-sublimation-transfers-sizes-up-to?ref=yr_purchases)
- [https://github.com/Maximillian/keycap-set-templates?tab=readme-ov-file](https://github.com/Maximillian/keycap-set-templates?tab=readme-ov-file)
- [https://www.reddit.com/r/olkb/comments/1bvyo0j/oled_screen_wont_work_qmk/](https://www.reddit.com/r/olkb/comments/1bvyo0j/oled_screen_wont_work_qmk/)
- [https://github.com/kitspace/awesome-electronics](https://github.com/kitspace/awesome-electronics)
- [https://blog.keeb.io/getting-the-iris-ce-compact-edition-ready-for-you/](https://blog.keeb.io/getting-the-iris-ce-compact-edition-ready-for-you/)

----
