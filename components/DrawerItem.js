import {
  Button, Icon,  Text, Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import React, { Fragment, useState } from 'react'

export default function DrawerItem({icon, buttonText, options}) {
  
  const [accordionIsOpen, setAccordionIsOpen] = useState(false)
  const toggleAccordion = () => {
    console.log('clicked', accordionIsOpen)
    setAccordionIsOpen(!accordionIsOpen)
  }
  return (
   
    <Fragment>
      {options ? (
         <Accordion allowToggle w="full">
         <AccordionItem w="full"  border="none" >
             <AccordionButton onClick={toggleAccordion} className='space-x-5' w="full" background="none" outline={"none"} _focus={{outline: 'none'}} _active={{outline: 'none'}}>
               
                <div className={accordionIsOpen && 'bg-indigo-900 rounded-full h-12 w-12 p-3 flex items-center justify-center'} >
                 <Icon as={icon}  color={accordionIsOpen ? "#ffff" : "#c4c4c4"} w={6} h={6}/>
                </div>
               
                 <Text color={accordionIsOpen ? '#333' : "#BFBFBF"} w='full' textAlign={'left'} fontSize={14}>{buttonText}</Text>
               
               <AccordionIcon color="#BFBFBF"/>
             </AccordionButton>
           <AccordionPanel pb={4} display={'flex'} alignItems="flex-end" flexDirection="column">
             {options.map((option) => (
               <Button w="full" textAlign={'left'} background="none"  outline={"none"} _focus={{outline: 'none'}} _active={{outline: 'none'}} color="#cccc"  fontSize={14}>
                 <Text className='w-2/3' textAlign={'left'}>{option}</Text>
               </Button>
             ))}
           </AccordionPanel>
         </AccordionItem>
       </Accordion>
      ) : 
          <Button w="full" background="none" outline={"none"} color="#BFBFBF" _focus={{outline: 'none'}} _active={{outline: 'none'}} justifyContent={"left"} fontSize={14} >
            <Icon as={icon} marginRight={7} color="#c4c4c4" w={6} h={6}/>
            {buttonText}
          
        </Button>
      }
    </Fragment>
   
  )
}


const styles = {
  menulist: {
      background:  'none'
  }
}