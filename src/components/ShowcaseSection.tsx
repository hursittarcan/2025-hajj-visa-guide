import {Container, SimpleGrid, VStack,} from '@chakra-ui/react'
import {ShowcaseItem} from "./ShowcaseItem.tsx";
import fadeBarbershopImage from '../../public/cases/fade-barbershop.png'
import cocoNoirFashionImage from '../../public/cases/coconoirfashion.png'
import ethereumImage from '../../public/cases/ethereum3.png'
import essoMoonenImage from '../../public/cases/moonen.png'

// Sample data with placeholder images
const websites = [
    {
        name: "Ethereum.",
        url: "https://ethereum.org",
        image: ethereumImage
    },
    {
        name: "Coconoir Fashion.",
        url: "https://pro.chakra-ui.com",
        image: cocoNoirFashionImage
    },
    {
        name: "Fade Barbershop.",
        url: "https://www.udacity.com",
        image: fadeBarbershopImage
    },
    {
        name: "Esso Moonen.",
        url: "https://config.figma.com",
        image: essoMoonenImage
    }
]

const ShowcaseSection = () => {
    return (
        <Container py='7.5rem' maxW='1280px' as='section' mb={12}>
            <VStack w='full' spacing='7.5rem'>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w='full'>
                    {websites.map(({ name, image, url }) => (
                        <ShowcaseItem key={url} name={name} image={image} url={url} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default ShowcaseSection
