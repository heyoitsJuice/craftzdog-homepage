import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbSsh from '../public/images/contents/ssh.png'
import thumbAcc from '../public/images/contents/accessibility.png'
import thumbCon from '../public/images/contents/conditionals.png'
import thumbJava from '../public/images/contents/javascript.png'
import thumbDev from '../public/images/contents/devto.png'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Videos
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="potato code: ssh"
            thumbnail={thumbSsh}
            href="https://www.youtube.com/watch?v=aTXnh1v2bA8"
          />
          <GridItem
            title="potato code: conditionals and states"
            thumbnail={thumbCon}
            href="https://www.youtube.com/watch?v=5vJzrxtGCEM"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="potato code: accessibility"
            thumbnail={thumbAcc}
            href="https://www.youtube.com/watch?v=IQOSzjI8hQk"
          />
          <GridItem
            title="potato code: javascript"
            thumbnail={thumbJava}
            href="https://www.youtube.com/watch?v=f1vHm0_89hk"
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Blog
      </Heading>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="To new beginnings..."
            thumbnail={thumbDev}
            href="https://dev.to/heyoitsjuice/to-new-beginnings-5epg"
          />
          <GridItem
            title="dev log 01"
            thumbnail={thumbDev}
            href="https://dev.to/heyoitsjuice/heyoitsjuice-dev-log-01-33o1"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
