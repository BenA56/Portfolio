import BulletPoint from "../library/BulletPoint"
import SectionHeader from "../library/SectionHeader"

function Learnings(props) {
    return (
        <div className="sectionOuter light">
            <div className="sectionInner">

                {/* Header */}
                <div className="subSection leftAlign">
                    <SectionHeader
                        label="Learnings"
                        title="My First End-to-End, real-world product"
                    />
                    <div className="content">This was my first chance to design and build a real product from research to launch. As you’d expect, I made a lot of mistakes and learned a ton along the way.</div>
                </div>

                {/* Learnings */}

                <div className="subSection alignLeft">
                    <div className="h3">Document every decision along the way</div>
                    <div className="content">While I wrote out the pros and cons for each design, I rarely documented the ultimate decisions that we ended up making and why.</div>
                    <div className="content">Several months would go by and my boss would ask me “Why did we decide this?” and I would be scrambling for an answer. Documenting these decisions would’ve plugged costly knowledge leaks.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3">Treat your Figma as a communication tool</div>
                    <div className="content">Because I was working as a solo designer, I didn’t put much thought into how I organized my work. It was just for me right?</div>
                    <div className="content">But every time I closed my laptop with a rats nest of frames, I made it harder on my future self. I made it harder on my boss when sharing my screen during meetings. I made it harder on our marketer who couldn’t use my Figma as an information source. In the future, I need to treat my Figma as a design project in itself.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3">“Pretty much hi-fi” is not “hi-fi”</div>
                    <div className="content">In the process of development, I found many small details that I didn’t have designed. For example, how certain components were supposed to adjust to mobile or what the hover state of a card is.</div>
                    <div className="content">Making these design decisions on the fly was costly because it led me down random design rabbit holes. Is a design every truly hi-fi? I don’t know, but mine certainly could’ve been closer.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3">Think twice before relying on modals</div>
                    <div className="content">It’s always tempting to use a modal. You don’t have add any navigation to the structure of the product. The user can get back to what they were doing easily.</div>
                    <div className="content">But with every increasing degree of complexity, modals become a less viable option. They limit the space available and navigation between multiple pages within a modal can become a major headache.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3">Build user personas at the beginning</div>
                    <div className="content">A standard step that I missed in my design process. While I had a general sense of who my users were, I found it harder and harder to remember as the process dragged on.</div>
                    <div className="content">Taking some time to formally define what my users value would have made decisions down the road easier to make.</div>
                </div>

                <div className="subSection alignLeft">
                    <div className="h3">Test designs with every possible scenario</div>
                    <div className="content">When I handed off my design to myself, I knew that it worked for most scenarios. However, because I didn’t methodically test out every single type of content, there were a couple scenarios that broke the design.</div>
                    <div className="content">Because of this oversight, I had to spend valuable time re-doing a few of the designs when I was supposed to be in the development process.</div>
                </div>

            </div>
        </div>
    )
}

export default Learnings