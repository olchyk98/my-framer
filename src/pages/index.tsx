import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
//import { performValidation } from '@/validation-worker'

const MotionBox = motion(Box)

export default function Home () {
  return (
    <MotionBox
      height="40"
      borderRadius="xl"
      width="40"
      bg="red.400"
      whileHover={{ x: 40 }}
    />
  )
}
