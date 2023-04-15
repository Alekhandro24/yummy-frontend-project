import { Box } from '../Box';
// import { closeLogo, closeInfo } from '../../redux/modal';
import cross from '../../images/logo/cross-header.svg';
import { FiUser } from 'react-icons/fi';
import {
  // Input,
  P,
  Button,
} from './UserProfileContent.styled';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';

// const user = 'User';

export const UserProfileContent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserInfo());
  return (
    <Box borderRadius={24} box-shadow="0px 4px 48px rgba(0, 0, 0, 0.1)">
      <Box
        width={{ xs: 20 }}
        height={{ xs: 20 }}
        display="flex"
        ml="auto"
        onClick={() => {
          handleClose();
        }}
      >
        {<img src={cross} alt="cross" />}
      </Box>
      <Box
        display={{ xs: 'flex' }}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          width={{ xs: 88 }}
          height={{ xs: 88 }}
          borderRadius="50%"
          overflow="hidden"
          bg="#D9D9D9"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FiUser size={40} cursor="pointer" color="gray" />
          {/* <Avatar alt="Avatar" src="" /> */}
        </Box>
        <Box
          width={{ xs: 24 }}
          height={{ xs: 24 }}
          bg="greenColor"
          borderRadius="50%"
          position="absolute"
          top={{ xs: 65 }}
          left={{ xs: 165, lg: 212 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="whiteColor"
        >
          <P>+</P>
        </Box>
      </Box>
      <Box>
        <Button
          onClick={() => {
            handleClose();
          }}
        >
          Save changes
        </Button>
      </Box>
    </Box>
  );
};