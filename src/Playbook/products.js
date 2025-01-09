export const products = [
    {
      id: 'product1',
      name: 'Claude',
      logo: "/playbook/products/claude/Claude.jpeg",
      introduction: [
        {label: "Problem it's solving", content: "It’s very difficult to define the problem that Claude is solving. What seperates is from Chat-GPT and other generative AI’s? It certainly feels different, but how and why? With other products, you can see the design and you know what problem they’re solving. But with generative AI, it’s so much about conversation design that it feels more hidden. I need to spend more time talking with Claude to figure this out."},
        {label: "Audience", content: "For a generative AI company is the audience just ... everybody?"}
      ],
      themes: [
        {  
            id: 'theme1-1',
            title: 'Experiment by optionality',
            content: [
                "The designers of Claude have gone out of their way to give their users ultimate flexibility. Multiple ways to close and open side bars, multiple ways to navigate into older chats, and multiple ways to start a new chat.",
                "Why do this? I think that building in all of this optionality allows users to decide how they want to use Claude. And it allows Claude to experiment with their product in a product space that lacks established patterns. And patterns that are established have been around for such a short period of time, that they probably won’t be the final patterns we end up settling on for generative AI.",
                "In other words, why not add mini experiments to your product while we’re still in the early phases of establishing our relationship with AI?"
            ],
            examples: [
                {letter: "A", title: "Two ways to navigate into older chats", content: [
                    "In Claude, you can find your chats either in the side bar, as Chat-GPT established as the original pattern, or in cards on the main screen. My theory is that by turning chats into cards, Claude is turning chats into interactive objects. In Claude, a chat is almost more like a doc in Google docs. You can save it and come back to it later as you progress with whatever the context of that chat was. "
                ], image: {
                    before: "/playbook/products/claude/TH1-Ex1a.jpg",
                    after: "/playbook/products/claude/TH1-Ex1b.jpg",
                    type: "static"
                }},
                {letter: "B", title: "Two ways to start a new chat", content: [
                    "There are two different ways to start a chat with two different results. If you want to jump into a new, blank chat, you can select “Start new chat” in the sidebar. But if you want to start a new chat without interrupting your current chat, you can select the “+” button in the top right corner of the screen. This will open a chat modal layered on top of your current chat, where you always have the option to easily close it out. Maybe the designers at Claude are wondering if people will be more likely to start a new chat when they feel like they can abandon it easily?"
                ], image: {
                    before: "/playbook/products/claude/TH1-Ex2a.jpg",
                    after: "/playbook/products/claude/TH1-Ex2b.jpg",
                    type: "static"
                }},
                {letter: "C", title: "Two ways to manage navigational sidebar (pin or hover)", content: [
                    "I was surprised to find that if you drift your mouse to the left side of the screen the navigational side bar automatically opens. My first instinct was “huh ... I don’t like this”. It felt a bit hacky and I didn’t feel like I had control. There was nothing that indicated exactly where the hover would be triggered and in order to keep viewing the sidebar, I had to keep my mouse in the side bar. This felt limiting.",
                    "It wasn’t until later that I realized there was an option to pin the sidebar if you wanted, but I’m convinced that I only discovered this because I was exploring the interface in search of design details."
                ], image: {
                    before: "/playbook/products/claude/TH1-Ex3a.jpg",
                    after: "/playbook/products/claude/TH1-Ex3b.jpg",
                    type: "static"
                }},
            ]
        },
        {   
            id: 'theme1-2',
            title: 'Vintage Video Game Feel',
            content: [
                "Claude makes me feel like I’m thrown into a vintage video game, beginning an epic quest of adventure. It does this through thoughtful visual details and a unique color palette that has more personality than Chat-GPTs minimalist white and gray."
            ],
            examples: [
                {letter: "A", title: "Hovering on Claude feels like chatting with an NPC", content: [
                    "This is one of those surprises that a lot of people wouldn’t discover, but when you do see it it feels like you stumbled upon one of those characters in a video game that you never thought to talk to and then they offer you a thrilling quest.",
                    "I think the italics are critical for making it feel like Claude is a character that’s actually talking to you."
                ], image: {
                    before: "/playbook/products/claude/TH2-Ex1a.jpg",
                    after: "/playbook/products/claude/TH2-Ex1b.jpg",
                    type: "static"
                }},
                {letter: "B", title: "The pdf feels like an artifact that I’ve collected", content: [
                    "I don’t even know what I was expecting to see when I attached a pdf. But it wasn’t this. This feels like I collected an artifact to add to my inventory or something.",
                    "It feels like whoever designed this had a lot of fun. The subtle gradient on the paper gives it an animated quality and the little pill that says pdf labels it in a visually satisfying way."
                ], image: {
                    before: "/playbook/products/claude/TH2-Ex2a.jpg",
                    after: "/playbook/products/claude/TH2-Ex2b.jpg",
                    type: "static"
                }},
                {letter: "C", title: "The font looks like medeival", content: [
                    "I was shocked to discover that the default Claude font is a simple Times New Roman. I guess Times New Roman has become so outdated that it actually looks fun and retro. Like an ancient scroll giving me the secrets to the universe."
                ], image: {
                    before: "/playbook/products/claude/TH2-Ex3a.jpg",
                    after: "/playbook/products/claude/TH2-Ex3b.jpg",
                    type: "static"
                }},
            ]
        },
      ],
    },
    {
      id: 'product2',
      name: 'Lemonade',
      logo: "/playbook/products/lemonade/Lemonade.jpeg",
      introduction: [
        {label: "Problem it's solving", content: "Insurance sucks. It feels like they’re trying to rip you off and the processes feel like jumping through a thousand hoops and each time you complete a step you're reminded that you're doing this because something horrific might happen to you one day."},
        {label: "Audience", content: "Anyone who needs insurance? But it seems based on the imagery that they are specifically appealing to younger, urban people that believe in progress and are willing to buy insurance from a lesser known brand if it means that they’re part of a vision for a better world. Older people are probably more likely to be skeptical of newer institutions when it comes to high-stakes things like insurance."}
      ],
      themes: [
        {
            id: 'theme2-1',
            title: 'Delightful surprises build trust',
            content: [
                "Lemonade works hard from the beginning of the experience to weave in delightful surprises that feel thoughtful and friendly in response to your interactions. As your friendship with Lemonade grows, so does your instinct to interact with it, setting you up for success when you finally get to your quote."
            ],
            examples: [
                {letter: "A", title: "The “Next” button floats towards you", content: [
                    "... as if to say “Good job! Now click me”",
                ], image: {
                    before: "/playbook/products/lemonade/TH1-Ex1a.jpg",
                    after: "/playbook/products/lemonade/TH1-Ex1b.gif",
                    type: "gif"
                }},
                {letter: "B", title: "Part of each illustration gets “painted” when you select an option", content: [
                    "This makes me want to choose an option, just to see which part of the illustration gets filled in. It’s a mini randomized reward that keeps me eagerly clicking through options that would otherwise be annoying.",
                ], image: {
                    before: "/playbook/products/lemonade/TH1-Ex2a.jpg",
                    after: "/playbook/products/lemonade/TH1-Ex2b.gif",
                    type: "gif"
                }},
                {letter: "C", title: "A map appears when you select your address", content: [
                    "When you select your address, a map appears out of thin air. Not only does this feel like a magician’s sleight of hand but it’s also a way for the interface to say “Oh I know that place! It’s here right?”. This gives me an extra confidence boost to move forward.",
                ], image: {
                    before: "/playbook/products/lemonade/TH1-Ex3a.jpg",
                    after: "/playbook/products/lemonade/TH1-Ex3b.gif",
                    type: "gif"
                }},
                {letter: "D", title: "Interactions are fundamental to the quote experience", content: [
                    "Instead of trying to tell you everything you need to know about your quote, which would surely be an overwhelming experience, Lemonade lets you discover your options through exploration. Since you've been delighted by all of your previous interactions before getting your quote, it feels natural to start interacting with the quote itself. In this way, these delightful surprises set the user up for success in the most fundamental part of the Lemonade experience.",
                ], image: {
                    before: "/playbook/products/lemonade/TH1-Ex4a.jpg",
                    after: "/playbook/products/lemonade/TH1-Ex4b.gif",
                    type: "gif"
                }},
            ]
        },
        {
            id: 'theme2-2',
            title: 'Quote designed as a product',
            content: [
                "When you get to your quote on Lemonade, it feels eerily similar to to the original landing site that you first arrived at. This is because Lemonade realized that your quote is a product, so why not use a similar landing site structure to sell you on your quote. It like a persoalized product page for your quote."
            ],
            examples: [
                {letter: "A", title: "Illustrations form visual funnel", content: [
                    "Just like on the main landing site, Lemonade uses high-quality illustrations to funnel your attention to the main focus of the hero. It’s as if the very city itself is opening for you.",
                ], image: {
                    before: "/playbook/products/lemonade/TH2-Ex1a.jpg",
                    after: "/playbook/products/lemonade/TH2-Ex1b.jpg",
                    type: "static"
                }},
                {letter: "B", title: "Main CTA replicates landing page interaction", content: [
                    "Lemonade’s landing site has a useful interaction where the CTA will drop into the top right of the screen only after the main CTA in the hero goes off the screen. It’s like a character on Super Smash Bros falling off the platform only to float back down from the top of the screen with two more lives.",
                    "This is useful because it decreases redundant clutter on the hero, but makes sure you always have the CTA. And it ensures that you notice where the CTA is as you scroll down."
                ], image: {
                    before: "/playbook/products/lemonade/TH2-Ex2a.jpg",
                    after: "/playbook/products/lemonade/TH2-Ex2b.gif",
                    type: "gif"
                }},               
            ]
        }
      ],
    },
    {
        id: 'product3',
        name: 'PFF',
        logo: "/playbook/products/pff/PFF.jpg",
        introduction: [
          {label: "Problem it's solving", content: "It’s impossible to watch every snap of a football game and even if you could, it’s impossible to see what every player is doing."},
          {label: "Audience", content: "Anyone who needs to talk football. Coaches. Fans. Fantasy managers. Broadcasters. PFF is a language that juices all football conversations."}
        ],
        themes: [
          {  
              id: 'theme3-1',
              title: 'Solid shapes guide your eyes through density',
              content: [
                "When it comes to analytics, density is often unavoidable. Rather than try to prevent density, limiting the capability of the user, PFF has found a way to help users scan through density.",
                "PFF uses simple colored shapes that stick out even at small scale to help you scan through dense areas of numbers.",
              ],
              examples: [
                {letter: "A", title: "Blue arrows guide your eyes through the score ticker", content: [
                    "As you scan the score ticker from left to right to update yourself on the days games, your foremost question might be: who won? The arrows lead you through each winner of each game, helping to tell a story of the days events through just a quick scan."
                ], image: {
                    before: "/playbook/products/pff/TH1-Ex1a.jpg",
                    after: "/playbook/products/pff/TH1-Ex1b.jpg",
                    type: "static"
                }},
                {letter: "B", title: "Colored boxes guide you through PFF grades", content: [
                    "If you’re looking at this chart, you’re probably trying to figure out where to direct your attention. If the colored boxes weren’t here, you’d have to read through the numbers to find something that stands out; a cognitively demanding task.",
                    "But the colored boxes are much easier to scan. You can look at this for a few seconds and say “Hey, why are the Chargers almost yellow in their run grade? Let’s look into that.”"
                ], image: {
                    before: "/playbook/products/pff/TH1-Ex2a.jpg",
                    after: "/playbook/products/pff/TH1-Ex2b.jpg",
                    type: "static"
                }},
              ]
          },
        ],
      },
]