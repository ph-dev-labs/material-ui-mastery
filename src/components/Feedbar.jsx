import { Box } from '@mui/system'
import React from 'react'
import Post from './post'


export const Feed = () => {
  return (
    <Box flex={4} p={2} >
       <Post />
       <Post />
       <Post />
       <Post />
    </Box>
  )
}
export default Feed