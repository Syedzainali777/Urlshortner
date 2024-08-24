import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL shortener <br /> you ever need!👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your long link"
          className="h-full flex-1 px-4 py-4"
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <Button className="h-full" type="submit" variant="destructive">
          Shorten
        </Button>
      </form>
      <img src="banner.jpeg" alt="banner" className="w-full my-11 md:px-11" />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the URL shortener work?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shortened version
            of that URL. This shortened URL redirects to the original long URL
            when accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is the shortened URL permanent?</AccordionTrigger>
          <AccordionContent>
            Yes, the shortened URL remains functional as long as the original
            URL is valid.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I track the number of clicks?</AccordionTrigger>
          <AccordionContent>
            Yes, you can track how many times your shortened URL has been
            clicked.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landingpage;
