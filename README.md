# Guardpulse

## Problem (Community First Responders)

There is an increasing number of elderly living alone at home. The Department of Statistics estimates that 83000 elderly persons (aged 65 and up) will be living alone by 2030 compared to 47000 in 2016. [(Source)](https://www.todayonline.com/voices/more-seniors-living-alone-knowing-and-caring-our-neighbours-should-be-norm).

This group is extremely vulnerable to accidents at home, since there is often nobody checking up on them. In some cases, the lack of monitoring results in avoidable deaths. [(Source)][https://www.channelnewsasia.com/news/cnainsider/when-someone-dies-alone-singapore-this-is-what-happens-seniors-12498032]

However, there is currently no feasible way to watch over these elderly to provide them with rapid treatment. In addition, it will be extremely manpower-intensive for SCDF to keep track of these elderly, triage medical cases and treat them using Emergency Medical Services.

## Solution

We developed GuardPulse, an IoT and AI platform that enables the automatic detection of accidents. The first layer of GuardPulse is a network of IoT devices in the homes of the elderly. Firstly, passive infra-red motion detectors (similar to those found in intruder alarms) are installed in each room. These enable us to track movements without invading on the privacy of residents. Additionally, a smart home speaker system like Amazon Echo is installed. The Amazon Echo is customized to respond to distress calls or loud noises that could indicate and emergency. It is a cheap and effective device that does not record any audio until such triggers are detected, mantaining privacy.  Data from these devices is transmitted to the Guardpulse cloud, which uses deep learning to detect accidents.

Once the GuardPulse AI determines that an accident has occured, GuardPulse takes appropriate actions based on its prediction of the accident type. SCDF will be informed via the GuardPulse Dashboard. In addition, community first responders will be automatically activated and sent the location and nature of the emergency. At this point, SCDF EMS is not automatically activated unless the AI has determined that urgent help is necessary. Thereafter, GuardPulse uses a chatbot to kee

## Architecture

GuardPulse is built on a Node-RED instance on IBM Cloud. Our Node-RED implementation pulls data from the IoT devices installed in the homes of the elderly, and sends them to IBM's artificial intelligence platform, which analyzes the data and deduces the accident that has occured. Thereafter, we use IBM Watson's chatbot and text-to-speech to call and text the patient and various assets, including nearby Community First Responders. This allows us to effectively activate these resources by providing them with instructions as well as allowing them to relay information back to GuardPulse. Finally, all chat and phone interactions are analyzed using Watson Machine Learning, allowing automatic resolution or escaltion of the incident. 


## Running the app

Install dependencies:
`npm install`

Run the app:
`npm run develop`
