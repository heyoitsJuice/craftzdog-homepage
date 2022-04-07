import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Red Pill Rick <Badge>Jan 2020 - Present</Badge>
      </Title>
      <P>
        An e-commerce website based on meditation, crypto literacy,
        and politics in the works of being built for a client.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://condescending-hypatia-7e6f89.netlify.app/">
          open netlify build  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Gatsby, Bootstrap, React, Firebase</span>
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

      <WorkImage src="/" alt="" />
      <WorkImage src="/" alt="" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
