import { BarLoader } from "react-spinners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Filter } from "lucide-react";

export const dashboard = () => {

  return (
    <div className="flex flex-col gap-12">
      {false && <BarLoader width={"100%"} color="#36d7b7" />}
      <div className="grid grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Links created</CardTitle>{" "}
          </CardHeader>
          <CardContent>
            <p>0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>total Click</CardTitle>{" "}
          </CardHeader>
          <CardContent>
            <p>0</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-extrabold">My links</h1>
        <Button>Create link</Button>
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Filter link"
        />
        <Filter className="absolute top-2 right-2 p-1" />
      </div>
    </div>
  );
};
export default dashboard;
