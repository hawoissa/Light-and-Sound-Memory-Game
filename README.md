# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Hawo Issa

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/unique-beneficial-silver
Live Site: https://unique-beneficial-silver.glitch.me

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
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Play sequence repeats itself after user makes mistake

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Game Won

![](https://i.imgur.com/HqM1DsM.gif)

Game Lost

![](https://i.imgur.com/3ITksqG.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- W3 Schools
- Codecademey Cheatsheets
    - HTML, CSS, JavaScript
- StackOverflow

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I have no experience in JavaScript, but I have some experience with HTML and CSS. So a challenge for me was implementing JavaScript to make the website interactive. The biggest JavaScript challenge was setting a timer. I wanted a timer for each turn that consisted of 10 seconds. The timer also needed to reset after each sequence. Before coding the timer, I read up on some JavaScript code using W3 schools and the cheatsheets by Codecademy. I specifically read about the setInterval() and clearInterval() methods because I knew of their importance. I immediately ran into issues, but quickly solved them. However, one problem that did not go away is the timer not resetting after each sequence. After being stuck for a while, I solved this issue by creating one singular 60-second timer for the entire game. And will be reset after the game is over. A 60-second timer works because I wanted a 10-seconds for 6 different turns which results in 60 seconds.

To reset the timer, I created a resetTime() function. I implemented this timer in the loseGame() function. However, I quickly realized the timer will still count down when the user wins the game. So as I did with the loseGame() function, I added resetTime() to the wonGame() function. However, the code did not sit well with me, and after looking through my work, I found a way to better my code. Instead of placing the resetTime() function into two separate functions, I can add it to the stopGame() function that appears in both wonGame() and loseGame().

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing this project, I have been eyeing the web pages I find myself on. For example, how does the Facebook homepage work? There will be differences between the homepage and the prework assignment because one is a dynamic website and the other is static. But, just how different is a static website from a dynamic website? And what are the pros and cons of the two?

My other questions lie with the front-end part of web development. How far can CSS take HTML code to look like a modern website? What are the limits to CSS? How interactive can JavaScript make a website? If JavaScript can implement built-in code, can CSS or HTML do the same? How or can I tell the difference between a static and dynamic website from interacting with it? I also would like to know more about React, SQL, PHP, etc. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would add many things to this project, but I will discuss a few. I would first add difficulty levels such as easy, medium, and hard. The game will change the speed of the sequence and the number of the notes depending on the level. I will include a scoreboard for each level that showcases the users with the highest score. The time it took the user to win the game will determine the score. The lower the time, the higher the score. I would, furthermore, like to add images to the buttons, but I guess the game would have to change from the "Light and Sound Memory Game" to the "Light, Sound, and Image Memory Game."



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/a91700be69874110bfd888c522e96f3c)


## License

    Copyright [Hawo Issa]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
