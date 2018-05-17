# Bra Size Calculator
:bikini: React Capstone, _Epicodus_.

Amy Churchwell Feb. 2018.

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
$ npm install
```

```
$ react-native run-ios
```

## Layout

:pushpin: **v.3** new IOS view coming soon.

**v.2**: Utilized Adobe XD to create more detailed layout views.

**v.1**: /Brands is color-coded yellow because it is a stretch goal feature. Consideration for more stretch goal features such as brands and saving results will happen once MVP is reached.

## Component Tree

![component tree](https://raw.githubusercontent.com/amychurchwell/Bra-Size-Calculator/master/app/assets/componenttree_v3.png)

:pushpin: **v.3**: Components highlighted in yellow represent those affected by state.

**v.2**: Reconsidered component tree without state for now. Results is no longer a child component of (newly renamed) SizeSurvey even though they will share information.

**v.1**: Components that require state have been highlighted in red. This tree will be edited going forward, something tells me it's a little off.

## Technology

* This project was bootstrapped with React Native CLI.
* Utilizing Native Base for UI.


## Special Thanks

* Thank you to the amazing community at [/r/ABraThatFits](https://www.reddit.com/r/ABraThatFits/) who inspired this project.
Special recognition to their current [bra size calculator](http://abrathatfits.org/calculator.php) mainted by /u/goodoldfreda.

* JJ ([GitHub](https://github.com/jjdelc)) over at [Bratabase.com](http://bratabase.com) which has been an incredible resource. Thank you.
