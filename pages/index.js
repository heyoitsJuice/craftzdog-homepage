import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  UnorderedList,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoMedium } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbSlack from '../public/images/links/slack.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        {/* &apos; */}
        Self-taught, growth-driven, and curious. <br/>
        I made the 3D voxel using MagicaVoxel and Blender. <br/>
        Three.js was used to put it on this website!

      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Justin Clenista
          </Heading>
          <p>Software Engineer, Frontend Engineer</p>
          <Link href="https://github.com/heyoitsJuice" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              @heyoitsJuice
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/justin-clenista/" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              @justin-clenista
            </Button>
          </Link>
          <Link href="https://medium.com/@heyoitsjuice" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoMedium />}
            >
              @heyoitsJuice
            </Button>
          </Link>
          <Link href="https://twitter.com/justinclenista" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTwitter />}
            >
              @justinclenista
            </Button>
          </Link>

        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/justin.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Box>

          <Heading as="h3" variant="section-title">
            Check my works here!
          </Heading>
          <Box my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Box>
        <Box>

          <Heading as="h3" variant="section-title">
            Here are my blog posts!
          </Heading>
          <Box  my={4}>
            <NextLink href="/posts" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Box>
      </SimpleGrid>



      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Justin is a Filipino-American based in San Diego, California with a
          huge passion and love for technology; so much so that he decided to
          delve into the incredible world of coding to pique that passion and love!
          In admist being lost in the journey to find what he wanted to do during
          university, he realized the joy in being able to create, design, and
          contribute to software and applications with meaningful impact to others.
          As a result, he decided to strive to become a software engineer and is
          currently in pursuit of opportunities to break into the tech space to
          fufill that said joy.

          {/* <NextLink href="/works/inkdrop" scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </Paragraph>
      </Section>

      {/* Turn Bio into a Resume Modal or Image */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Box>
          <BioYear>Programming Languages:</BioYear>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >

            Javascript, Typescript, HTML, CSS/SaaS/TailwindCSS, Python
          </Box>
        </Box>
        <Box>
          <BioYear>Libraries/Frameworks:</BioYear>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >

            React, React Native, Expo, Node.js, MaterialUI, ChakraUI, jQuery, Gatsby, Bootstrap, Next.js
          </Box>
        </Box>
        <Box>
          <BioYear>Other:</BioYear>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            {/* &apos; */}
            Agile (Jira), Git, Netlify, Vercel, Cypress, Firebase
          </Box>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests{/* I ♥ */}
        </Heading>
        <Paragraph>
          When I'm not geeking out on coding, I...
          {/* Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning */}
          <BioSection>

            <UnorderedList>
              <ListItem>
                Build computers
              </ListItem>
              <ListItem>
                Build keyboards
              </ListItem>
              <ListItem>
                Be active: Basketball, Tennis, Table Tennis, Training for Marathons
              </ListItem>
              <ListItem>
                Sometimes take care of a fluffy samoyed named Sven!
              </ListItem>
            </UnorderedList>
          </BioSection>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Miscellaneous
        </Heading>



        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCbW11TtzUx9hu6Ws8sSPimw"
            title="Youtube"
            thumbnail={thumbYouTube}
          >
            Software Engineering Topics made for my slack
          </GridItem>
          <GridItem
            href="https://join.slack.com/t/codestuffpotato/shared_invite/zt-170xjpwo1-1vXARscvMtsQEwGxPaAHuA"
            title="code stuff potato"
            thumbnail={thumbSlack}
          >
            A workspace originally made for my friends to assist 
            each other in penetrating into the tech space.
          </GridItem>
        </SimpleGrid>


      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <Box>

          <Heading as="h3" fontSize="20">
            Currently a work in progress!
          </Heading>
          <BioSection>
            <UnorderedList>
              <ListItem>
                If you would like to contact me, shoot me an email at justinalvin98@gmail.com
              </ListItem>
            </UnorderedList>
          </BioSection>
          <Box my={4}>
            <NextLink href="/contact" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Contact
              </Button>
            </NextLink>
          </Box>
        </Box>
        <Box></Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
