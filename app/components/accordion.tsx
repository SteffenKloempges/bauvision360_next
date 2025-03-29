import { Accordion, AccordionItem } from "@heroui/accordion";
import { section } from "framer-motion/client";

const AccordionComponent = () => {

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return <section className="max-w-screen-xl mx-auto">
        <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Was versteht man unter Trockenbau ?">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Was bieten wir Ihnen als Bauleitung ?">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Wieso ist stink Marcel sein Penis nach Gorgonzola ?">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    </section>
}

export default AccordionComponent;