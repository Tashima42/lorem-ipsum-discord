# Lorem Ipsum Discord Bot

Lorem Ipsum generator for Discord!

## Add to your server!

https://discord.com/api/oauth2/authorize?client_id=830463025562910801&permissions=2147485696&scope=bot

## Commands

### Basic

- Paragraphs
  - `/lorem paragraphs=2`
- Sentences
  - `/lorem sentences=2`
- Words
  - `/lorem words=2`
- ⚠️ Warning!  
  Commands can't have spaces
  - ❌ `/lorem paragraphs = 10`
  - ✔️ `/lorem paragraphs=10`

### Advanced

- Config paragraphs
  - `/lorem { sentencesPerParagraph: { max: 4, min: 2 } } paragraphs=2`
  - Default: `{ max: 8, min: 4 }`
- Config sentences
  - `/lorem { wordsPerSentence: { max: 4, min: 2 } } sentences=2`
  - Default: `{ max: 8, min: 4 }`
- Config both
  - `/lorem { sentencesPerParagraph: { max: 3, min: 1 }, wordsPerSentence: { max: 6, min: 3 } } paragraphs=2`

## Examples

Two paragraphs:

```
Pedro Tashima:
  > /lorem paragraphs=2

Lorem Ipsum Generator:
  > Et non esse nisi aute sunt id exercitation. Velit culpa sunt sit Lorem ut reprehenderit. Enim irure non voluptate velit. Tempor eiusmod mollit Lorem magna adipisicing.
  > Non mollit nulla laborum nulla laboris. Ut nulla quis eiusmod sint amet fugiat voluptate. Proident commodo excepteur nisi consectetur consequat nostrud. Exercitation fugiat do non fugiat duis veniam. Non esse reprehenderit incididunt Lorem excepteur sunt. Incididunt laboris tempor esse.
```

Three sentences:

```
Pedro Tashima:
  > /lorem sentences=3

Lorem Ipsum Generator:
  > Pariatur in do pariatur. Nulla do sit velit minim aliqua. Voluptate elit eu proident voluptate minim mollit ad.
```

Four words:

```
Pedro Tashima:
  > /lorem words=4

Lorem Ipsum Generator:
  > exercitation laborum tempor minim
```

Two paragraphs with a maximum of 6 and a minimum of 3 words per sentence:

```
Pedro Tashima:
  > /lorem { wordsPerSentence: { max: 6, min: 3 } } paragraphs=2

Lorem Ipsum Generator:
  > Qui irure commodo. Duis anim magna commodo. Id cupidatat ad dolore excepteur. Elit sunt cillum. Eu ea incididunt minim. Enim nulla quis Lorem cupidatat non.
  > Quis sit elit est eu enim. Consectetur tempor velit officia dolore. Eiusmod sit elit cillum aute duis. Lorem pariatur consectetur ullamco. Proident reprehenderit non aliquip incididunt. Ea et voluptate aute culpa.
```

Two sentences with a maximum of 6 and a minimum of 3 words:

```
Pedro Tashima:
  > /lorem { wordsPerSentence: { max: 6, min: 3 } } sentences=2

Lorem Ipsum Generator:
  > Ullamco nostrud irure mollit ex sit. Ea ut dolor irure.
```

Two paragraphs with a maximum of 6 and a minimum of 3 words per sentence:

```
Pedro Tashima:
  > /lorem { wordsPerSentence: { max: 6, min: 3 } } paragraphs=2

Lorem Ipsum Generator:
  > Qui irure commodo. Duis anim magna commodo. Id cupidatat ad dolore excepteur. Elit sunt cillum. Eu ea incididunt minim. Enim nulla quis Lorem cupidatat non.
  > Quis sit elit est eu enim. Consectetur tempor velit officia dolore. Eiusmod sit elit cillum aute duis. Lorem pariatur consectetur ullamco. Proident reprehenderit non aliquip incididunt. Ea et voluptate aute culpa.
```

Four paragraphs with a maximum of 4 and a minimum of 2 sentences and a maximum of 6 and a minimum of 3 words per sentence:

```
Pedro Tashima:
  > /lorem { sentencesPerParagraph: { max: 4, min: 2 }, wordsPerSentence: { max: 6, min: 3 } } paragraphs=4

Lorem Ipsum Generator:
  > Non aute exercitation laboris do. Quis fugiat occaecat enim eu. Ut anim pariatur ullamco.
  > Nisi magna consequat. Deserunt ad ex. Ex duis ex. Elit veniam commodo qui commodo.
  > Ut magna fugiat do consequat. Ut officia proident.
  > Amet reprehenderit do irure irure aute. Nostrud exercitation fugiat est non aliquip. Non enim qui dolore magna ex.
```
Invalid command: 
```
Pedro Tashima: 
  > /lorem foo

Lorem Ipsum Generator:
```
> ![image](https://user-images.githubusercontent.com/23709916/114287423-1327f380-9a3d-11eb-8f5e-7666a15c3f33.png)
