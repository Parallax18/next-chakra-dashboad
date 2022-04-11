import React, {useState} from 'react'
import { Drawer, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, DrawerFooter, Button, useDisclosure, VStack } from '@chakra-ui/react'
import DrawerItem from './DrawerItem'
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md"
import { RiWallet3Line } from "react-icons/ri"
import { BsCart2, BsBank, BsClipboardData } from "react-icons/bs";
import { FiSettings, FiUsers } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { GiAbacus } from "react-icons/gi"



const data = [
  {
    icon: IoRocketOutline,
    buttonText: 'Welcome'
  },
  {
    icon: MdOutlineDashboard ,
    buttonText: 'Dashboard'
  },
  {
    icon: RiWallet3Line,
    buttonText: 'Sales',
    options: ['bills', 'vendors', 'products and services']
  },
  {
    icon: BsCart2,
    buttonText: 'Purchases',
    options: ['bills', 'vendors', 'products and services']
  },
  {
    icon: GiAbacus,
    buttonText: 'Accounting'
  },
  {
    icon: BsBank,
    buttonText: 'Banking',
    options: ['bills', 'vendors', 'products and services']
  },
  {
    icon: BsClipboardData,
    buttonText: 'Report'
  },
  {
    icon: FiUsers,
    buttonText: 'Analytics',
    options: ['bills', 'vendors', 'products and services']
  },
  {
    icon: FiSettings,
    buttonText: 'Settings'
  },
]


export default function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dashboardItem, setDashboarditem] = useState(data)
  // const [accordionIsOpen, setAccordionIsOpen] = useState(false)
 

  return (
    <Drawer
        isOpen={true}
        placement='left'
        onClose={onClose}
        size={'xs'}
      >
    
        <DrawerContent className='bg-red-900' sx={{background: '#F9F9F9'}}>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>Hello, Sam</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} >
              {dashboardItem.map((item) => <DrawerItem icon={item.icon} buttonText={item.buttonText} options={item.options} />)}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
