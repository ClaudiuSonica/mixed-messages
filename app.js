const fatJokes = [
  "Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
  "Yo mama's so fat, when she skips a meal, the stock market drops.",
  "Yo mama's so fat, it took me two buses and a train to get to her good side.",
  "Yo mama's so fat, when she goes camping, the bears hide their food.",
  "Yo mama's so fat, if she buys a fur coat, a whole species will become extinct.",
  "Yo mama's so fat, she stepped on a scale and it said: To be continued.",
  "Yo momma is so fat, I swerved to miss her in my car and ran out of gas.",
  "Yo mama's so fat, when she wears high heels, she strikes oil.",
  "Yo mama's so fat, she was overthrown by a small militia group, and now she's known as the Republic of Yo Mama.",
  "Yo mama is so fat, not even Dora can explore her.",
  "Yo mama is so fat, she gets group insurance.",
  "Yo mama's so fat, when she went to KFC and the cashier asked what size bucket she wanted, she said, The one on the roof!",
  "Yo mama is so big, her belt size is 'equator.'",
  "Yo mama so fat, when she talks to herself, it's a long-distance call.",
  "Yo mama so fat, she left in high heels and came back in flip flops.",
  "Yo mama is so fat that when she hauls ass, she has to make two trips.",
  "Yo mama so fat, her job title is Spoon and Fork Operator.",
  "Yo mama so fat, when she walked past the TV, I missed three episodes.",
  "Yo momma's so fat, when she sits around the house, she SITS AROUND the house.",
  "Yo mama's so fat, her car has stretch marks.",
  "Yo mama's so fat, she can't even jump to a conclusion.",
  "Yo mama's so fat, her blood type is Ragu.",
  "Yo mama's so fat, if she was a Star Wars character, her name would be Admiral Snackbar.",
  "Yo mama's so fat, she brought a spoon to the Super Bowl.",
];
const stupidJokes = [
  "Yo mama's so stupid, she stared at a cup of orange juice for 12 hours because it said: 'Concentrate.'",
  "Yo mama so dumb, she thought Twitter was social media for birds.",
  "Yo mama so dumb, it takes her an hour to cook minute rice.",
  "Yo mama's so stupid, she put lipstick on her forehead to make up her mind.",
  "Yo momma so stupid, when they said, 'Order in the court,' she asked for fries and a shake.",
  "Yo mama's so stupid, she thought a quarterback was a refund.",
  "Yo mama so dumb, she sold her car to get gasoline money.",
  "Yo mama's so stupid, she got hit by a parked car.",
  "Yo mama so dumb, she thought Dunkin' Donuts was a basketball team.",
  "Yo mama so dumb, she thought KFC was UFC for chickens.",
  "Yo momma so stupid, when I told her that she lost her mind, she went looking for it",
  "Yo momma so stupid, when thieves broke into her house and stole the TV, she chased after them shouting, 'Wait, you forgot the remote!'",
  "Yo mama's so stupid, she tried to eat Eminem.",
  "Yo mama is so dumb, she cooked her own complimentary breakfast.",
  "Yo mama so stupid, she went to the eye doctor to get an iPhone.",
  "Yo mama so stupid, she climbed over a glass wall to see what was on the other side.",
  "Yo mama's so stupid, she went to the dentist to get a Bluetooth.",
  "Yo mama's so stupid, she took a ruler to bed to see how long she slept.",
  "Yo mama's so stupid, she got locked in the grocery store and starved to death.",
  "Yo mama's so stupid, when I said, 'Drinks on the house,' she got a ladder.",
  "Yo mama's so stupid, it takes her two hours to watch 60 Minutes.",
  "Yo mama's so stupid, she put airbags on her computer in case it crashed.",
];
const uglyJokes = [
  "Yo mama's so ugly, she threw a boomerang and it refused to come back.",
  "Yo mama's so ugly, she made a blind kid cry.",
  "Yo mamma is so ugly when she tried to join an ugly contest they said, 'Sorry, no professionals.'",
  "Yo mama so ugly I told her to take out the trash and she left the house.",
  "Yo mama's so ugly when she was little, she had to trick-or-treat by phone.",
  "Yo mama's so ugly, her birth certificate is an apology letter.",
  "Yo mama is so ugly, she walked into a haunted house and walked back out with a job application.",
  "Yo mama so ugly they didn't give her a costume when she tried out for Star Wars.",
  "Yo mama so ugly just after she was born, her mother said 'What a treasure!' and her father said, 'Yes, let's go bury it.'",
  "Yo mama so ugly her portraits hang themselves.",
  "Yo momma is so ugly even the trash man wouldn't pick her up.",
  "Yo mama is so ugly she looked out the window and got arrested for mooning.",
  "Yo momma so ugly, when she looks in the mirror, the reflection ducks.",
  "Yo mama's so ugly, she could make an onion cry.",
  "Yo mamma so ugly, even Ripley wouldn't believe it.",
  "Yo mama so ugly she's only allowed to go out on October 31.",
  "Yo mama so ugly I heard that your dad first met her at the pound.",
  "Yo mama so ugly even bullets refuse to kill her.",
  "Yo mama is so ugly she made dirt look like a supermodel.",
  "Yo mama's so ugly, when she was born the doctor slapped your grandma.",
  "Yo momma so ugly that most Snapchat filters make her better looking.",
];
const generalJokes = [
  "Yo mama's so poor, the ducks throw bread at her.",
  "Yo mama's cooking so nasty, the house flies got together to fix the hole in the window screen.",
  "Yo mama's so depressing, blues singers come to visit her when they've got writer's block.",
  "Yo mama's so short, you can see her feet on her driver's license.",
  "Yo mama's so poor, she can't even afford to pay attention.",
  "Yo mama's teeth are so yellow when she smiles at traffic, it slows down.",
  "Yo mama so old, she walked into an antique store, and they didn't let her leave.",
  "Yo mama's so classless, she's a Marxist utopia.",
  "Yo momma is so poor, she chases the garbage truck with a grocery list.",
  "Yo momma's armpits are so hairy, it looks like she's got Buckwheat in a headlock.",
  "Yo mama's so lazy, she has a stay-at-home job and still is late to work.",
  "Yo mama's so mean, they don't give her happy meals at McDonald's.",
  "Yo mama's so confusing, even Scooby Doo couldn't solve that mystery.",
  "Yo momma so old, her Social Security number is one.",
  "Yo momma so short, she went to see Santa and he told her to get back to work.",
  "Yo mama so scary, the government moved Halloween to her birthday.",
  "Yo mama's so nasty, they used to call them 'jumpolines' 'til yo mama bounced on one.",
  "Yo mama's teeth are so yellow, I can't believe it's not butter.",
  "Yo mama so strict, she enforced a curfew for the entire neighborhood.",
  "Yo momma so old, she knew Burger King when he was a prince.",
  "Yo mama so nasty, she went swimming and made the Dead Sea.",
  "Yo mama's so poor, Nigerian princes wire her money.",
  "Yo momma so short, she has to slam dunk her bus fare.",
  "Yo mama's so old, she walked out of a museum and the alarm went off.",
  "Yo mama's glasses are so thick when she looks at a map, she can see people waving.",
  "Yo momma is so lazy, she stuck her nose out the window and let the wind blow it.",
  "Yo momma so old, she was a waitress at the Last Supper.",
  "Yo mama house is so dirty, she has to wipe her feet before she goes outside.",
  "Yo mama is so mean, even Hello Kitty said goodbye.",
];

const allJokes = [fatJokes, uglyJokes, stupidJokes, generalJokes];

const generateJoke = arr => {
  const randomIndex = Math.floor(Math.random() * (arr.length));
  if (arr === allJokes) {
    for (let i = 0; i < arr.length; i++) {
      return `${arr[randomIndex][i]}`;
    }
  }

  return `${arr[randomIndex]}`;
};

console.log(generateJoke(allJokes));
