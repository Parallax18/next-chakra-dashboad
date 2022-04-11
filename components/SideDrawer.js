import React, {useState} from 'react'
import { Drawer, DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, Button, useDisclosure, VStack, DrawerOverlay } from '@chakra-ui/react'
import DrawerItem from './DrawerItem'
import { IoRocketOutline, IoReceiptOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md"
import { RiWallet3Line } from "react-icons/ri"
import { BsCart2, BsBank, BsClipboardData } from "react-icons/bs";
import { FiSettings, FiUsers } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { GiAbacus } from "react-icons/gi";
import Image from 'next/image';
const Logo = require('../assets/my-logo.svg')



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
    icon: IoReceiptOutline,
    buttonText: 'Payroll'
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
        sx={{zIndex: '-20'}}
      >
        
        
        <DrawerContent sx={{background: '#F9F9F9', shadow: 'none', zIndex: '-20'}}>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>
            <Image src={Logo} width={100} height={52} objectFit="cover" />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} >
              {dashboardItem.map((item, index) => <DrawerItem key={index} icon={item.icon} buttonText={item.buttonText} options={item.options} />)}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} color="red" onClick={onClose}>
              <BiLogOut />
              Logout
            </Button>
        
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
