import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC <IAuthProps> = ({session, reloadSession}) => {

  const [username , setUsername]  = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      setUsername(e.target.value)
      };

    const onSubmit = async ()=>{
    try {
  
    } catch (error) {
    console.log("onSubmit error : " + error);
    }
  }

  return <div>
   <Center height="100vh" >
    <Stack spacing="10" align="center">
      {
        session?(
          <>
          <Text fontSize="2xl" color="whiteAlpha.900">Create a Username</Text>
          
          <Input 
          color="whiteAlpha.900"
          placeholder="Enter a Username"
          value={username} 
          onChange={(e)=> handleInputChange(e)}
          />
          <Button onClick={onSubmit} width="320px">Save</Button>
          </>
        ):(
          <>
          <Text fontSize="2xl" color="whiteAlpha.900">Chat App</Text>
          <Button onClick={() => signIn()} width="320px" height="50px" justifyContent="space-around" leftIcon={<Image height="20px" src="/images/googleLogo.png"/>}>
            Continue with google
          </Button>
          </>
        )
      }
    </Stack>
   </Center>
  </div>;
};

export default Auth;