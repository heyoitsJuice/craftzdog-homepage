import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbForecast from '../public/images/works/forecast.png'
import thumbPortfolio from '../public/images/works/portfolio.png'
import thumbFamily from '../public/images/works/familyproud.png'
import thumbWip from '../public/images/works/wip.png'
import thumbKey from '../public/images/works/onlykey.png'
import thumbBlog from '../public/images/works/blog-creation_01.png'


import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="forecast" title="Forecast" thumbnail={thumbForecast}>
            A 5 Day / 3 Hour weather forecast web app utilizing OpenWeatherMap API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="portfolio"
            title="Personal Portfolio"
            thumbnail={thumbPortfolio}
          >
            A personal portfolio website to showcase myself
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="blog-creation"
            title="Blog Creator"
            thumbnail={thumbBlog}
          >
            A simple React Native blog creation app
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="familyproud"
            thumbnail={thumbFamily}
            title="Family Proud"
          >
            A platform for facilitating virtual community for those in need.
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          In progress
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="red-pill-rick" thumbnail={thumbWip} title="Red Pill Rick">
            E-commerce website for a client 
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="onlykeyboards"
            thumbnail={thumbKey}
            title="onlyKeyboards"
          >
            A web scraper that takes in pictoral posts from r/mechanicalkeyboards
            and showcases it in a conglomerated space.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          {/* <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem> */}
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
