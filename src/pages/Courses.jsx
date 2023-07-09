import React from 'react'
import Course from '../components/Course.jsx'
import {Flex, Text} from '@chakra-ui/react'

let Courses = () => {
  return (
    <>
       <Text textAlign="center" mt="30px" fontWeight={700} fontSize="30px" color="#8b1874">Our Courses</Text>
        <Flex> 
           <Course />
        </Flex>
    </>
  )
}

export default Courses