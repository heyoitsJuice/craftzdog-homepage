import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Forecast <Badge>April 2022</Badge>
      </Title>
      <P>
        A weather forecast application that takes in data from the 5 Day / 3 Hour
        forecast from OpenWeatherMap and showcases an abbreviated version on the front-end.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://forecast-heyoitsjuice.vercel.app/">
          https://forecast-heyoitsjuice.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, React, ChakraUI, Axios</span>
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

      <WorkImage src="/images/works/forecast.png" alt="Forecast" />
      <WorkImage src="/images/works/forecast_01.png" alt="Forecast" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
