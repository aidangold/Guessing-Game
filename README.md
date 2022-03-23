# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aidan Goldstein**

Time spent: **10** hours spent in total

Link to project: https://prickly-swamp-rhodium.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- Sweet background and Amongus themed gameplay.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - https://www.myinstants.com/search/?name=amongus (for Amongus Sounds)
    - https://stackoverflow.com/questions (for simple JS formatting)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    - While creating this project I found an issue regarding having the desired audio I wanted to be played on various browsers. I was able to overcome this issue with debugging my code and ensuring that all named html tags were the same as was being utilized by the JavaScript file. In addition to this I was having an issue with how to figure out how to have the order of picked buttons to be random and linked to the start button. At first it was just when you refreshed the page, but I was able to do some research and find out how to have it set to run that random function when the start button was clicked. There was also a small issue I was regarding the size of image I had for the active button not being all the same size, I was able to solve this by using the ‘cover’ parameter in CSS and editing the images I found to be a similar resolution and size. This allowed the transparent photos to have the color of the button still show behind it while showing the image itself. I think having projects like this to work your way through is one of the best ways to learn, having to debug and problems solve on actual programs is helpful. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    - I would like to learn more about the various libraries that I could use with JavaScript, how these libraries are selected and how they are built. In addition to this some more knowledge regarding web design would be very helpful to have a more appealing website and UI. I also have questions about the best techniques of web development, and how to fully utilize the latest HTML5 and CSS languages, I am sure there are many more features that I would be able to implement in the future. There are so many facets of information in front-end development I would be great to participate in a program like SITE to get a better foundation.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    - If I were to spend a few more hours on this project I would spend my time to have all custom sounds that were not random instead of the custom frequency tones that played when the buttons were activated. I would also have a few options for games you could play, maybe add difficulties that all started from a different speed and increased at different rates, this can be something I even do in the next little while for some practice with JavaScript. I also would like to have better fonts and 3d like text for this website. I was looking into having some custom text for it but I did not want to mess up and have a buggy title and message, also I didn’t want to just copy an existing block to have the font and effect without learning it.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/19LoqET0c5ZPTHWZZmQy5TpVXQzbAiK_Q/view?usp=sharing)


## License

    Copyright Aidan Goldstein

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
