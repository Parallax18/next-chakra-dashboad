import { VStack, Flex } from '@chakra-ui/react'
import React from 'react'
import DrawerTopBar from '../components/DrawerTopBar'
import SideDrawer from '../components/SideDrawer'

export default function dashboard() {
  return (
    <Flex>
      <div className='w-1/4'>
        <SideDrawer />
      </div>
      <VStack className='w-3/4'>
        <DrawerTopBar />
      </VStack>
    </Flex>
  )
}
