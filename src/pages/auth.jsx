import { useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/login";
import Singup from "@/components/singup";
import { useEffect } from "react";
import { UrlState } from "@/context";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate();
  const { isAuthenticated, loading } = UrlState();

  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
  }, [isAuthenticated, loading, longLink]); // Include longLink in the dependency array
  
  return (
    <div className="mt-36 flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold flex justify-center">
        {searchParams.get("createNew")
          ? "Hold up! You need to login first"
          : "Login / Signup"}
      </h1>
      <div className="flex justify-center">
        <Tabs defaultValue="login" className="w-[400px] mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Login />
          </TabsContent>
          <TabsContent value="signup">
            <Singup />{" "}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
