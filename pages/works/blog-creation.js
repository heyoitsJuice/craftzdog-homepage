import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Blog Creator <Badge>April 2021</Badge>
      </Title>
      <P>
        A React Native app built within Expo that utilizes Context for Blog 
        CRUD operation, React Navigation v4 for screen routing, and ngrok 
        for server hosting.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/heyoitsJuice/blog-creation">
          https://github.com/heyoitsJuice/blog-creation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, React Navigation v4, Context, Axios(ngrok)</span>
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

      {/* <WorkImage src="/images/works/blog-creation.mov" alt="familyproud" /> */}
      <WorkImage src="/images/works/blog-creation.png" alt="blog-creation" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
