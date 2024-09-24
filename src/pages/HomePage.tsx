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
  useToast,
} from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsCopy, BsPerson } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";
import { RiAiGenerate, RiLinkM } from "react-icons/ri";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useCallback } from "react";

const schema = z.object({
  phone: z
    .string()
    .min(10)
    .refine((data) => /^\d+$/.test(data), {
      message: "Phone number must be a number without +.",
    }),
  name: z.string().min(2).max(30),
  subject: z.string().min(2).max(30),
  message: z.string().min(2).max(300),
});

type TInputs = z.infer<typeof schema>;

export const HomePage = () => {
  const toast = useToast();
  const [link, setLink] = useState<string>("");
  const [previewText, setPreviewText] = useState("...");
  const [defaultMessage, setDefaultMessage] = useState(
    "Hey, I'm {name}. I want to talk with you about {subject}. Here is my thoughts:{message}"
  );

  const handleDefaultMessage = useCallback(
    ({
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
    },
    [defaultMessage]
  );

  const {
    register,
    handleSubmit: handleFormSubmit,
    watch,
  } = useForm<TInputs>({
    resolver: zodResolver(schema),
  });
  const nameStatus = watch("name");
  const subjectStatus = watch("subject");
  const messageStatus = watch("message");

  const handleSubmit = (data: TInputs) => {
    const { message, name, phone, subject } = data;
    const text = handleDefaultMessage({ message, name, subject });
    setLink(`https://wa.me/${phone}?text=${encodeURI(text)}`);
  };

  useEffect(() => {
    const name = watch("name");
    const subject = watch("subject");
    const message = watch("message");
    setPreviewText(
      handleDefaultMessage({ name: name, subject: subject, message: message })
    );
  }, [
    defaultMessage,
    watch,
    previewText,
    handleDefaultMessage,
    nameStatus,
    subjectStatus,
    messageStatus,
  ]);

  return (
    <Stack
      minH={"80vh"}
      gap={8}
      w={"100%"}
      maxW={["300px", "300px", "650px", "650px"]}
      direction={["column", "column", "row", "row"]}
      justify={"center"}
      align={"center"}
    >
      <Stack
        w={"100%"}
        gap={2}
        as={"form"}
        onSubmit={handleFormSubmit(handleSubmit)}
      >
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
              onClick={() => {
                navigator.clipboard.writeText(link);
                if (link === "") {
                  toast({
                    title: "There's no link",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                  });
                  return;
                }
                toast({
                  title: "Link copied!",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
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
            value={link}
            readOnly
            textOverflow={"ellipsis"}
            color={"brand.white.35"}
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

      <Stack w={"100%"} maxW={"300px"}>
        <InputGroup>
          <Textarea
            w={"100%"}
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
          w={"100%"}
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
