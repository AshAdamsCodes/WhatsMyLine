const sentences = [
    "I want many things for myself.",
"He was president from 2008 to 2016.",
"He wished that time would pass faster.",
"When the cat's away, the mice play.",
"Truman's first big problem was the economy.",
"The black rocks are smooth.",
"He thinks he is very handsome.",
"I have a massive crush on him.",
"I go back to bedroom.",
"This vase is made of glass.",
"Toothpaste will help keep your teeth clean.",
"I drink less water than him.",
"He is my elder brother.",
"We can go to lunch.",
"Their hot chocolate was very mediocre.",
"I’m rather fond of him.",
"There is no honor among thieves.",
"He cleaned my teeth really well.",
"You console your children, not yourself.",
"I trust you so much.",
"I would not want to be in that situation.",
"The package will arrive six days late.",
"A turkey is a little bigger than a chicken.",
"Love is blind.",
"All that glitters is not gold.",
"The train was forty-seven minutes late.",
"You're not looking at the big picture.",
"She made him a cake for his party.",
"Star Trek is interesting to watch.",
"This is just too big for one person to carry.",
"A hunch is an instinctive feeling.",
"She gave him a wide grin.",
"I need to start.",
"This tree is bigger than all the others.",
"She could do it in her sleep.",
"He has more brothers than I do.",
"We are completely in love.",
"She wished she had taken the other job.",
"Their efforts embarrassed them.",
"I haven’t been invited.",
"He’s as proud as a peacock.",
"I just made it.",
"Bobsled is a sporting event.",
"That car's so big that parking is difficult.",
"I was okay the second I shot him.",
"She attended kindergarten in 2013.",
"That is a huge deal for me.",
"Tom had big money problems.",
"The peddler carried a big bundle on his back.",
"Plenty of sleep is healthful.",
"It is not so easy as you think.",
"It’s as light as a feather.",
"Tom let out a sigh of relief.",
"Asia has a very long and interesting history.",
"Uncle Joe gave me a red toy truck.",
"You must have a huge family.",
"I’ll do it immediately.",
"I hate scammers.",
"I am so tired.",
"A new movie is better than an old one.",
"We were on the lake yesterday.",
"This is a real step forward.",
"Now, you know what I'm capable of.",
"These men are hard at work.",
"She froze at the sight of the big spider.",
"He came to the point at once.",
"He thinks he is very handsome.",
"It’s right around the corner.",
"It’s up to you.",
"She has blue eyes.",
"I eat my asparagus steamed.",
"Racecar backwards is racecar.",
"She was riding on a high-speed train.",
"John went to the store.",
"I'm not as big a fool as you think I am.",
"Its origin is still a mystery.",
"I'm so hungry.",
"There is a hefty ransom.",
"He was a slow-moving man.",
"There is one open baby swing.",
"The swan is a beautiful bird.",
"Danny drank the juice.",
"He invited me to dinner yesterday.",
"The smoke was high in the sky.",
"Oil is smelly.",
"California is not in the United Kingdom.",
"We can go to the museum.",
"I think I should shoot him.",
"I'm sorry to have bothered you.",
"I broke my phone.",
"The peanut butter jar was hard to open.",
"I'm asking as a friend.",
"No sport should be called football.",
"The Avengers are stupid.",
"The price just covers the pre-tax cost.",
"Sue was her favorite classmate.",
"The banana was completely brown.",
"My nanny is here.",
"I miss my best friend.",
"He is my grandfather.",
"I want you to remember that.",
"We should hang soon.",
"Lying and stealing are immoral.",
"He went fast downhill on his sled.",
"It's up to you.",
"I didn't know that was an option.",
"I made a mistake in choosing my wife.",
"I trust you so much.",
"You can't pick her headstone.",
"It is clear that he has made a big mistake.",
"My sister works at the theater.",
"I take showers twice a month.",
"The castle is on top of a cliff.",
"You must have a huge family.",
"Your first week of yoga classes is on us.",
"I felt sort of sick.",
"I’ll do it right away.",
"You can find love anywhere.",
"There is a bridge over the river.",
"We will make a snowman this winter.",
"I think I should shoot him.",
"That man is creepy.",
"I'm sure Tom's name isn't on the list.",
"Bailey wishes he had a nicer car.",
"Our translator speaks 4 languages.",
"You're suffering from allergies.",
"There's a scary thunderstorm on way.",
"I'm actually newly single.",
"She wished she could speak Italian.",
"His last play was a big hit.",
"She disrespected my mother.",
"The key he was interested in was very old.",
"I don't want to live in a mansion.",
"She was afraid to go to the doctor.",
"Tinder doesn't work.",
"The security is the safest around.",
"I made a big mistake when choosing my wife.",
"Your name has been dropped from the list.",
"The windows looked out over the backyard.",
"She likes to swing at the playground.",
"I am so thankful for this opportunity.",
"We are completely in love.",
"Tom had a great big grin on his face.",
"You have a big house.",
"She writes an e-mail to her best friend.",
"Well, that's a big surprise.",
"I have a first name and a surname.",
"The kids were smiling from ear to ear.",
"Your house is beautiful.",
"She was very tired and frustrated.",
"I wish Star Wars had a happier plot.",
"Every decision has an antecedent.",
"Here's the shirt Tom gave me.",
"Skating is so much fun.",
"I wish I had never gone surfing that day.",
"My sister killed it.",
"He likes to swim in the lake.",
"I take showers twice a month.",
"Tom is looking for a bigger house to live in.",
"A wooden bridge was built over the river.",
"You're the best person I know.",
"We pay it tax in the form of rent and profit.",
"The peddler carried a big bundle on his back.",
"Kelly sells blankets.",
"She’s an excellent photographer.",
"The recipe says to use one tablespoon.",
"That's a pretty big fish you've just caught.",
"He’s the best in the business.",
"There are so many sandwiches on the table.",
"Odds are that he is cheating on her.",
"We have weight training classes.",
"The answering machine was full.",
"We cook every day.",
"There is a party on Saturday.",
"She had never appreciated radio news shows.",
"She's drop-dead gorgeous.",
"The price just covers the pre-tax cost.",
"I was taking care of the dog.",
"My eyes are sweating.",
"A red tie will match that suit.",
"The train does not leave at 8AM.",
"Moving to the next step is daunting.",
"Every decision has an antecedent.",
"California is in America.",
"The train is coming early today.",
"Apple picking is not in season.",
"He had to wear the cast for two months.",
"My brother just got home.",
"I like asparagus and brussel sprouts.",
"Greer isn't listed in the phone book.",
"I have a surprise for you.",
"We put you on probation.",
"The man waited at the bus stop.",
"I don't care how long your socks are.",
"China is twenty times bigger than Japan.",
"She’s headed to the Hockey Hall of Fame.",
"He fixed the sleeve under his coat.",
"I like crawfish but oysters suck.",
"The rusty containers were in the field.",
"It's adorable that you think I like you."
]

const getSentence = () => {
    const index = Math.floor((Math.random() * sentences.length))
    return sentences[index];
}

const button_press_me = document.getElementById('button_press_me');
const display = document.getElementById('display');
const button_add_a_sentence = document.getElementById('button_add_a_sentence');

button_press_me.addEventListener('click', () => {
    display.innerHTML = getSentence(); 
});


button_add_a_sentence.addEventListener('click', () => {
    let newSent = document.getElementById('newSentence').value; 
    sentences.push(newSent);
    document.getElementById('newSentence').value = ''; 
})