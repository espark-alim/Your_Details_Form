import logo from './logo.svg';
import './App.css';
import LoginForm from './components/form';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <>
      <LoginForm />
      {/* <Box bg='red.200' w={['full']}>
        This is a box
        <Text fontSize={{ base: '30px', md: '40px', lg: '56px' }}>
          This is responsive text
        </Text>
      </Box> */}

    </>
    // <>
    //   <Box
    //     height={{
    //       base: '100%', // 0-48em
    //       md: '50%', // 48em-80em,
    //       xl: '25%', // 80em+
    //     }}
    //     bg='teal.400'
    //     width={[
    //       '100%', // 0-30em
    //       '50%', // 30em-48em
    //       '25%', // 48em-62em
    //       '15%', // 62em+
    //     ]}
    //   />
    //   {/* responsive font size */}
    //   <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font Size</Box>
    //   {/* responsive margin */}
    //   <Box mt={[2, 4, 6, 8]} width='full' height='24px' bg='tomato' />
    //   {/* responsive padding */}
    //   <Box bg='papayawhip' p={[2, 4, 6, 8]} color={'red'} fontWeight={'bold'}>
    //     Padding
    //   </Box>
    // </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  );
}

export default App; 
