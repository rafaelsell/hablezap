import { useBreakpointValue } from "@chakra-ui/react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
