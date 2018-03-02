# Bra Size Calculator
:bikini: React Capstone, _Epicodus_.

Amy Churchwell Feb. 23 - 2018.

:email: amy.churchwell@gmail.com

## Project Description

**Minimum Viable Product**

List the absolute *minimum features* the project requires to meet this purpose or goal:

* Input measurements, output suggested sizes.
* Output formatted in intuitive UI.

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

* [Bratabase, API.](http://developers.bratabase.com/)
* [Bratabase, GitHub.](https://github.com/bratabase)
* [/r/ABraThatFits, Reddit Community.](https://www.reddit.com/r/ABraThatFits/wiki/bradata)

**Stretch Goals**

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

* **Best brand suggestions for determined user size.**
* **Save results.**
* Brand suggestions for uncommon sizing.
* Consideration for ‘assigned male at birth’ bra needs.
* Possibly binders.

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

* Exploration of Bratabase API to see what JSON data is available.

* If Bratabase fails to meet extended needs, find an additional API or create own API.

## Setup

Install XCODE for iOS simulator.

```
$ react-native run-ios
```

## Layout

![landing page](https://raw.githubusercontent.com/amychurchwell/Bra-Size-Calculator/master/src/assets/landingpage_mockup.png)

:pushpin: **v.2**: Utilized Adobe XD to create more detailed layout views.

**v.1**: /Brands is color-coded yellow because it is a stretch goal feature. Consideration for more stretch goal features such as brands and saving results will happen once MVP is reached.

## Component Tree

![component tree](https://raw.githubusercontent.com/amychurchwell/Bra-Size-Calculator/master/src/assets/componenttree_v2.png)

:pushpin: **v.2**: Reconsidered component tree without state for now. Results is no longer a child component of (newly renamed) SizeSurvey even though they will share information.

**v.1**: Components that require state have been highlighted in red. This tree will be edited going forward, something tells me it's a little off.

## Process

**3/2/18:** I believe this project will be more impactful as a react-native application. This morning I am finishing a native todo list tutorial: [project repo](https://github.com/amychurchwell/React-Native-Todo)

**Static Version**. A static version of site structure utilizing only functional components, hard-coding any data later received from an API.

**Minimum Representation of UI State**.

**Lifting State.**

**Inverse Data Flow.**

## Known Bugs


## Technology

This project was bootstrapped with React Native CLI.

## Special Thanks

* Thank you to the amazing community at [/r/ABraThatFits](https://www.reddit.com/r/ABraThatFits/) who inspired this project.
Special recognition to their current [bra size calculator](http://abrathatfits.org/calculator.php) mainted by /u/goodoldfreda.

* JJ ([GitHub](https://github.com/jjdelc)) over at [Bratabase.com](http://bratabase.com) which has been an incredible resource. Thank you.
