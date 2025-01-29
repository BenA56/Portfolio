export const products = [
    {
      id: 'product1',
      name: 'Claude',
      logo: "/playbook/products/claude/Claude.jpeg",
      introduction: [
        {label: "Problem it's solving", content: "It’s very difficult to define the problem that Claude is solving. What seperates it from Chat-GPT and other generative AI’s? It certainly feels different, but how and why? With other products, you can see the design and you know what problem they’re solving. But with generative AI, it’s so much about conversation design that it feels more hidden. I need to spend more time talking with Claude to figure this out."},
        {label: "Audience", content: "For a generative AI company is the audience just ... everybody?"}
      ],
      themes: [
        {  
            id: 'theme1-1',
            title: 'Experiment by optionality',
            content: [
                "The designers of Claude have gone out of their way to give their users ultimate flexibility. Multiple ways to close and open side bars, multiple ways to navigate into older chats, and multiple ways to start a new chat.",
                "Why do this? I think that building in all of this optionality allows users to decide how they want to use Claude. And it allows Claude to experiment with their product in a product space that lacks established patterns. And patterns that are established have been around for such a short period of time, that they probably won’t be the patterns we settle on.",
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
                    "There are two different ways to start a chat with two different results. If you want to jump into a new, blank chat, you can select “Start new chat” in the sidebar. But if you want to start a new chat without interrupting your current chat, you can select the “+” button in the top right corner of the screen. This will open a chat modal layered on top of your current chat, where you always have the option to easily close it out.",
                    "Perhaps the designers at Claude are wondering if people will be more likely to start a new chat when they feel like they can abandon it easily?",
                ], image: {
                    before: "/playbook/products/claude/TH1-Ex2a.jpg",
                    after: "/playbook/products/claude/TH1-Ex2b.jpg",
                    type: "static"
                }},
                {letter: "C", title: "Two ways to manage the navigational sidebar (pin or hover)", content: [
                    "I was surprised to find that if you drift your mouse to the left side of the screen, the side bar automatically opens. My first instinct was “huh ... I don’t like this”. It felt a bit hacky and I didn’t feel like I had control. There was nothing that indicated exactly where the hover would be triggered and in order to keep viewing the sidebar, I had to keep my mouse in the side bar. This felt limiting.",
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
                    "This is one of those easter eggs that some users might never find. But when you do, it feels like you stumbled upon one of those characters in a video game that you never thought to talk to and then they offer you a thrilling quest.",
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
        {label: "Audience", content: "Anyone who needs insurance? But it seems (based on their imagery) that they are specifically appealing to younger, urban people who believe in progress and are willing to buy insurance from a lesser known brand if it means that they’re part of a vision for a better world. Older people are probably more likely to be skeptical of newer institutions when it comes to high-stakes things like insurance."}
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
                    "When you select your address, a map appears out of thin air. Not only does this feel like a magician’s sleight of hand but it’s also a way for the interface to say “Oh I know that place! It’s this one, right?”. This gives me an extra confidence boost to move forward.",
                ], image: {
                    before: "/playbook/products/lemonade/TH1-Ex3a.jpg",
                    after: "/playbook/products/lemonade/TH1-Ex3b.gif",
                    type: "gif"
                }},
                {letter: "D", title: "Interactions are fundamental to the quote experience", content: [
                    "Instead of trying to tell you everything you need to know about your quote, which would be overwhelming, Lemonade lets you discover your options through exploration. Since you've been delighted by all of your previous interactions before getting to your quote, it feels natural to start interacting with the quote itself. In this way, these delightful surprises set the user up for success in the most fundamental part of the Lemonade experience.",
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
    {
        id: 'product4',
        name: 'ElevenLabs',
        logo: "/playbook/products/elevenLabs/ElevenLabs.jpg",
        introduction: [
          {label: "Problem it's solving", content: "Basically it's generative AI for all things voices. Translating your text into voices. Creating custom AI agents that people can talk to. Etc etc."},
          {label: "Audience", content: "At first based on the landing site I was thinking content and entertainment creators. Ya know, audiobooks, podcasts, and TikTok clips. But after exploring the product more, I realized the use cases are infinite. A teacher could use it to create videos out of their lesson plan. A content creator could use the dubbing technology to make their content available across the world (looking at you, Mr. Beast)."}
        ],
        themes: [
            { 
                id: 'theme4-1',
                title: 'Mental Model is Muddy',
                type: "critique",
                content: [
                  "ElevenLabs has so many different ideas and mini-experiments thrown together in their interface that it’s hard to form a mental model of the basic objects, actions, and navigational patterns. It feels like I’m at Hogwarts and the magical stairs are shifting and contorting, leading me to unexpected places with no idea how to get back.",
                ],
                examples: [
                    {letter: "A", title: "Convert to what?", content: [
                        "Maybe I’m just new to the audio space, but I have no idea what “Convert” means. Is this similar to downloading? I expect that in the dropdown it will show me different formats to convert TO, clearing up my confusion. But instead it just gives me options for which elements I can convert. I still don't know what converting means."
                    ], image: {
                        before: "/playbook/products/elevenLabs/TH1-Ex1a.jpg",
                        after: "/playbook/products/elevenLabs/TH1-Ex1b.jpg",
                        type: "static"
                    }},
                    {letter: "B", title: "Verified vs. Default?", content: [
                        "It seems what they’re getting at is human vs robot. But verified vs default doesn’t model this well. There’s a mixture of mental models going on here. “Default” usually just means that its the one you start out with. It's singular in nature. But they’re using default to refer to all of the robot-made sounds. They’re also using Twitter’s verfied vs. not-verified system, denoted with check marks on human voices. But the problem is: most people on Twitter are not verified but are still human. So I don’t associate no check mark to mean that the person is a robot.",
                    ], image: {
                        before: "/playbook/products/elevenLabs/TH1-Ex2a.jpg",
                        after: "/playbook/products/elevenLabs/TH1-Ex2b.jpg",
                        type: "static"
                    }},
                    {letter: "C", title: "Conversational AI - What is my goal?", content: [
                        "When I first clicked on the “Conversational AI” tab, I thought I was going to be chatting with ElevenLab’s version of Chat-GPT. This was further reinforced by the calls to action on the AI agent cards. “Talk to ..”, “Speak with …”, and “Try” are a stark contrast to the final CTA of “CREATE”. This inconsistency shrouds the page in confusion.",
                    ], image: {
                        before: "/playbook/products/elevenLabs/TH1-Ex3a.jpg",
                        after: "/playbook/products/elevenLabs/TH1-Ex3b.jpg",
                        type: "static"
                    }},
                ]
            },
          ],
    },
    {
        id: 'product5',
        name: 'Solace',
        logo: "/playbook/products/solace/Solace.jpg",
        introduction: [
          {label: "Navigating your treatment is a nightmare", content: "Navigating your treatment journey is complicated. You need to be educated in your own to disease in order to make decisions that align with your values. But how do you educate yourself? Your doctor has a limited amount of time to explain things to you and may have incentives that don’t align with your values. When you go home, you can’t take your doctor with you so you are forced onto the internet. But the information on the internet is not personalized to you, and the resulting burden of piecing together the relevant information can be stressful and scary. Plus, the internet does not give you the emotional support you need."},
          {label: "Having someone in your corner", content: "What Solace offers is almost like a medical lawyer. A lawyer is on your side, helping you navigate the complex legal system to achieve the outcome that you desire. In a similar fashion, Solace connects you with a “medical advocate” to help you navigate the complex medical system. This gives you confidence that you’re making the right decisions for yourself and achieving the best outcomes possible."},
          {label: "For patients and caregivers", content: "Solace is primarily for people navigating complex diagnosis. But Solace is also for anyone that might be taking charge of managing the treatment. Often, the person that is sick might not be fit to manage their own disease and they might have a loved one advocating for them."},
          {label: "My connection", content: "I’ve seen this first hand. When my girlfriend’s mom got into a car crash, it was up to her to be the advocate. Her mom has an autoimmune disease that often gets overlooked in all the hustle and bustle of the hospital. My girlfriend made sure that her mom’s unique circumstances were always being taken into account ….. but not everyone has a heroic daughter in med school to fight for them."},
          {label: "For advocates", content: "Also, we must not forget that Solace is providing an experience to the health advocates themselves. This, I’m very curious about. Who are the health advocates? Why would they be interested in working with Solace? What do they value in their experience?"}
        ],
        themes: [
          {  
              id: 'theme5-1',
              title: 'Smooth visual elements soothe the soul',
              content: [
                  "The visual design of a healthcare platform needs to feel soothing. Users are most likely coming to the platform because their experiences so far have felt cold and clinical. So you need to make them feel calm, soothed, and cared for.",
                  "Solace accomplishes this with smooth visual design elements. Swoopy lines, delicate fonts, and rounded frames feel like wind and water. Like a calming breathe in and out.",
              ],
              examples: [
                  {letter: "A", title: "Swoopy lines", content: [
                      "Solace uses these swoopy lines throughout it’s interface not only for a smooth feel, but also to frame content and help guide your eyes to the right place."
                  ], image: {
                      before: "/playbook/products/solace/TH1-Ex1a.jpg",
                      after: "/playbook/products/solace/TH1-Ex1b.jpg",
                      type: "static"
                  }},
                  {letter: "B", title: "Curved frames", content: [
                      "Instead of the typical straight line between different color backgrounds, Solace opts for gentle curves that feel like soothing transitions as you scroll through the page",
                  ], image: {
                      before: "/playbook/products/solace/TH1-Ex2a.jpg",
                      after: "/playbook/products/solace/TH1-Ex2b.jpg",
                      type: "static"
                  }},
                  {letter: "C", title: "Delicate font", content: [
                      "Solace’s header font feels like it was written by a calligraphy master from yesteryear. It feels almost video-game like, as if I’m playing a video game that takes place in a beautiful castle. It’s a beautiful font. And beauty is not normally a part of the healthcare system. So it feels really nice to have something beautiful.",
                  ], image: {
                      before: "/playbook/products/solace/TH1-Ex3a.jpg",
                      after: "/playbook/products/solace/TH1-Ex3b.jpg",
                      type: "static"
                  }},
              ]
          },
          {   
              id: 'theme5-2',
              title: 'Movement feels alive and steady',
              content: [
                  "If you were at the doctor’s office, how would you want your doctor to move? Probably slow and steady. Like they’re not going to do anything that you don’t have time to question. And they’re not wavering at all, showing that they’re confident.",
                  "Solace’s interface replicates this type of movement with lots of animations, ranging from subtle arrows sliding a few precise pixels over, to entire element gliding over the top of one another"
              ],
              examples: [
                  {letter: "A", title: "Arrows move to usher you through the interface", content: [
                      "Arrows in Solace tend to shift when you hover on buttons that take you to different pages. This just feels nice. It’s like someone is holding a door open for me and gesturing me through.",
                  ], image: {
                      before: "/playbook/products/solace/TH2-Ex1a.jpg",
                      after: "/playbook/products/solace/TH2-Ex1b.gif",
                      type: "gif"
                  }},
                  {letter: "B", title: "Components slide up into position after loading", content: [
                      "There’s something nice about seeing an objext approaching you before it assumes its position. Continuing with the medical metaphors, you wouldn’t want your doctor to just appear out of thin air at your bedside. You would want to see them approaching you with a calm, unhurried pace and maybe even a small smile.",
                  ], image: {
                      before: "/playbook/products/solace/TH2-Ex2a.jpg",
                      after: "/playbook/products/solace/TH2-Ex2b.gif",
                      type: "gif"
                  }},
                  {letter: "C", title: "Boxes Slide on top of each other as you scroll", content: [
                      "This one is interesting because it flips how we fundamentally perceive movement through our screens. Usually, we think of it like reading a newspaper. As you get to the bottom of the page, you slide the newspaper upwards on the table before you to bring the bottom into view. But the way Solace does this animation, it’s like the content on the newspaper is shifting for you. It’s like Solace is bending over backwards to bring ITSELF into view instead of you bringing it into view."
                  ], image: {
                      before: "/playbook/products/solace/TH2-Ex3a.jpg",
                      after: "/playbook/products/solace/TH2-Ex3b.gif",
                      type: "gif"
                  }},
              ]
          },
          {  
            id: 'theme5-3',
            title: 'Thoughtful "what ifs" prove they care',
            content: [
                "How do you prove to patients and caretakers that you really care about them? The simplest way is to be thoughtful. Show that you are anticipating their needs and potential confusions.",
            ],
            examples: [
                {letter: "A", title: "Emergency disclaimer feels safe", content: [
                    "In an emergency, seconds matter. Solace makes sure that you’re not wasting these precious seconds on their platform when it’s not for emergencies. Telling the user when NOT to use their platform shows that they care ultimately about the user and not just their own conversion rates. And shows that they prioritize safety above all."
                ], image: {
                    before: "/playbook/products/solace/TH3-Ex1a.jpg",
                    after: "/playbook/products/solace/TH3-Ex1b.jpg",
                    type: "static"
                }},
                {letter: "B", title: "Offer to sign up by phone feels generous", content: [
                    "If there’s one thing I learned working at Yerbba, it’s that in healthcare people really appreciate a human touch. Solace offers the option to sign up by phone, something I haven’t seen many other products do. Even if a potential user doesn’t take them up on this offer, I guarantee they will appreciate the invitation.",
                ], image: {
                    before: "/playbook/products/solace/TH3-Ex2a.jpg",
                    after: "/playbook/products/solace/TH3-Ex2b.jpg",
                    type: "static"
                }},
            ]
        },
        ],
      },
]