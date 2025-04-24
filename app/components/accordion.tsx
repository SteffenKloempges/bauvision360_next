import { Accordion, AccordionItem } from "@heroui/accordion";
import { contentAccordion } from "./accordionContent";
import { v4 as uuidv4 } from 'uuid';

const AccordionComponent = () => {

    return <section className="max-w-screen-xl mx-auto">
        <Accordion>
            {contentAccordion.map((item) => (
                <AccordionItem key={item.key} aria-label={item.ariaLabel} title={item.title}>
                    <article className="ml-4">
                        <h2 className="text-xl my-4 font-bold">{item.title}</h2>
                        <p>{item.description}</p>
                        <h2 className="text-xl my-4 font-bold">{item.subTitle}</h2>
                        <p>{item.subDescription}</p>
                        <h3 className="text-l my-4 font-bold">{item.advantages.advantageTitle}</h3>
                        <ul>
                            {item.advantages.advantagesItems.map((advantage) => <li className="ml-4 my-2" key={uuidv4()}>
                                <span className="font-bold">{advantage.slice(0, advantage.indexOf(":") + 1)}</span>
                                {advantage.slice(advantage.indexOf(":") + 1)}
                            </li>)}
                        </ul>
                        <h4 className="text-l my-4 font-bold">{item.summary.summaryTitle}</h4>
                        <p>{item.summary.summaryDescription}</p>
                    </article>
                </AccordionItem>
            ))}
        </Accordion>
    </section>
}

export default AccordionComponent;