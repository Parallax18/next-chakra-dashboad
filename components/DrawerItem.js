import { Button, Icon,  Text, Image } from '@chakra-ui/react'
import React from 'react'
import { IoRocketOutline } from "react-icons/io5"
// import { rocket } from "../assets/icons"

export default function DrawerItem({icon, buttonText}) {
  return (
    <Button w="full" background="none" outline={"none"}>
      <Icon as={icon} marginRight={7} color="#c4c4c4" w={6} h={6}/>
    
      <Text color="#BFBFBF" w='full' textAlign={'left'} fontSize={14}>{buttonText}</Text>
    </Button>
  )
}
