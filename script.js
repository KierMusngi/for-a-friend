var quotes = [
    "Eighty percent of success is showing up.",
    "Start where you are. Use what you have. Do what you can.",
    "Setting goals is the first step in turning the invisible into visible.",
    "If a mind thinks with a believing attitude, one can do amazing things.",
    "Your goal should be just out of reach. But not out of sight.",
    "If you are not where you want to be, do not quit, Instead reinvent yourself and change your habits.",
    "The journey of a thousand miles begins with one step.",
    "You must want to be a butterfly so badly, you are willing to give up being a caterpillar.",
    "Not knowing you can’t do something is sometimes all it takes to do it.",
    "We are what we repeatedly do. Excellence, therefore, is not an act. But a habit.",
    "Quality means doing it right when no one is looking.",
    "The most common way people give up their power is by thinking they don’t have any.",
    "Be willing to be a beginner every single morning.",
    "You always have two choices: your commitment versus your fear.",
    "Abandon anything about your life and habits that might be holding you back. Learn to create your own opportunities.",
    "Chains of habit are too light to be felt until they are too heavy to be broken.",
    "Think of many things, do one.",
    "You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
    "Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.",
    "How wonderful is that nobody need wait a single moment before starting to improve the world.",
    "You can do anything, but not everything. Prioritize better.",
    "Progress has little to do with speed, but much to do with direction.",
    "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    "I am not a product of my circumstances. I am a product of my decisions.",
    "The most effective way to do it, is to do it.",
    "Start where you are. Use what you have. Do what you can.",
    "Continuous improvement is better than delayed perfection.",
    "How you climb a mountain is more important than reaching the top.",
    "Do the best you can until you know better. Then when you know better, do better.",
    "You can have results or excuses. Not both.",
    "There is virtue in work and there is virtue in rest. Use both and overlook neither.",
    "Action cures fear. Indecision, postponement, on the other hand, fertilize fear. Choose.",
    "You always have two choices: your commitment versus your fear",
    "Someday is not a day of the week.",
    "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.",
    "Live, love, laugh, leave a legacy.",
    "If you think you’re too small to have an impact, try going to bed with a mosquito.",
    "What we fear doing most is usually what we most need to do.",
    "Don’t lament so much about how your career is going to turn out. You don’t have a career. You have a life.",
    "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.",
    "You always have two choices: your commitment versus your fear.",
    "Always deliver more than expected.",
    "You get to decide where your time goes. You can either spend it moving forward, or you can sped it puttnig out fires. You decide. And if you don’t decide, others will decide for you.",
    "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    "Your goal should be just out of reach. But not out of sight.",
    "If you have time to whine, then you have time to find a solution.",
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    "You have the power on your mind, not outside events. Realize this, and you will find strength.",
    "To succeed in your mission, you must have single-minded devotion to your goal.",
    "Someone, at some point, came up with this very bad idea that an ordinary individual couldn’t make a difference in the world. I think that’s just a horrible thing.",
    "Work harder on you than everyone else and you will become unusually successful.",
    "Self-esteem comes from achieving something important when it’s hard to do.",
    "It’s our choices…that show what we truly are, far more than our abilities.",
    "The essence of self-discipline is to do the important thing rather than the urgent thing.",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    "Never give up, for that is just the place and time that the tide will turn.",
    "I see the invisible. I believe the incredible. I attempt the impossible.",
    "Fall seven times, stand up eight.",
    "The only day to discover the limits of the possible is to go beyond them into the impossible",
    "The world is changed by your example, not by your opinion.",
    "Only those who attempt the absurd will achieve the impossible.",
    "Every moment is a fresh beginning .",
    "Don’t justify your dreams, execute on them.",
    "The secret of getting ahead is getting started.",
    "Challenges are what makes life interesting and overcoming them is what makes life meaningful.",
    "Give me six hours to chop down a tree and I will spend first four sharpening the axe.",
    "There’s no abiding success without commitment.",
    " What better place than here, what better time than now.",
    "You cannot swim for new horizons until you have the courage to lose sight of the shore.",
    "If plan A doesn’t work, the alphabet has 25 more letters – 204 if you’re in Japan.",
    "The future belongs to those who learn more skills and combine them in creative ways.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "You must learn a new way to think before you can master a new way to be.",
    "Better a diamond with a flaw than a pebble without.",
    "Self-esteem comes from achieving something important when it’s hard to do.",
    "Be the change you wish to see in the world.",
    "Ordinary people think merely of spending time, great people think of using it.",
    "You miss 100 percent of the shots you never take.",
    "Don’t count the days, make the days count.",
    "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
    "Mastery of life is not a question of control, but of finding a balance between human and being.",
    "The question isn’t who’s going to let me; it’s who is going to stop me?",
    "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.",
    "Forget the past and live in the present hour.",
    "Nothing is a mistake. There’s no win and no fail. There’s only make.",
    "he more you eliminate the inefficient use of information, the better it is for productivity.",
    "If you’re going through hell, keep going.",
    "Nothing is less productive than to make more efficient what should not be done at all.",
    "I need not wait for I have the power to choose my own destiny.",
    "You only get one chance at life and you have to grab it boldly.",
    "If you don’t like the road you’re walking, start paving another one.",
    "Opportunities are usually disguised as hard work, so most people don’t recognize them.",
    "Luck is preparation meeting opportunity.",
    "Everything you can imagine is real.",
    "Don’t tell people your dreams. Show them.",
    "If you dwell on the past or future, you will miss the moment.",
    "It is possible to commit no mistakes and still lose. That is not a weakness; that is life.",
    "Don’t waste your time chasing butterflies. Mend your garden, and the butterflies will come.",
    "I can’t understand why people are frightened of new ideas. I’m frightened of the old ones.",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "Remember, no one can make you feel inferior without your consent.",
    "Do or do not. There is no try.",
    "Courage is like a muscle – we strengthen it by use.",
    "To be successful you have to enjoy doing your best while at the same time contributing to something beyond yourself.",
    "Build your own dreams, or someone else will hire you to build theirs.",
    "The best way to improve your self-control is to see how and why you lose control.",
    "Stop waiting. The time will never be perfect. Things will always pop up. The best time to start is always now.",
    "Tough times never last, but tough people do.",
    "We have a strategic plan. It’s called doing things.",
    "Sometimes the fall kills you. And sometimes, when you fall, you fly.",
    "So many things are possible just as long as you don’t know they’re impossible.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "The power of imagination makes us infinite.",
    "Self – trust is the first secret to success.",
    "Nothing becomes dynamic until it becomes specific.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Every exit is an entry somewhere else.",
    "Don’t lament so much about how your career is going to turn out. You don’t have a career. You have a life.",
    "If you look for perfection, you will never be content.",
    "Nothing is impossible; the word itself says ‘I’m possible’!",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    "Doing the best at this moment puts you in the best place for the next moment.",
    "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
    "Don’t cry because it’s over. Smile because it happened.",
    "Dream big and dare to fail.",
    "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "Either write something worth reading or do something worth writing.",
    "You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
    "You were born to win, but to be a winner you must plan to win, prepare to win, and expect to win.",
    "It’s always the hard part that creates value.",
    "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "ACT. Actions kills procrastination and creates momentum to keep yourself motivated to keep moving ahead.",
    "Becoming is better than being.",
    "We think, mistakenly, that success is the result of the amount of time we put in at work, instead of the quality time we put in.",
    "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!", 
    "When I hear somebody sigh, “Life is hard,” I am always tempted to ask, “Compared to what? ",
    "The successful warrior is the average man, with laser-like focus.",
    "It’s not about ideas. It’s about making ideas happen.",
    "We must believe that we are gifted for something and that this thing must be attained.",
    "Talent wins games, but teamwork and intelligence win championships.",
    "At the end of the day, you are solely responsible for your success and your failure. And the sooner you realize that, you accept that, and integrate that into your work ethic, you will start being successful. As long as you blame others for the reason you aren’t where you want to be, you will always be a failure."
];

// Math.floor(Math.random() * (max - min + 1) + min)
var randomInteger = Math.floor(Math.random() * (2 - 1 + 1) + 1);

function newQuote(){
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[random];
}