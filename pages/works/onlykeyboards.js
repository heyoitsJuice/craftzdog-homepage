import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        onlyKeyboards <Badge>April 2022</Badge>
      </Title>
      <P>
        font: Casper Marker
        A r/mechnicalkeyboards web scraper that sorts through pictoral posts
        and conglomerates keyboard setups into a nifty clean UI space.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
          N/A  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>N/A</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TBD</span>
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
