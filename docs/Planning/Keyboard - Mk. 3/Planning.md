# Thoughts
- Creamy is the goal I think:
	- **Switches**
		- **Type:** Lubed linear switches ([Gateron Low Profile Red 2.0](https://www.gateron.co/products/gateron-low-profile-mechanical-switch-set)) 
		- **Modding:** Hand-lubed + [optional switch pads](https://kbdfans.com/products/kbdfans-switches-pads-2-versions?srsltid=AfmBOoptZHauGuXYJ7l-Q1lHE2x1i-Pt6qjrls7YjJZdpwHf8CYOd4Ru)
	- **Plate**
		- **Material:** Polycarbonate, POM, or FR4
	- **Mount Style**
		- **Preferred:** Gasket mount
	- **Case**
		- **Material:** Dense plastic (e.g., polycarbonate), wood (hardwoods), or aluminum (with damping)
		- I love the look of the acrylic bottom and aluminum top like my [Keebmonkey Macro pad](https://a.co/d/2MB5Fzj)
		- **Features:** Internally dampened, solid weight, no hollowness
	- **Dampening Materials**
		- **Case foam:** Reduces echo/hollow sound
		- **Plate foam:** Softens keystroke acoustics
		- **Switch pads:** Softens bottom-out impact
		- **Silicone/poron layers:** Absorb vibration and add plushness
- An aluminum or wooden case would be sweet
- Can't 3d print it, would be too wide.
	- Could mill it though, that'd be sweet. 
- #question Which footprints are compatible?
	- Are Kailh Choc and Gateron KS-33's compatible?
	- How bout those and the Cherry MXs or Gateron Normal profiles?
- #question do I even wanna go with low profiles? I think most people prefer normal and they feel/sound better
- 
# Design
- Thinking standard format with a qwerty layout, but instead of spacebar, thumb clusters
- Arrow keys below palm

# Names
- Dagr - literally means "day"
- Vidar - Silent vengeance
- Hávamál - Collection of proverbs and wisdom spoken by Odin
- Skald - Prophet or storyteller
- **Mist - One of the Valkyrie's names**

# Decisions
- MCU: Was going to do [STM32G474CETx](https://www.st.com/resource/en/datasheet/stm32g474cb.pdf), but it didn't have enough pins (with the LCD) so going to upgrade to the [STM32G474RETx](https://www.st.com/resource/en/datasheet/stm32g474cb.pdf)
- Switches: Going to design for KS-33 AND MX combined
	- Implemented by overlapping the footprints. It will cause some DRC errors, but it should be functional even with an LED. Pretty much requires a plate for stability though since the holes will be overlapping and not the proper size all the time.
- Keycaps: 
- Case:
- Layout: 