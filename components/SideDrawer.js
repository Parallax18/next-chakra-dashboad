import React, {useState} from 'react'
import { Drawer, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, DrawerFooter, Button, useDisclosure, VStack } from '@chakra-ui/react'
import DrawerItem from './DrawerItem'
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md"
import { RiWallet3Line } from "react-icons/ri"
import { BsCart2, BsBank } from "react-icons/bs";
import { FiSettings, FiUsers } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";



const data = [
  {
    icon: MdOutlineDashboard ,
    buttonText: 'Dashboard'
  },
  {
    icon: IoRocketOutline,
    buttonText: 'Welcome'
  },
  {
    icon: RiWallet3Line,
    buttonText: 'Sales'
  },
  {
    icon: BsCart2,
    buttonText: 'Purchases'
  },
  {
    icon: BsBank,
    buttonText: 'Banking'
  },
  {
    icon: FiUsers,
    buttonText: 'Analytics'
  },
  {
    icon: FiSettings,
    buttonText: 'Settings'
  }
]


export default function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dashboardItem, setDashboarditem] = useState(data)

  return (
    <Drawer
        isOpen={true}
        placement='left'
        onClose={onClose}
        size={'xs'}
        // finalFocusRef={btnRef}
      >
    
        <DrawerContent className='bg-red-900' sx={{background: '#F9F9F9'}}>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4}>
              {dashboardItem.map((item) => <DrawerItem icon={item.icon} buttonText={item.buttonText}/>)}
              {/* <DrawerItem />
              <DrawerItem />
              <DrawerItem />
              <DrawerItem /> */}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}
