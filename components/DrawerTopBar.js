import { Flex, HStack, Text, Box, MenuButton, Menu, Button, MenuItem, MenuList } from '@chakra-ui/react'

import Image from 'next/image';
import React from 'react';
import { GrNotification } from "react-icons/gr"
import { IoChevronDown } from 'react-icons/io5';
const profilePic = require("../assets/user-pic.jpeg")

export default function DrawerTopBar() {
  return (
    <Flex background={'#F9F9F9'} w="full" padding={3} justifyContent="end"  >
        <HStack spacing={4}>
            <Box padding={3} border="1px" rounded={'full'} borderColor={'#ccc'}>
                <GrNotification />
            </Box>
            
                
                <Menu>
                    <MenuButton as={Button} background="n" fontSize={12} cursor="pointer"  rightIcon={<IoChevronDown />}>
                        <HStack>
                            <Flex rounded={'full'} justifyContent="center" alignItems={'center'}>
                                
                                <Image src={profilePic} width={42} height={42} className="rounded-full object-cover"/>
                            </Flex>
                            <Text>Yomi Ogunlana</Text>
                        </HStack>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            
        </HStack>
    </Flex>
  )
}
