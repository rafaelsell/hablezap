import {
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Button,
  InputRightElement,
  IconButton,
  Box,
  Text,
  FormControl,
} from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsCopy, BsPerson } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";
import { RiAiGenerate, RiLinkM } from "react-icons/ri";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const schema = z.object({
  phone: z.string().min(10),
  name: z.string().min(2).max(30),
  subject: z.string().min(2).max(30),
  message: z.string().min(2).max(300),
});

type TInputs = z.infer<typeof schema>;

export const HomePage = () => {
  const [previewText, setPreviewText] = useState("...");
  const [defaultMessage, setDefaultMessage] = useState(
    "Hey, I'm {name}. I want to talk with you about {subject}. Here is my thoughts:{message}"
  );
  const handleDefaultMessage = ({
    name,
    subject,
    message,
  }: {
    name: string;
    subject: string;
    message: string;
  }) => {
    const newMessage = defaultMessage
      .replace("{name}", name)
      .replace("{subject}", subject)
      .replace("{message}", message);
    return newMessage;
  };

  const {
    register,
    handleSubmit: handleFormSubmit,
    watch,
  } = useForm<TInputs>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = (data: TInputs) => {
    console.log(data);
  };

  useEffect(() => {
    const name = watch("name");
    const subject = watch("subject");
    const message = watch("message");
    setPreviewText(
      handleDefaultMessage({ name: name, subject: subject, message: message })
    );
  }, [defaultMessage, watch, previewText, handleDefaultMessage]);

  return (
    <Stack
      minH={"80vh"}
      gap={8}
      direction={"row"}
      justify={"center"}
      align={"center"}
    >
      <Stack gap={2} as={"form"} onSubmit={handleFormSubmit(handleSubmit)}>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon
                h={"24px"}
                color={"brand.white.35"}
                as={AiOutlineWhatsApp}
              />
            </InputLeftElement>
            <Input
              {...register("phone")}
              color={"brand.white.100"}
              bgColor={"brand.black.200"}
              borderColor={"brand.white.5"}
              focusBorderColor={"brand.green.100"}
              borderWidth={"1px"}
              _hover={{
                borderColor: "brand.white.35",
              }}
              _placeholder={{
                color: "brand.white.35",
                lineHeight: 1,
              }}
              lineHeight={"100%"}
              borderRadius={8}
              placeholder="55999999999"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon h={"24px"} color={"brand.white.35"} as={BsPerson} />
            </InputLeftElement>
            <Input
              {...register("name")}
              color={"brand.white.100"}
              bgColor={"brand.black.200"}
              borderColor={"brand.white.5"}
              focusBorderColor={"brand.green.100"}
              borderWidth={"1px"}
              _hover={{
                borderColor: "brand.white.35",
              }}
              _placeholder={{
                color: "brand.white.35",
                lineHeight: 1,
              }}
              lineHeight={"100%"}
              borderRadius={8}
              placeholder="John Doe"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon h={"24px"} color={"brand.white.35"} as={MdOutlineSubject} />
            </InputLeftElement>
            <Input
              {...register("subject")}
              color={"brand.white.100"}
              bgColor={"brand.black.200"}
              borderColor={"brand.white.5"}
              focusBorderColor={"brand.green.100"}
              borderWidth={"1px"}
              _hover={{
                borderColor: "brand.white.35",
              }}
              _placeholder={{
                color: "brand.white.35",
                lineHeight: 1,
              }}
              lineHeight={"100%"}
              borderRadius={8}
              placeholder="Work and business"
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <Textarea
              {...register("message")}
              color={"brand.white.100"}
              bgColor={"brand.black.200"}
              borderColor={"brand.white.5"}
              focusBorderColor={"brand.green.100"}
              borderWidth={"1px"}
              _hover={{
                borderColor: "brand.white.35",
              }}
              _placeholder={{
                color: "brand.white.35",
                lineHeight: 1.2,
              }}
              lineHeight={1.2}
              borderRadius={8}
              placeholder="Are you up to a freelance job?"
            />
          </InputGroup>
        </FormControl>
        <Input
          type="submit"
          leftIcon={<Icon as={RiAiGenerate} />}
          borderRadius={8}
          color={"brand.white.100"}
          bgColor={"brand.green.100"}
          size={"md"}
          _hover={{
            bgColor: "brand.green.100",
            transform: "scale(1.03)",
          }}
          as={Button}
          border={"none"}
        >
          Generate
        </Input>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon h={"24px"} color={"brand.white.35"} as={RiLinkM} />
          </InputLeftElement>
          <InputRightElement>
            <IconButton
              size={"sm"}
              borderRadius={6}
              color={"brand.white.100"}
              bgColor={"brand.green.100"}
              borderColor={"brand.white.5"}
              aria-label="copy"
              _hover={{
                bgColor: "brand.green.100",
              }}
              icon={
                <Icon
                  h={"14px"}
                  w={"14px"}
                  color={"brand.white.100"}
                  as={BsCopy}
                />
              }
            />
          </InputRightElement>
          <Input
            readOnly
            color={"brand.white.100"}
            bgColor={"brand.black.200"}
            borderColor={"brand.white.5"}
            focusBorderColor={"brand.green.100"}
            borderWidth={"1px"}
            _hover={{
              borderColor: "brand.white.35",
            }}
            _placeholder={{
              color: "brand.white.35",
              lineHeight: 1,
            }}
            lineHeight={"100%"}
            borderRadius={8}
            placeholder="wa.me/yourlink"
          />
        </InputGroup>
      </Stack>

      <Stack maxW={"300px"}>
        <InputGroup>
          <Textarea
            minH={"150px"}
            color={"brand.white.100"}
            bgColor={"brand.black.200"}
            borderColor={"brand.white.5"}
            focusBorderColor={"brand.green.100"}
            borderWidth={"1px"}
            _hover={{
              borderColor: "brand.white.35",
            }}
            _placeholder={{
              color: "brand.white.35",
              lineHeight: 1.2,
            }}
            lineHeight={1.2}
            borderRadius={8}
            value={defaultMessage}
            onChange={(e) => {
              setDefaultMessage(e.target.value);
            }}
          />
        </InputGroup>
        <Box
          borderLeftRadius={8}
          borderBottomRightRadius={8}
          p={4}
          bgColor={"brand.green.100"}
        >
          <Text fontSize={"sm"} color={"brand.white.100"}>
            {previewText}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};
