import { Flex, Box } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => (
    <Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
        <Box
            p='5' 
            color='gray.600' 
            borderTop='1px' 
            borderColor='gray.100'
            paddingRight='1'
        >
            Copyright © {new Date().getFullYear()} Marveeen
        </Box>
        <Link href='https://github.com/Marveeeen' passHref>
            <FaGithub cursor='pointer' />
        </Link>
    </Flex>
)

export default Footer