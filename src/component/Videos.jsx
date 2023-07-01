import { VStack,Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'

const Videos = () => {
    
    const videosArr=["https://player.vimeo.com/video/841531588?h=8f89b6433d",'https://player.vimeo.com/video/605069004?h=42eb08f037','https://player.vimeo.com/video/226053498?h=a1599a8ee9','https://player.vimeo.com/video/347119375?h=1699409fe2','https://player.vimeo.com/video/336812686?h=3a81782f84']


    const [videoSrc, setvideoSrc] = useState(videosArr[0])
  
  
  
  
    return (
    <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack w={'full'}>
            <div className="videowrapper" style={{position:'relative', overflow:'hidden', height:'100vh', width:"100%"}}>
                <iframe
                style={{overflow:'hidden',
                        border:'0',
                        alignSelf:'center',
                //         position:'absolute',
                //         top:'0',
                //         left:'0',
                        width:'100',
                        height:'100%'
            }}
                title='vimeo' width={'100%'} src={videoSrc} ></iframe>
            </div>
            <VStack alignItems={'flex-start'} p={'8'} width={'full'} overflowY={'auto'}>
                <Heading>Sample Video</Heading>
                    <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum suscipit dolor quaerat magnam quasi, molestias provident reprehenderit neque tempora quisquam officiis laborum, nihil minima maxime delectus! Dignissimos ipsam fugit explicabo?</Text>
            </VStack>
        </VStack>

        <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflow={'auto'}>
            {
                videosArr.map((item, index)=>(
                    <Button colorScheme='purple' variant={'outline'} onClick={()=>setvideoSrc(item)}>Lecture {index +1 }</Button>
                ))
            }
        </VStack>
    </Stack>
    )
}

export default Videos