import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Fuego <Badge>April 2022</Badge>
      </Title>
      <P>
        An open-platform chat app that utilizes Firestore to host and 
        render messages in real-time. By logging in with your Google
        Account, you can join in and leave your mark on the most fire
        chat app in the network.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fuego-heyoitsjuice.vercel.app/">
          https://fuego-heyoitsjuice.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TailwindCSS, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link 
        //   href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          >
            N/A 
            {/* <ExternalLinkIcon mx="2px" /> */}
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fuego_01.png" alt="fuego" />
      <WorkImage src="/images/works/fuego_02.png" alt="fuego" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
