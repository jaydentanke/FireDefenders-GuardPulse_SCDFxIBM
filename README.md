# Guardpulse

## Problem (Community First Responders)

There is an increasing number of elderly living alone at home. The Department of Statistics estimates that 83000 elderly persons (aged 65 and up) will be living alone by 2030 compared to 47000 in 2016. [(Source)](https://www.todayonline.com/voices/more-seniors-living-alone-knowing-and-caring-our-neighbours-should-be-norm).

This group is extremely vulnerable to accidents at home, since there is often nobody checking up on them. In some cases, the lack of monitoring results in avoidable deaths. [(Source)][https://www.channelnewsasia.com/news/cnainsider/when-someone-dies-alone-singapore-this-is-what-happens-seniors-12498032]

However, there is currently no feasible way to watch over these elderly to provide them with rapid treatment. In addition, it will be extremely manpower-intensive for SCDF to keep track of these elderly, triage medical cases and treat them using Emergency Medical Services.

## Solution

We developed GuardPulse, an IoT and AI platform that enables the automatic detection of accidents. The first component of GuardPulse is a network of IoT devices in the homes of the elderly. This network of motion detectors and distress call detectors enable us to ascertain when accidents have occured. 

Once the GuardPulse AI determines that an accident has occured, GuardPulse takes appropriate actions based on its prediction of the accident type. Firstly, SCDF will be able to keep track of these cases via the GuardPulse Dashboard. 

Concurrently, multiple actions are performed automatically by GuardPulse
* Computer-generated call to patient's mobile phone or home line in his registered langauge using machine translation
* Activate Community First Responder and start chatbot with community first responder in myResponder
* Continued analysis of all calls and chats to update assessment of medical situation
* Provides reccomendation to 911 Operator based on data collected from IoT devices alone, or together with updates from call with patient and community first responder.
 
Community first responders will be automatically activated and sent details of the detected emergency. Thereafter, GuardPulse uses a chatbot to communicate with the CFR and ask about the situation of the patient. By analyzing the conversation between the chatbot and the CFR using IBM Watson Machine Learning, GuardPulse either escalates the situation to a medical emergency or de-escalates to a non-emergency.

## Architecture

GuardPulse is built on a Node-RED instance on IBM Cloud. Our Node-RED implementation pulls data from the IoT devices installed in the homes of the elderly, and sends them to IBM's artificial intelligence platform, which analyzes the data and deduces the accident that has occured. Thereafter, we use IBM Watson's chatbot and text-to-speech to call and text the patient and various assets, including nearby Community First Responders. This allows us to effectively activate these resources by providing them with instructions as well as allowing them to relay information back to GuardPulse. Finally, all chat and phone interactions are analyzed using Watson Machine Learning, allowing automatic resolution or escaltion of the incident. 

## Detailed solution

## IoT accident detection system
Firstly, passive infra-red motion detectors (similar to those found in intruder alarms) are installed in each room. These enable us to track movements without invading on the privacy of residents. Additionally, a smart home speaker system like Amazon Echo is installed. The Amazon Echo is customized to respond to distress calls or loud noises that could indicate and emergency. It is a cheap and effective device that does not record any audio until such triggers are detected, mantaining privacy.  Data from these devices is transmitted to the Guardpulse cloud, which uses deep learning to detect accidents.

## Running the app

1. Install node
2. Install npm

Run the following commands after cloning
`npm install
npm run develop`

Go to locahost:3000

## Technologies used

- IBM Cloud (hosting application)
- IBM-hosted Node-RED (for connecting IoT, GuardPulse Dashboard and IBM AI services)
- nodejs (application runtime)
- IBM Watson Chatbot (communicating with CFRs)
- IBM Watson Machine Learning (detecting falls)
- IBM Watson text-to-speech (for calling elderly that are suspected to have an accident automatically in multiple languages)
