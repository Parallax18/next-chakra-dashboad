import { VStack, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import DrawerTopBar from '../components/DrawerTopBar'
import Report from '../components/Report'
import SideDrawer from '../components/SideDrawer'

export default function dashboard() {
  return (
    <Flex>
      <div className='w-1/4'>
        <SideDrawer />
      </div>
      <VStack className='w-3/4' zIndex={10000}>
        <DrawerTopBar />
        <VStack padding={5} width="full">
          <Heading w="full" textAlign={"left"} fontSize={20}>View reports</Heading>
          <Report />
          <Report />
          <Report />
          <Report />
        </VStack>
      </VStack>
    </Flex>
  )
}
