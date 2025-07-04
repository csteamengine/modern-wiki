- Thinking vibration/shock sensors instead of sound, seems less likely to be triggered by other drums
- Daughter boards for each tom/snare that houses the shock sensor and LED output, and maybe aviation cables with pins for:
	- +5v
	- Gnd
	- LED Data Input
	- Shock Sensor output
- Motherboard that can connect to X amount of daughter boards and send different animations when triggered. 
- OLED display to show animation settings, sensitivity, etc...
	- Settings
		- Modes
			- Random Color - Each drum gets a different color
			- Solid Color - All drums the same color
			- Color Cycle - Each hit, the colors change
			- Velocity Mode - Blue, then Gets redder the faster you play
			- Metronome - pulses to a beat
			- Heat map - Redder to show the most played drums
		- Sensitivity
		- Fade Duration
		- Brightness
			- Max/Min settings so you can prevent the lights from ever going completely out if you want.
		- Metronome tempo

# Planned Features

### 💡 Signal Conditioning for Sensors
- Use a **low-pass filter** (resistor + capacitor) on the vibration sensor signal.
- Consider a **Schmitt trigger** or **op-amp comparator** to clean up bounces.
- Optionally include a **TVS diode or clamping diodes** to protect the analog input.

### 🔄 LED Data Handling
- If you're running lots of WS2812s:
    - Use **level shifters** (Teensy outputs 3.3 V; WS2812s expect 5 V).
    - Or, mount your first LED close enough to the Teensy and test at 3.3 V.

### 🧵 Cable Lengths & Termination

- Long data cables (LED or analog) might need **series resistors** (100 Ω) near the data source to prevent reflections.
- Keep **analog sensor signal lines** short or shielded if possible.

### 📟 OLED Display Suggestions
- Use a **128×64 I²C OLED** (like SSD1306 or SH1106) to save pins.
- Add a **rotary encoder** (with click) or joystick for a tactile UI.
- Consider a **basic menu system**: Mode > Edit > Back structure.

### 🔁 Expandability
- If you want this to scale beyond 6–8 drums:
    - Consider using a **multiplexer (e.g. CD74HC4067)** for analog inputs
    - Or daisy-chain sensor daughterboards using I²C or UART (future-proofing)

### 💾 Save/Load Configs
- Add EEPROM or use Teensy's flash to **persist user settings** like brightness or mode.
- Bonus: allow storing presets (e.g. different setups for songs).

# Hardware
MCU: [Teensy 4.1](https://www.sparkfun.com/teensy-4-1.html)
- Amazon link: https://a.co/d/eKl3nWE
Cables
- [4 Conductor Audio Cable - 22 awg](https://a.co/d/c5XqSRE)
Aviation Connectors
- [4 Pin GX-12 Connectors](https://a.co/d/fzi5WQ6)
RGB Wires/Sockets
- [JST-XH 3 pin](https://a.co/d/7NcoKhQ)

# 3d Printed Cases
- Motherboard
- Each Daughterboard
## Extras  To Consider Later

- 🎛️ **MIDI over USB** for syncing with DAWs or lighting rigs
- 📱 **Bluetooth or USB serial** config tool
- 🕵️‍♂️ **Debug/Test mode** with hit visualization on OLED
- 🌈 **Per-drum LED animations** (not just global)