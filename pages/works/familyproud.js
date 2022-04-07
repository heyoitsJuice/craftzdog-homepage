import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Family Proud <Badge>June 2020 - Present</Badge>
      </Title>
      <P>
        A platform for those who are experiencing or have experienced hardship.
        As a medium for facilitating a virtual community, Family Proud's mission
        is to provide a space for caregivers, families, and people in need of help
        to not only connect with one another, but to overcome adversity.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.familyproud.com/app">
          https://www.familyproud.com/app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Typescript, NodeJS, MaterialUI, Firebase</span>
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

      <WorkImage src="/images/works/familyproud_01.png" alt="familyproud" />
      <WorkImage src="/images/works/familyproud_02.png" alt="familyproud" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
