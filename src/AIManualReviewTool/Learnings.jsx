import SectionHeader from "../library/SectionHeader.jsx"

function Learnings(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">
                
                {/* Header */}
                <div className="subSection alignLeft">
                    <SectionHeader
                        label="Learnings"
                        title="The most complex product I’ve ever designed"
                    />
                    <div className="content">The complexity I wrangled along the way for this internal tool was staggering. It was a journey full of twists, turns, bumps, and back-tracks that sharpened my critical thinking skills from a dull butter knife to a razor-sharp katana.</div>
                </div>

                {/* Learning #1 */}
                <div className="subSection alignLeft">
                    <div className="h3">Dig deep in root-cause-analysis as early as possible</div>
                    <div className="content">I would have saved a lot of time by digging one layer deeper at the very beginning. We assumed that the tool would be structured by reports, and I failed to question this basic structure.</div>
                    <div className="content">Pivoting to a user-based organization took a lot of our focus after launch that could have been spent monitoring our users and improving the consumer-facing product.</div>
                </div>

                {/* Learning #2 */}
                <div className="subSection alignLeft">
                    <div className="h3">Tools for complex, repetitive work should strive to minimize page switches</div>
                    <div className="content">Obviously, tools are going to have multiple pages. But once the user is doing the thing that they came to do, you don’t want to make them constantly load different pages. For example, once you open up a Figma board, you don’t have to load a new page to work on one of your wireframes. In my designs for this tool, the manual reviewer has to do a lot of going back and forth between a review and the page containing the reviews.</div>
                    <div className="content">But every time I closed my laptop with a rats nest of frames, I made it harder on my future self. I made it harder on my boss when sharing my screen during meetings. I made it harder on our marketer who couldn’t use my Figma as an information source. In the future, I need to treat my Figma as a design project in itself.</div>
                </div>

                {/* Learning #3 */}
                <div className="subSection alignLeft">
                    <div className="h3">Tools for unpredictable work should be as flexible as possible</div>
                    <div className="content">There are some user flows that can be linear. In a sign up flow, for example, everyone follows mostly the same steps. A complex tool like this, though, has an infinite number of possibilities. The AI could make a thousand different mistakes. A user’s medical records could be updated for a thousand different reasons. Which means the journey for the manual reviewer could look different every time. But I was still designing it with that linear, assembly-line way of thinking.</div>
                    <div className="content">As a result, the experience was a bit rigid at first. Many of our changes over the years were geared towards more flexibility. For example, being able to see all of the variables within a document when you’re looking at the list of documents. Not just when you click into each document.</div>
                </div>

            </div>
        </div>
    )
}

export default Learnings