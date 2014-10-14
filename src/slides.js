var slideShow = {
0: 'Interfacing: How we interact with computers.<br><br>Input: keyboard, mouse, touchscreen, digital pen, trackball, webcam, fingerprint scanner, magnetic stripe reader, refreshable braille display.<br><br>Output: Monitor, Refreshable braille display, speakers, haptic devices.<br><br>Obscure devices: dance pads, gloves, wii remote (pointer and acceleramoter), neuro-input.',


15: '(1984): "Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts... A graphic representation of data abstracted from the banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding..." <br><br>-- William Gibson, Neuromancer',


45: 'We tend to think of HIDs as allowing us \'real\' people to go in to the \'fake\' digital world, but those lines are blurring very quickly, and there are already many people around us who have more robust digital lives than organic lives.</h3><center><img src="img/wow.jpg"></center><h3>',


60: 'Wearables, AKA body-borne computers: currently small and specialized, featuring constant interaction with the user. This emulates a direct interface with the digital world.<br><br>FitBit, The Dash, Google Glass</h3><center><img src="img/glass.jpg"></center><h3>',


75: 'Wearable applications:<br><br>mobile computing, ubiquitious computing; also ambient intelligence and interesting personal network applications...<br><br>But we\'ll get to the Internet of Things later.',


90: 'Prosthetics: nearly every major human body system now has some kind of prosthesis for it:<br><br>visual, auditory, sensory (pain relief), motor control, bladder control, heartbeat regulation, cognitive prostheses...</h3><center><img src="img/pacemaker.jpg"></center><h3>',


105: 'Robotic prostheses rely on biosensors to collect and send data from the user\'s body (skin, muscles, or nerves), to the device. There is often a degree of training involved in mastery, just like getting a new organic limb.</h3><center><img src="img/robotArm.jpg"></center><h3>',


120: 'Artificial limbs are quickly becoming robotic prostheses.<br><br>"A myoelectric prosthesis uses electromyography signals or potentials from voluntarily contracted muscles within a person\'s residual limb on the surface of the skin to control the movements of the prosthesis, such as elbow flexion/extension, wrist supination/pronation (rotation) or hand opening/closing of the fingers. A prosthesis of this type utilizes the residual neuro-muscular system of the human body to control the functions of an electric powered prosthetic hand, wrist or elbow"</h3><center><img src="img/roboHand.jpg"></center><h3>',


135: '"Targeted muscle reinnervation (TMR) is a technique in which motor nerves, which previously controlled muscles on an amputated limb, are surgically rerouted such that they reinnervate a small region of a large, intact muscle, such as the pectoralis major. As a result, when a patient thinks about moving the thumb of his missing hand, a small area of muscle on his chest will contract instead. By placing sensors over the reinervated muscle, these contractions can be made to control movement of an appropriate part of the robotic prosthesis"',


150: 'Neuroprosthetics are a whole field of their own. Biosensors extend organic functionality instead of restoring or correcting/normalizing it.<br><br>Applications: social, entertainment, educational, medical, and, of course, financial and military.',


165: 'One example I love: Kevin Warwick: http://www.kevinwarwick.com/.<br><br>Mad scientist-style: got a "neuro-surgical implantation of a device (Utah Array/BrainGate) into the median nerves of his left arm in order to link his nervous system directly to a computer".<br><br>He then controlled a robotic arm as if it were his own in the US while he was in London!</h3><center><img src="img/armSensor.jpg"></center><h3>',


180: 'He followed this up by implanting a similar (but better) chip in a colleague (it might have been his wife, actually), and - leveraging the fact that he could *receive input* as well as control output - successfully completed the first ever <strong>purely electronic communication between the nervous systems of 2 autonomous humans!</strong> All this was done with shockingly cheap off-the-shelf electronics... in 2002.',


195: 'This is all leading to an exciting thing: The Internet Of Things.<br><br>"interconnection of uniquely identifiable embedded computing-like devices within the existing Internet infrastructure"<br><br>Basically a data cloud of communication between all available devices, like your FitBit, phone, RFID Clipper Card, etc.',


210: 'The Internet of Things is special! It\'s not just a collection of devices, but a dynamic network that is, for all intents and purposes, evolving. According to "Gartner", by 2020 there will be 26 billion devices on the Internet of Things.</h3><center><img src="img/internet-of-things.jpg"></center><h3>',


225: 'There are huge financial opportunities here. (Futurama). There are also awesome social networking opportunities.<br><br>... and terrifying security risks. Neal Stephenson\'s book Snow Crash features an immersive VR-like internet where some cracker releases a virus that hacks humans. It\'s not a crazy idea - really, it\'s a matter of time.</h3><center><img src="img/snowcrash.jpg"></center><h3>',


240: 'Finally, there is enormous potential for medicine, education, and behavior modification...<br><br>Let\'s see how our player did!'


// 255: ''

}; // end slides


// var slideShow = {
// 0: 'Interfacing: How we interact with computers.<br><br>Input: keyboard, mouse, touchscreen, digital pen, trackball, webcam, fingerprint scanner, magnetic stripe reader, refreshable braille display.<br><br>Output: Monitor, Refreshable braille display, speakers, haptic devices.<br><br>Obscure devices: dance pads, gloves, wii remote (pointer and acceleramoter), neuro-input.',


// 60: '(1984): "Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts... A graphic representation of data abstracted from the banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding..." <br><br>-- William Gibson, Neuromancer',


// 180: 'We tend to think of HIDs as allowing us \'real\' people to go in to the \'fake\' digital world, but those lines are blurring very quickly, and there are already many people around us who have more robust digital lives than organic lives.</h3><center><img src="img/wow.jpg"></center><h3>',


// 240: 'Wearables, AKA body-borne computers: currently small and specialized, featuring constant interaction with the user. This emulates a direct interface with the digital world.<br><br>FitBit, The Dash, Google Glass</h3><center><img src="img/glass.jpg"></center><h3>',


// 300: 'Wearable applications:<br><br>mobile computing, ubiquitious computing; also ambient intelligence and interesting personal network applications...<br><br>But we\'ll get to the Internet of Things later.',


// 360: 'Prosthetics: nearly every major human body system now has some kind of prosthesis for it:<br><br>visual, auditory, sensory (pain relief), motor control, bladder control, heartbeat regulation, cognitive prostheses...</h3><center><img src="img/pacemaker.jpg"></center><h3>',


// 420: 'Robotic prostheses rely on biosensors to collect and send data from the user\'s body (skin, muscles, or nerves), to the device. There is often a degree of training involved in mastery, just like getting a new organic limb.</h3><center><img src="img/robotArm.jpg"></center><h3>',


// 480: 'Artificial limbs are quickly becoming robotic prostheses.<br><br>"A myoelectric prosthesis uses electromyography signals or potentials from voluntarily contracted muscles within a person\'s residual limb on the surface of the skin to control the movements of the prosthesis, such as elbow flexion/extension, wrist supination/pronation (rotation) or hand opening/closing of the fingers. A prosthesis of this type utilizes the residual neuro-muscular system of the human body to control the functions of an electric powered prosthetic hand, wrist or elbow"</h3><center><img src="img/roboHand.jpg"></center><h3>',


// 540: '"Targeted muscle reinnervation (TMR) is a technique in which motor nerves, which previously controlled muscles on an amputated limb, are surgically rerouted such that they reinnervate a small region of a large, intact muscle, such as the pectoralis major. As a result, when a patient thinks about moving the thumb of his missing hand, a small area of muscle on his chest will contract instead. By placing sensors over the reinervated muscle, these contractions can be made to control movement of an appropriate part of the robotic prosthesis"',


// 600: 'Neuroprosthetics are a whole field of their own. This brings us to territory where biosensors extend organic functionality instead of restoring or correcting/normalizing it.<br><br>Applications: social, entertainment, educational, medical, and, of course, financial and military.',


// 660: 'One example I love: Kevin Warwick: http://www.kevinwarwick.com/.<br><br>Mad scientist-style: got a "neuro-surgical implantation of a device (Utah Array/BrainGate) into the median nerves of his left arm in order to link his nervous system directly to a computer".<br><br>He then controlled a robotic arm as if it were his own in the US while he was in London!</h3><center><img src="img/armSensor.jpg"></center><h3>',


// 720: 'He followed this up by implanting a similar (but better) chip in a colleague (it might have been his wife, actually), and, leveraging the fact that he could *receive input* as well as controll output, successfully completed the first ever purely electronic communication between the nervous systems of 2 autonomous humans! All this was done with shockingly cheap off-the-shelf electronics... in 2002.',


// 780: 'This is all leading to an exciting thing, called The Internet Of Things. This is the "interconnection of uniquely identifiable embedded computing-like devices within the existing Internet infrastructure" - basically a data cloud of communication between all available devices, like your FitBit, phone, RFID Clipper Card, etc.',


// 840: 'The Internet of Things is special because, as a concept, it\'s not just a collection of devices, but a dynamic network that is, for all intents and purposes, evolving. And we\'re close: According to "Gartner", by 2020 there will be 26 billion devices on the Internet of Things.</h3><center><img src="img/internet-of-things.jpg"></center><h3>',


// 900: 'There are huge financial opportunities here. (Futurama: Fry dreams about underwear and hears it\'s an advertisement). There are also awesome social networking opportunities. There might be terrifying security risks: Neal Stephenson\'s book Snow Crash features an immersive VR-like internet where some cracker releases a virus that hacks humans. It\'s not a crazy idea - really, it\'s a matter of time.</h3><center><img src="img/snowcrash.jpg"></center><h3>',


// 960: 'Finally, there is enormous potential for medicine, education, and behavior modification...<br><br>Let\'s see how our player did!'


// // 255: ''

// }; // end slides


