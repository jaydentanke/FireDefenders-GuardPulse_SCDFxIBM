# Guardpulse

## About Us

Jayden Tan 
- Carnegie Mellon University Computer Science
- SCDF Medical Analytics during NS
- Software engineer intern at Stripe

Kenny Hu
- Carnegie Mellon University Information Systems
-  Medic in SAF during NS

## Slides

https://docs.google.com/presentation/d/1Nv_qDKJ8mrf8Lx608STURniC-rioaAYAj8XR5YSQlZ8/edit?usp=sharing
## Problem (Community First Responders)

There is an increasing number of elderly living alone at home. The Department of Statistics estimates that 83000 elderly persons (aged 65 and up) will be living alone by 2030 compared to 47000 in 2016. [Source](https://www.todayonline.com/voices/more-seniors-living-alone-knowing-and-caring-our-neighbours-should-be-norm).

This group is extremely vulnerable to accidents at home, since there is often nobody checking up on them. In some cases, the lack of monitoring results in avoidable deaths. [Source](https://www.channelnewsasia.com/news/cnainsider/when-someone-dies-alone-singapore-this-is-what-happens-seniors-12498032)

However, there is currently no feasible way to watch over these elderly to provide them with rapid treatment. In addition, it will be extremely manpower-intensive for SCDF to manually keep track of these elderly, coordinate community first responders , triage medical cases and treat them using Emergency Medical Services. In many cases, they may be non-emergency cases, placing unnecessary strain on ambulance forces.

## Solution

We developed GuardPulse, an IoT and AI platform that enables the automatic detection of accidents. The first component of GuardPulse is a network of IoT devices in the homes of the elderly. IoT devices inlcude motion detectors and distress call detectors (shouting for help or loud knocks) enable us to ascertain when accidents have occured. 

Once the GuardPulse AI determines that an accident has occured, GuardPulse will begin to take tiered actions to ascertain if the patient requires emergency medical services. Throughout the process, SCDF will be able to keep track of these cases via the GuardPulse Dashboard to provide manual intervention if necessaary.

Concurrently, multiple actions are performed automatically by GuardPulse to attempt to determine if the patient needs urgent medical assitance.
* Call to patient's mobile phone or home line to try to establish contact. This call is performed by a computer and can take place in any language using machine translation
* Amazon Echo smart home speaker is activated, asking patient if he needs help. Patient can issue commands to echo, including calling 911 or that he is fine.
### If there is no response on the above two channels, CFRs are activated
* Activate Community First Responde. Details of the incident are provided to the CFR. IBM Watson chatbot is used to prompt CFR to check on suspected patient and ask for real-time updates.
* Automatic analysis of all calls and chats to update assessment of medical situation without human intervention
* Provides reccomendation to 911 Operator based on data collected from IoT devices alone, or together with updates from call with patient and community first responder.
 
Throughout the process, there is minimal human intervetion from SCDF since most interactions are automated. Nevertheless, SCDF can track all the available information from IoTs and chats with CFR and patient through GuardPulse Dashboard, and intervene if necessary. This can be used to further train the AI and improve the intelligent incident handling.

## Architecture

GuardPulse is built on a Node-RED instance on IBM Cloud. Our Node-RED implementation pulls data from the IoT devices installed in the homes of the elderly, and sends them to IBM's artificial intelligence platform, which analyzes the data and deduces the accident that has occured. Thereafter, we use IBM Watson's chatbot and text-to-speech to call and text the patient and various assets, including nearby Community First Responders. This allows us to effectively activate these resources by providing them with instructions as well as allowing them to relay information back to GuardPulse. Finally, all chat and phone interactions are analyzed using Watson Machine Learning, allowing automatic resolution or escaltion of the incident. 

## Detailed solution

### IoT accident detection system
Firstly, passive infra-red motion detectors (similar to those found in intruder alarms) are installed in each room. These enable us to track movements without invading on the privacy of residents. Additionally, a smart home speaker system like Amazon Echo is installed. The Amazon Echo is customized to respond to distress calls or loud noises that could indicate and emergency. It is a cheap and effective device that does not record any audio until such triggers are detected, mantaining privacy.  Data from these devices is transmitted to the Guardpulse cloud, which uses deep learning to detect accidents.

### AI
We train AI to detect abnormal movement patterns in the house (lack of motion for sustained periods during the day, struggling on ground). Amazon Echo contains APIs that enable us to customize it to recognize calls for help in multiple langauges.

### Chatbot
We definted various chat interactions. A call to the patient will ask if the patient about his situation using a computer generated call in his mother tongue or english, and automatically analyze his response to update the medical assessment. If no response, CFR is activated and a chatbot prompts him to head to the patient location to check on patient. Using phone location services to determine when CFR has arrived on scene, chatbot automatically asks for update on patient, and analyzes the chat to update medical assesment. The natural language understanding is powered by IBM Watson ML platform.

## Running the app

1. Install node
2. Install npm

Run the following commands after cloning

`npm install`

`npm run develop`

Go to http://locahost:3000

## Technologies used

- IBM Cloud (hosting application)
- IBM-hosted Node-RED (for connecting IoT, GuardPulse Dashboard and IBM AI services)
- nodejs (application runtime)
- IBM Watson Chatbot (communicating with CFRs)
- IBM Watson Machine Learning (detecting falls)
- IBM Watson text-to-speech (for calling elderly that are suspected to have an accident automatically in multiple languages)
