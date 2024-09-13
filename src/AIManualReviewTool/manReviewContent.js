export const manReviewContent = {
    background: [
        "How does a small startup ensure that they’re producing accurate breast cancer reports when their AI is still learning how to walk? Unfortunately for us, the only solution was to manually review each report for accuracy. When I joined the company, these manual reviews were done by literally sorting through documents and directly editing the database. It was incredibly inefficient, painful to keep track of, and unkind to mistakes. We needed a better system. We needed a robust, flexible yet efficient, internal tool. And thus began a two-year journey to create the Manual Review Tool.",
        "The Yerbba AI takes in a user’s raw medical records, extracts the information relevant to breast cancer, runs that information through in-house algorithms, and finally produces a list of variables. These variables then feed into the front-end to display the user’s actual Yerbba Report. So, the manual review tool needed to allow Yerbba employees of present and future to review these final variables and make sure that they produce an accurate report.",
    ],
    reqs: [
        "Journey for the manual reviewer:",
        "Check for reports that need review (could be new reports or reports with updates)",
        "Select a document with a report that needs reviewing",
        "Check all variables within that document for correctness. Fix any that are incorrect.",
        "Repeat steps 2-3 for all documents that need reviewing",
        "Push the report to our testing environment and make sure everything looks good",
        "Push the report to our production environment, alert the user that their report is ready",
        "What does the reviewer need to make sure a variable is accurate?",
        "See the AI result, which could be as simple as a single string, or as complex as an array of objects",
        "See the code that the AI used to generate that variable",
        "Sometimes, it is helpful to see the raw medical records that the AI was pulling information from",
        "If the report has been re-generated due to a change in the user’s medical records, it is important to see what a given variable was after review in the previous version of the report (didn’t realize this until later iterations, more on this later)."
    ],
    process: [
        "The process for this project was a never-ending journey full of twists and turns. I worked on this tool off and on for almost the entire 2.5 years that I worked for Yerbba. After the initial build, it looked a little something like this:",
        "My CEO/Founder comes to me with an inefficiency, a bug, or a new use case involving the manual review process.",
        "I make him walk me through his current process for the task at hand. I round out the problem by asking questions and digging at the root cause. Although, he tended to phrase things in solution-speak, I’m careful not to jump to solutions.",
        "Time to explore the solution space. The final decision usually comes down to: should we maximize for a seamless fit into the current tool OR … maximize for the most useful version of the new thing?",
        "Finally, I develop. First, I check if there’s any new info that I need from the back-end. If so, I write a REQ document for the back-end functions and send it to my boss for him to implement. Then I code … and code … and code.",
        "One month later, CEO is doing a manual review and notices something else … and the cycle continues.",
        "I’m very proud of how this project evolved over the years. It required me to solve abstract and challenging design problems. I had to learn complicated internal processes with a million “what ifs”, and transform them into intuitive, efficient experiences. I had to carefully manage how the system was displaying the status of its users, reviews, and variables, which required precise wording and a crystal-clear mental model. And coding the front-end was certainly no walk in the park either."
    ],
    improvements: "Through this cycle of improvements, we stumbled across some profound discoveries that clarified what we really needed this tool to do. Here are a few key features that took this internal tool from mediocre to great:",
    userView: [
        "View of Users - Who needs attention?",
        "You’d think it might be obvious for a user-management tool to start with a view of all the users. But we didn’t always know that this was a user-management tool. At the beginning, we simply needed a way to manage, review, and approve breast cancer reports. So we thought of it as a report-management tool.",
        "But after we launched in Feb 2024, we realized that having the context clues for the user of each report was critical. Not only for reviewing the report itself, but also for prioritizing which reports to review. For example:",
        "User with no report > User with update to report",
        "Because each report has to be reviewed at least once before a user can view it, users fresh off of the signup process will be stuck on the accuracy check until we approve their report. The longer we wait to get them their report, the less likely it is that we convert them into a sale. A user with an update to their report, however, already has a report. They may not even know that there is an update waiting to be reviewed and approved.",
        "Paid user with update > Free-preview user with update",
        "A paid user is paying a subscription fee to keep their report updated. A user still on the free-preview of their report, however, probably means that they received their free preview and decided not to purchase the full report. Which means, it would be a waste of company resources to keep their report updated.",
    ],
    versionControl: [
        "Version Control - What’s Changed?",
        "When a user’s report is re-generated after the system detects changes in their medical records, the manual reviewer often finds themselves asking “how does this compare to the previous version of their report?”. In other words, “what’s changed?”. Layering the results from the previous version of the report on top of the new version (inspired by version control systems for code like Git) is helpful because:",
        "It directs the reviewer’s attention towards the change that was made. ",
        "Which could be just one variable amongst hundreds. Without knowing which variable has been changed, the reviewer would be forced to check every variable again. This is a massive amount of duplicated work saved.",
        "The AI can make the same mistake twice.",
        "We might have manually fixed a variable in the previous report that is now broken again because the report was re-generated. With version control, we can identify and fix it again with one click instead of taking the unnecessary time to re-solve it.",
    ],
    changeLog: [
        "Change Log - To Generate or Not?",
        "A user’s medical record can change for many reasons. Sometimes, it’s critical information that would dramatically affect their Yerbba Report. Say, for example, that someone completed their lumpectomy. The post-treatment options in that person’s report could look a lot different knowing the results of the surgery. Other times, however, the change could be as small as a routine flu shot, having no effect on their Yerbba Report.",
        "In the case of insignificant updates, we don’t want to spend the resources required to generate a whole new report for that user. Not only does it cost money to use the required APIs, but it will also cost time to complete the subsequent manual review on the new version of the report.",
        "Therefore, we needed a tool to see which raw medical records have changed so that the manual reviewer can decide whether or not to generate a new version of the report and kickstart the manual review process.",
        "An essential part of the Change Log was building a custom diff checker. It wasn’t enough to know which raw medical records changed. We needed to know how they changed. And we needed this custom diff checker for two reasons:",
        "Speed",
        "it’s much faster to click a button and immediately get the comparison within our internal tool than it is to spend time copying and pasting each document into a third party diff checker.",
        "Privacy",
        "We couldn’t use public diff checkers on the internet because that would mean exposing the data of our patients."
    ],
    lessons: [
        "Dig deep in root-cause-analysis as early as possible",
        "I would have saved the company a lot of time if I had dug one layer deeper at the very beginning. One layer deeper to realize that what we really needed was a way to manage our users, not just the reports that belong to each user. Organizing the tool around the reports was the obvious solution in front of our faces. I failed to question it. Building out the Users page after launching took a lot of time that could have been spent monitoring the users post-launch.",
        "Tools for complex, repetitive work should strive to minimize page switches",
        "Obviously, tools are going to have multiple pages. But once the user is doing the thing that they came to do, you don’t want to make them constantly load different pages. For example, once you open up a Figma board, you don’t have to load a new page to work on one of your wireframes. In my designs for this tool, the manual reviewer has to do a lot of going back and forth between a review and the page containing the reviews.",
        "Tools for unpredictable work should be as flexible as possible",
        "There are some processes that can be very linear. A sign up process for example. Everyone pretty much needs to follow the same steps, and it’s rarely going to be that different from case to case. A complex tool like this, though, has an infinite number of possibilities. The AI could make a thousand different mistakes. A user’s medical records could be updated for a thousand different reasons. Which means the journey for the manual reviewer could look different every time. But I was viewing it in that linear, assembly-line way of thinking. As a result, the experience ended up being a bit rigid. Many of our changes over the years were geared towards more flexibility. For example, being able to see all of the variables within a document when you’re looking at the list of documents. Not just when you click into each document.",
    ]

}