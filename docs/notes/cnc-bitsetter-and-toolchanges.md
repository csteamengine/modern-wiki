# Overview
- GRBL and UGS don't support the `T# M6` command. That command sets the tool number and sends M6 to pause the operation.
- `G43` sets the tool offset
- You can configure your CNC to automatically measure a bit length offset using a static touch probe
# How does it work
- Configure your CNC operation in Fusion (or your CAM software of choice)
- Configure the tool number for each tool in your library (They do have a default)
- POST the Gcode file with M6 enabled
- T