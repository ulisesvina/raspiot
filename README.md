# Raspiot

**Raspiot** is a web application to control GPIO pins on the Raspberry Pi using a friendly UI/UX, made on Node JS.



### Why?

Normally, all the Raspberry Pi projects are made with Python, and are not friendly at all. Raspiot lets you control every aspect of your GPIO programmable pins on your Raspberry Pi.



### Compatibility

Raspiot relies on the `rpi-gpio` module, meaning it shares the compatibility with it

#### Node Version + Module (Software)

| Node version | rpi-gpio 1.x | rpi-gpio 2.x + |
| ------------ | ------------ | -------------- |
| 0.10         | **✅**        | ❌              |
| 0.12         | **✅**        | ❌              |
| 4            | **✅**        | **✅**          |
| 6            | **✅**        | **✅**          |
| 8            | **✅**        | **✅**          |
| 10           | ❌            | **✅**          |
| 12           | ❌            | **✅**          |
| 14           | *not tested* | **✅**          |
| 15           | *not tested* | **✅**          |

#### Raspberry board (Hardware)

Boards supported:

- Raspberry Pi 1 (Models: A/A+/B/B+)
- Raspberry Pi 2 Model B
- Raspberry Pi 3 Model B
- Raspberry Pi 4 Model B
- Raspberry Pi Zero (and Zero W)



### Installation & Deployment

This web application can be cloned & deployed with the NPM scripts. Here's a brief walkthrough on how to do it:

**Clone the repository on the desired location (you have to CD to there first)**

`git clone https://github.com/ulisesvina/raspiot.git`

**CD into the cloned repository**

`cd raspiot`

**Install the NPM dependencies**
`npm i`

**Run the NPM scripts provided, depending on the desired behavior**

`npm run (script)`

| Script       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| devel        | Runs over Nodemon on the default development port (8080), on a local network. |
| deploy-local | Runs over normal Node, on the default deployment port (80), on a local network. |
| deploy       | Runs over Ngrok on the default deployment port and returns you on console the Ngrok URL, this is ran on a local network but can be accessed anywhere. |
