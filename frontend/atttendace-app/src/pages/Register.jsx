import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  background,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import YupPassword from "yup-password";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function RegisterPage() {
  // const nav = useNavigate;
  const [user, setUser] = useState({
    initialValues: {
      name: "",
      address: "",
      email: "",
      password: "",
      companyId: 0,
    },
  });

  const inputHandler = (event) => {
    const { id, value } = event.target;
    const tempUser = { ...user };
    tempUser[id] = value;
    console.log(tempUser);
  };

  const signUp = async () => {
    const result = await axios.post("http://localhost:2000/auth", user);
    return alert("yes");
  };
  const company = [{ name: "Purwadhika", id: 1 }];

  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      <Container
        maxW={"100w"}
        flexDir={"column"}
        alignContent={"center"}
        textAlign={"center"}

        // ml={"35%"}
      >
        <Container
          boxShadow={"dark-lg"}
          bgColor={"#212A3E"}
          mt={"40px"}
          maxW={"400px"}
          flexDir={"column"}
          alignContent={"center"}
          textAlign={"center"}
          borderRadius={"15px"}
          border={"1px double"}
        >
          <Center
            w={"100w"}
            pb={"50px"}
            pt={"20px"}
            color={"#9BA4B5"}
            fontSize={"50px"}
            fontWeight={"extrabold"}
          >
            REGISTER
          </Center>

          <Flex flexDir={"column"} gap={"5px"}>
            <Flex fontSize={"16px"} fontWeight={"bold"} color={"#F1F6F9"}>
              Name
            </Flex>
            <Flex>
              <Input
                color={"#F1F6F9"}
                onChange={inputHandler}
                id={"name"}
                border={"1px solid black"}
                placeholder={"Enter Your Name"}
                _height={"48px"}
              ></Input>
            </Flex>

            <Flex fontSize={"16px"} fontWeight={"bold"} color={"#F1F6F9"}>
              Address
            </Flex>
            <Flex>
              <Input
                color={"#F1F6F9"}
                onChange={inputHandler}
                id={"address"}
                border={"1px solid black"}
                placeholder={"Enter Your address"}
                _height={"48px"}
              ></Input>
            </Flex>

            <Flex fontSize={"16px"} fontWeight={"bold"} color={"#F1F6F9"}>
              Email
            </Flex>
            <Flex>
              <Input
                color={"#F1F6F9"}
                onChange={inputHandler}
                id={"email"}
                border={"1px solid black"}
                placeholder={"Enter Your Email"}
                _height={"48px"}
              ></Input>
            </Flex>
            <Flex fontSize={"16px"} fontWeight={"bold"} color={"#F1F6F9"}>
              Password
            </Flex>
            <Flex>
              <InputGroup>
                <Input
                  color={"#F1F6F9"}
                  onChange={inputHandler}
                  id={"password"}
                  border={"1px solid black"}
                  placeholder={"Create your password"}
                  _height={"48px"}
                  type={seePassword ? "text" : "password"}
                ></Input>
                <InputRightElement>
                  <Icon
                    alignContent={"center"}
                    color={"grey"}
                    as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                    w="24px"
                    h="24px"
                    cursor={"pointer"}
                    onClick={() => setSeePassword(!seePassword)}
                  ></Icon>
                </InputRightElement>
              </InputGroup>
            </Flex>

            <Flex fontSize={"16px"} fontWeight={"bold"} color={"#F1F6F9"}>
              Choose your company
            </Flex>
            <Flex>
              <Select
                color={"#F1F6F9"}
                onChange={inputHandler}
                id={"companyId"}
                border={"1px solid black"}
                placeholder={"Company Name"}
                _height={"48px"}
                bgColor={"#212A3E"}
              >
                {company.map((val) => (
                  <option value={val.id} style={{ backgroundColor: "#212A3E" }}>
                    {val.name}
                  </option>
                ))}
              </Select>
            </Flex>

            <Flex
              color={"#394867"}
              mb={"20px"}
              mt={"20px"}
              borderRadius={"25px"}
            >
              <Button
                w={"100%"}
                pb={"20px"}
                textAlign={"center"}
                pt={"17px"}
                fontWeight={"bolder"}
                bgColor={"#9BA4B5"}
                onClick={signUp}
              >
                SIGN UP{" "}
              </Button>
            </Flex>

            <Link to={"/login"}>
              <Center fontWeight={"25px"} mb={"20px"} color={"#F1F6F9"}>
                {" "}
                Have an account? SIGN IN
              </Center>
            </Link>
          </Flex>
        </Container>
      </Container>
    </>
  );
}
