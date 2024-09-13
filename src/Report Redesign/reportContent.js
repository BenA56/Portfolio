export const reportContent = {
    subHeader: "Creating a personalized breast cancer report to help patients take ownership of their treatment journey",
    opportunity: [
        "There are 242,100 people diagnosed with Breast Cancer in America every year.",
        "The treatment of breast cancer is laden with difficult decisions that should be made based on the patient’s personal values. Which means patients need to be educated about their unique breast cancer in order to make the best decisions for themselves.",
        "Currently, no solution for patient-education exists that is personalized, accessible, and understandable.",
        "The problem with relying purely on doctors is that:",
        "doctors don’t have the time to walk every patient through every option.",
        "many doctors have “a certain way of doing things” from years of practice that might not align with the patient’s values. ",
        "when the patient goes home to process all of this complex information, they can’t take the doctor with them",
        "As a result, many patients turn to Google in search of answers. This is like trying to find a needle in a haystack:",
        "Since the information is not tailored to their unique cancer, they have to deduce what applies to them and what doesn’t.",
        "This is a difficult task when there are dozens of factors that make their tumor unique and determine what treatment options are available to them."
    ],
    context: "The Yerbba Report provides breast cancer patients with personalized information including treatment options, cancer traits, and action items. When Yerbba brought me on board, the Yerbba Report was up and running. But most of the focus had been on making the back-end functional. Not much thought had been given to the user experience.  My job was simple - ",
    goal: "research, design, and build a completely new Yerbba Report that breast cancer patients would actually want to buy and use",
    research: [
        "The first step was to assess the old Yerbba Report experience, while learning as much as I could about breast cancer. To assess the old Yerbba Report, I ran two rounds of usability testing. In addition to the usual tasks designed to evaluate usability, I included questions designed to get people talking about their breast cancer experience in general. This helped me to empathize with breast cancer patients and better understand their needs. In order to learn about breast cancer itself, I watched videos, read books such as _______, and did stakeholder interviews with our in-house doctor.",
        "For each round of testing, I took notes using a virtual white board on every interview. Then I went through the sticky notes, searching for patterns and creating groups until tangible themes revealed themselves."
    ],
    conclusions: [
        "Many users never click into their Yerbba Report",
        "Users don’t know if/what information is personalized",
        "Classification of necessity for treatment categories feels hard to compare",
        "Users want a visual road-map of what is to come"
    ],
    iteration: [
        "For each page/feature of the report, I started with sketches. Lots of sketches. Since the project was so open-ended, I made sure to keep my early iteration focused on breadth rather than depth. That way, I could explore several different approaches rather than iterating on the details of one approach. Also, this process helped me gain a better understanding of the problem at hand. When I got to the 6th, 7th, 8th idea, I would find myself thinking “Oh, what we’re really solving here is _”. By the time I was done sketching, I usually had a gut-feeling for which ideas were worth wire-framing and discussing.",
        "I made sure to keep my early iteration focused on breadth rather than depth",
        "An example “crazy 8s” exercise to brainstorm different ideas for how the user might compare different aspects of each treatment option",
        "For each page/feature, I would make 2-3 wireframes illustrating the different approaches. The goal of the wireframes was to facilitate a conversation with the CEO at our daily morning meetings. I needed him to visualize my ideas so he could give me feedback on:",
        "How does each design align with the CEO’s vision?",
        "This was crucial because as the person running the company, he had the broadest viewpoint of the product. He brought in perspectives that I couldn’t possibly see just focusing on the design. And that vision was very useful when there were tough decisions to make and a lack of time/money for the proper research to make them.",
        "Which designs are technically possible?",
        "My job was to bring him the best possible solution, regardless of technical constraints. Then he would tell me what is possible or not possible based on the back-end infrastructure.",
        "Which designs are most deserving of further iteration?",
        "An example of different ideas brought to a meeting during the wire-framing process, along with the pros and cons written out",
        "One of the toughest parts of this process for me was making decisions. As a very open-minded person, I couldn’t help but see the positives of each option and feel lost. What helped the most was writing out all of the pros and cons I could think of for each design option. This  forced me to take a logical approach and exposed any irrational worries that were clouding my thought process. By the time I finished writing out the pros and cons, I usually had a gut feeling of which design to go with. Also, the pros and cons lists were essential for helping my boss keep the design decisions straight in his own head, as he came into each meeting juggling thoughts about marketing, back-end, security, AI, etc.",
        "By the time I finished writing out the pros and cons, I usually had a gut feeling of which design to go with."
    ],
    visualization: [
        "We needed a way for the user to visualize how all of their possible treatment categories fit together both in terms of likelihood and time. This was important for two reasons:",
        "We knew from our initial research that helping patients visualize the next couple years of their life would be super valuable. This visualization would ideally help people answer questions like:",
        "How long do I have to spend on each treatment?",
        "How and when are my breaks in treatment going to come?",
        "At what points in the process will I need to make important decisions?",
        "Am I going to be going through chemo during my daughter’s graduation? What about family vacation?",
        "My boss felt that having a flashy visualization would sell the product.",
        "After doing some difficult iteration on the visualizations to cram in all of the information that was needed, we realized that they had become quite complex and we had no clue how users would interpret them. Although we were planning on waiting for a cohesive prototype to do usability testing, we decided this was important enough and unclear enough to warrant a research study of its own.",
        "We narrowed it down to our three favorite ideas and designed a test where the participant would have to explain their interpretation of each of the ideas and then at the end, pick which one they liked the most. We used UserBrain to get results from real cancer patients and get them fast.",
        "The results were conclusive. People did not want to think really hard to understand a complex visualization full of concepts that were already foreign to them. They wanted a straight-up visualization that left nothing to interpretation. There were two key components that tested well for being visual while still having clarity:",
        "each treatment category had a four-bar scale measuring how necessary that treatment would be for a patient. For example, surgery is usually a four because you have to get the tumor out. But chemo, is often times a 2 because it merely reduces the chances of the cancer coming back and you might be fine without it.",
        "having an icon for the different kinds of relationships as well as using layout helped people to understand how the treatment categories fit together. Treatments that are done at the same time were placed on the same row whereas a treatment that comes sequentially after was placed below.",
        "Simple and straightforward. And as far as marketing goes, doesn’t a visualization that makes sense beat a visualization that is complicated, but doesn’t communicate its actual value?"
    ],
    testing: [
        "Once I had all of the screens designed, I wanted to do usability testing on the product as a whole. First, I spent one month learning and building a prototype using Protopie, a new tool for me. I wanted to use Protopie because it offered conditional logic and variables (this was before Figma offered those) so I could make a fully functional and responsive prototype. This meant that I could actually watch users go through the full process of submitting a question within the report or saving an action item. Although it took one month to learn and build, it was worth the effort because our tests were much more realistic and it was much faster than developing the product which took six months. Although, I do wonder if developing a prototype in React would have been far more efficient because it would have offered me full control plus I wouldn’t have to learn a brand new tool. Plus I could have reused code from the React prototype further down the line.",
        "I wanted to use Protopie because it offered conditional logic and variables .. so I could make a fully functional and responsive prototype.",
        "I ended up running 4 rounds of usability testing, the first three in the mobile protopie version and the last one in a simpler Figma version. I switched to a basic Figma prototype for the last one because we were confident in the interactions, we just wanted to see if there would be any major differences between the web and the mobile version. For example, my boss was concerned that the tabs in web would be less discoverable than in mobile. I wasn’t sure either. Thankfully, they were not.",
        "Aside from a lot of small details, the biggest improvement we made during this time was making the treatment option modals more discoverable. These modals are important because they offer pros, cons, and other info on specific treatment options, for example different chemotherapy regimens. Once discovered, this is usually an aha moment for the user where they really realize the value of the Yerbba Report because a doctor is usually not going to walk their patient through every single chemotherapy regimen available to them.",
        "The problem was that no one was clicking on the cards to open the modals. The saw the card, saw the long scientific name of the treatment option, and simply moved on. Perhaps they were intimidated or perhaps they didn’t expect there to be detailed information on each regimen.",
        "After some trial and error, I found a way to incentivize users to open the treatment option modals. Every treatment option generally has a reason why someone would choose it. Maybe it’s friendlier on the heart. Maybe it’s shorter. Maybe it’s the most aggressive. Extracting this main advantage and putting it directly on the card as both a way to identify the treatment option and a hook to trigger curiosity, caused a much higher percentage of people to open the treatment options modal. Also, it gave users a nice way to compare different treatment options across one attribute in one view, without having to constantly open and close the modals to do so.",
    ],
    deepDive2: [
        "Aside from a lot of small details, the biggest improvement we made during this time was making the treatment option modals more discoverable. These modals are important because they offer pros, cons, and other info on specific treatment options, for example different chemotherapy regimens. Once discovered, this is usually an aha moment for the user where they really realize the value of the Yerbba Report because a doctor is usually not going to walk their patient through every single chemotherapy regimen available to them.",
        "The problem was that no one was clicking on the cards to open the modals. The saw the card, saw the long scientific name of the treatment option, and simply moved on. Perhaps they were intimidated or perhaps they didn’t expect there to be detailed information on each regimen.",
        "After some trial and error, I found a way to incentivize users to open the treatment option modals. Every treatment option generally has a reason why someone would choose it. Maybe it’s friendlier on the heart. Maybe it’s shorter. Maybe it’s the most aggressive. Extracting this main advantage and putting it directly on the card as both a way to identify the treatment option and a hook to trigger curiosity, caused a much higher percentage of people to open the treatment options modal. Also, it gave users a nice way to compare different treatment options across one attribute in one view, without having to constantly open and close the modals to do so.",
    ],
    launch: "After finishing the designs in June 2023, the goal was to launch the Yerbba Report by December 2023. The coding process was grueling. I learned a lot about the shortcomings of my designs. There were many times while coding that I had to improvise design details because I had not been thorough enough to include them in the initial designs. There were also a couple of times I had to redesign entire components because there was a medical case I had not considered. For example, it’s very difficult to create a single component that displays the schedule for any type of chemotherapy regimen. It ended up taking about 8 months instead of 6, but in February 2024 the Yerbba Report was launched! It remains unclear how successful this product will be, but we have seen promising signs early on as almost half of the users who have gotten their free preview have gone on to purchase the full report.",
    lessons: [
        "Don’t overuse modals",
        "Modals can be a very tempting solution because because you don’t have to complicate the information architecture and it’s easy for the user to get back to whatever they were doing. But as soon as you use a modal, you are restricting the space available for whatever information you need to display. Also, the navigation within a modal can get complicated, especially on the coding side. So if the information you need to display within the modal is very dense, or it is a complex process with several different steps, there is probably a better way to go about it",
        "Build user personas at the beginning",
        "Part of the reason it was so hard for me to make decisions during the design process was because I didn’t document who I was designing for and what was important to them. While I did research before the design process, the design process took so long that it was easy to forget a lot of the things I had learned about the users without the proper documentation to remind me.",
        "Test designs with every possible format of real data before development",
        "When creating designs to visually represent medical information, they are very much tailored to the example data that you use. So if you are missing a case, there is a good chance that it will break the design and you won’t realize it until you begin coding and start feeding real content into the designs.",
        "Designs need to be more detailed before development",
        "Seemingly small details can really slow down development. Making design decisions on the fly while coding is not only slower, but can also have unexpected repercussions on the rest of the design. Even for the smallest of details. So before coding, make sure all design decisions have been made.",
        "Don’t ignore error/success states when designing",
        "It is useful to consider these when designing to think about how they will fit into the design and also if there is a way to standardize them so that you’re not coding separate error states for each feature later on.",
        "Usability doesn’t always align with marketability",
        "As humans, we are drawn to complexity, beauty, and flash. But these can get in the way of a functional experience if used incorrectly. Testing will tell you if they actually work."
    ]
}