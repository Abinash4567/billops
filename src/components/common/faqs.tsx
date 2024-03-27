import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  

function faqs() {
  return (
    <div className='flex justify-center mt-9 flex-col'>
        <div className='text-4xl ml-96'>Frequently Asked <span className='font-bold'>Questions</span></div>
        <div className='h-fit w-2/5 ml-96 font-semibold'>
            <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="item-1">
            <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
            <AccordionContent>
                Yes. You can contact our sales representative.
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
            <AccordionTrigger>How do I get started with your product/service?</AccordionTrigger>
            <AccordionContent>
                You will provided with Quick guides and instructions of every feature. Moreover you can get help from support 24x7.
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
            <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
            <AccordionContent>
                You can do via option available in the dashboard or contact support.
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
            <AccordionTrigger>What are your company hours?</AccordionTrigger>
            <AccordionContent>
                We have offices all over the world. So you can avail our services and support 24x7.
            </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default faqs