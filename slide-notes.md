## Intro

- thanks for coming, my name sergio
- I know I'm the last one, some of you tired with your eyes glued to the screen
- Please join me in 10+ second stretch break or don't I can't tell you what to do
  - stand up, get the blood flowing
  - I look dorky, hopefully some of you are doing it with me

## Cute animals!

- so I've come prepared
- power of kawaii - operation

## Why are you here?
- if doesnt apply to you then you don't have to be here
- or maybe you know someone who would love to be here (invite them, its not too late)
  - but not in like a passive aggressive way

## what lvl are you?

- do poll
  - you should see another poll
- some might recognize

## react js / ts

- that was helpful
  - this helps tailor my next slides
- talk about about react and JS at a high level
  - how this ties into a web page
- web page were familiar with
  - think of this as a cake
- html
  - what to display
- css
  - how to display it
- js
  - how things interact with each other
- react combines
  - writing jsx
  - we'll get more into that later

## javascript

- 2 functions, and a call of the function
- people from java land, this should look really familiar
- sendRequest
  - function delcaration
  - two params
  - call another function and set the data
  - POST API call using native fetch api
- formatData
  - takes in person object
  - person has a property age
- a little pecuiliar
  - in JS this compiles, no compile time checking
  - unless you declare a variable wrong, your code should compile
  - we'll see why this is an issue.

## typescript

- nice if you come from java
- not a constructor, just declaring the type
  - just see properties
- makes javascript less hacky
- coming from backend, love this

## not nice

- it's not always nice

## react

- that was js, that was ts, high level of react

## clean code

- first off, it's a book
- can get it at your local retailer
- book is fantastic
  - insight into some of the greatest minds of computer science
  - all for roughly $30 depending where you look
- snippet from book
- read off some of what legendary programmers consider clean code
  - Can be read
  - and enhanced by a developer other than its original author;
  - it has meaningful names; it has unit and acceptance tests – Dave Thomas, founder of DRY (don’t repeat yourself), one of original signatory of the Agile Manifesto
  - Runs all tests;
  - contains no duplication; Ron Jeffries, another signatory & writer of agile manifesto
  - Always looks like it was written by someone who cares – Michael feathers, author

## storybook

- how does this tie into storybook??
- from the webstie: Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.
- “Storybook is a powerful frontend tool that allows teams to design, build, and organize UI components without getting tripped up over business logic” Brad Frost, Author of Atomic Design
- so, enough talk, demo time

## cute animals 2

- what?? what is this?
- poll
- fiance said one of these does not belong

## demo!

- let's create some stories!
- story is nothing but a jsx / tsx file with .stories in the filename
- tsx - think of them as react files
- I've gone ahead and created a button so we can customize it
  - using MUI

## what is atomic Design

- high level, way of thinking about breaking up your web components
- We’re not designing pages, we’re designing systems of components.—Stephen Hay
- this isn't new
- lets dive into what each of these are and how they relate to our components

## atom

- scientific definition: Atoms are the basic building blocks from which everything around us is built. This includes the computer before you, the floor beneath you, the air you breathe, and the stars you see at night. All of them are made up of atoms.
- so websites are extremely similar - they're all made up of these little atoms!
- from the atom you click on to review a product, to the toggle when you enable or disable something, to the button you click to make sure you don't "pay" any extra for shipping

## Molecules

- the scientific definition: Atoms can bond together into groups and form a molecule

## organism

- I'm beating the dead choir here, here's another example if you aren't sick of examples yet
- but we can see how powerful this design system is because it's so simple and intuitive

## page

- of course this would be useless if we couldn't create pages out of it, but I hope you now have a clearer understanding of how you can break up pages into atoms, molecule and organisms, such that you can reuse the code you've already written to orchestrate something pretty like target.com

## template

- last piece of atomic design has to do with the styling, rather than creating components
- full admit, not the most dilligent using templates, and by dilligent I mean
- i haven't used them at all

# Surprise! Cute animals

# demo!

- show off the code how you have an atom and used it to build up

## preventing bad coding practices

- different states
  - so powerful, not needing to log in, click the header button, etc
  - you can just test this right here

## questions - please just slack me, I'll be happy to answer any questions
