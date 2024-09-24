import { Stack, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer, Navbar } from "./components";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack
      color={"brand.white.100"}
      minH={"100vh"}
      w={"100%"}
      bgColor={"brand.black.100"}
      align={"center"}
      bgImage={"bgeffect.svg"}
      bgSize={"cover"}
      bgPos={"center"}
    >
      <Stack align={"center"} minH={"100vh"} maxW={"1200px"} w={"100%"}>
        <Navbar />
        {children}
        <Footer />
      </Stack>
    </Stack>
  );
};
