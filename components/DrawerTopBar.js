import { Flex, HStack, Text, Box, MenuButton, Menu, Button, MenuItem, MenuList } from '@chakra-ui/react'

import Image from 'next/image';
import React from 'react';
import { GrNotification } from "react-icons/gr"
import { IoChevronDown } from 'react-icons/io5';
const profilePic = require("../assets/user-pic.jpeg")

export default function DrawerTopBar() {
  return (
    <Flex background={'#F9F9F9'} w="full" padding={3} justifyContent="end">
        <HStack spacing={4}>
            <Box padding={4} border="1px" rounded={'full'} borderColor={'#ccc'}>
                <GrNotification />
            </Box>
            
                
                <Menu>
                <MenuButton as={Button} background="n" fontSize={12} cursor="pointer"  rightIcon={<IoChevronDown />}>
                    <HStack>
                        <Flex rounded={'full'} justifyContent="center" alignItems={'center'}>
                            <Image src={profilePic} width={52} height={52} className="rounded-full object-cover"/>
                        </Flex>
                        <Text>Yomi Ogunlana</Text>
                    </HStack>
                </MenuButton>
                <MenuList>
                    <MenuItem minH='48px'>
                    
                    <span>Fluffybuns the Destroyer</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                   
                    <span>Simon the pensive</span>
                    </MenuItem>
                </MenuList>
                </Menu>
            
        </HStack>
    </Flex>
  )
}
