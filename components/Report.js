import { Badge, Box, Button, Checkbox, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { FiMessageSquare } from "react-icons/fi"

export default function Report() {
  return (
    <Flex padding={5} borderBottom="1px" borderBottomColor={'#ccc'} w="full">
        <Checkbox />
        <Flex justifyContent='space-between' w="full" marginLeft={5}>
            <HStack spacing={10}>
                <Flex>
                    <Text>February Report</Text>
                    <Badge ml={1} variant='subtle' fontSize={9} display="flex" alignItems="center" justifyContent={'center'} colorScheme='green' rounded={10} paddingY={0} w={10}>
                        New
                    </Badge>
                </Flex>
                <Text color={'#667085'} fontSize={14}>4th , October 2021  11:20am</Text>
            </HStack>

            <HStack spacing={1}>
                <Button colorScheme={'blue'} paddingX={6}>View</Button>
                <IconButton icon={<FiMessageSquare />} background="none"/>
            </HStack>
        </Flex>
    </Flex>
  )
}
