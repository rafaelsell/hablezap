import {
  Button,
  Code,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { BiChat } from "react-icons/bi";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(1, "Message cannot be empty"),
});

type FormData = z.infer<typeof schema>;

export const HomePage = () => {
  const [link, setLink] = useState<string>("");
  const toast = useToast();

  const handleCreateLink = (data: FormData) => {
    const link = `https://wa.me/${data.phone}?text=${encodeURIComponent(
      data.message
    )}`;
    setLink(link);
    navigator.clipboard.writeText(link).then(() => {
      toast({
        duration: 3000,
        isClosable: true,
        status: "success",
        title: "Link created and copied to clipboard",
      });
    });
  };
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Stack
      maxW={"300px"}
      minH={"100vh"}
      w={"100%"}
      justify={"center"}
      align={"center"}
    >
      <Text>
        Create a{" "}
        <Text fontWeight={"bold"} color={"green"} as={"span"}>
          {" "}
          whatsapp link
        </Text>
      </Text>
      <Stack as={"form"} onSubmit={handleSubmit(handleCreateLink)}>
        <FormControl>
          <InputGroup>
            <Input
              {...register("phone")}
              type="tel"
              placeholder="Phone number"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BiChat} />
            </InputLeftElement>
            <Input
              {...register("message")}
              as={Textarea}
              type="text"
              placeholder="Message"
            />
          </InputGroup>
        </FormControl>
        <Input type="submit" variant={"solid"} as={Button}>
          Generate link
        </Input>
        {link.length > 0 ? (
          <Code
            onClick={() => {
              navigator.clipboard.writeText(link).then(() => {
                toast({
                  duration: 3000,
                  isClosable: true,
                  status: "success",
                  title: "Link created and copied to clipboard",
                });
              });
            }}
            color={"brand.white.100"}
            bgColor={"#191919"}
            p={2}
          >
            <Text wordBreak={"break-all"}>{link}</Text>
          </Code>
        ) : null}
      </Stack>
    </Stack>
  );
};
