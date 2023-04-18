import { Box } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import {getSession , useSession} from "next-auth/react"
import Chat from "../components/Chat";
import Auth from "../components/Auth";

 const Home: NextPage =() => {
  const {data : session} = useSession();

  const reloadSession = ()=>{

  }

  console.log("here is data : " ,session);
  
  return (
  <Box>
    { session?.user.email ? <Chat/> : <Auth session={session} reloadSession={reloadSession}/>}
  </Box>
  )
}



export async function getServerSideProps ( context: NextPageContext ){

const session = await getSession(context);

return { props:{ session },};

}


export default Home
 