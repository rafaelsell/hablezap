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
    >
      <Stack align={"center"} minH={"100vh"} maxW={"1200px"} w={"100%"}>
        <Navbar />
        {children}
        <Footer />
      </Stack>
      <Image
        pointerEvents={"none"}
        zIndex={0}
        overflow={"hidden"}
        objectFit={"cover"}
        src="/bgeffect.svg"
        alt="bgeffect"
        position={"absolute"}
        top={70}
      />
    </Stack>
  );
};
