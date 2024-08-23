import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";


const Landingpage = () => {
  const [longUrl, setlongUrl] = useState()
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL shortner <br /> you ever need!👇
      </h2>
      <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w2/4 gap-2">
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your long link"
          className="h-full flex-1 px-4 py-4"
          onChange={(e) => setlongUrl(e.target.value)}
        />
        <Button  className="h-full" type="submit" variant="destructive">
          Shorten
        </Button>
      </form>
      <img src="banner.jpeg" alt="banner" className="w-full my-11 md:px-11" />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the URL shortner work?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorner version of
            taht URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the URL shortner work?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorner version of
            taht URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the URL shortner work?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorner version of
            taht URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Landingpage