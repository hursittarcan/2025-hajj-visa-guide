import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import mainImage from "../assets/kaaba.png";
import playStore from "../assets/play.jpg";

export const MobileStatementLandingText = () => {
    const [stepIndex, setStepIndex] = useState(0);

    const nextStep = () => {
        setStepIndex((prev) => Math.min(prev + 1, 6));
    };

    const prevStep = () => {
        setStepIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <Box p={4} textAlign="center">
            {stepIndex === 0 && (
                <>
                    <Heading as='h1' size='lg' noOfLines={1} mb={4} style={{ color: "black"}}>
                        <span style={{ color: "darkgreen" }}>Suudi Arabistan</span> Hac Vizesi Nasıl Alınır?
                    </Heading>
                    <Box display="flex" justifyContent="center" mb={4}>
                        <Image height={200} src={mainImage} alt="Kaaba" borderRadius="md" />
                    </Box>
                    <br/>
                    <Text style={{ color: "black"}}>
                        Suudi Arabistan (2025) hac vizesi başvurusu için gerekli adımları bu rehberde bulabilirsiniz.
                        <br/><br/>
                        Başvurunuzu başarıyla tamamlamak için aşağıdaki <strong>'başla'</strong> butonuna basıp kılavuzu adım adım takip edin.
                    </Text>
                    <br/>
                    <Button onClick={nextStep} style={{ background: "darkgreen", color: "white"}} mt={4} size="lg">Hemen başla!</Button>
                </>
            )}


            {stepIndex === 1 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{ color: "black" }}><span style={{ color: "darkgreen"}}>1. Adim</span>: Bir Android cihazi bulun.</Heading>
                    <Text style={{ color: "black"}}>Bu kilavuz sadece <b>Android telefonlar</b> (Samsung, LG, Huawei gibi) içindir.

                        <br/><br/>

                        <u><b>iPhone ile kullanılamaz.</b></u>

                        <br/><br/>

                        Hac vizesi başvurusunu en kolay şekilde Android telefonla yapabilirsiniz.</Text>


                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                </>
            )}

            {stepIndex === 2 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{ color: "darkgreen"}}>2. Adim</span>: Google Play Store'u açın</Heading>
                    <Text style={{color: "black"}}>
                        Telefonunuzda <b>Google Play Store</b> uygulamasını bulun ve açın.

                        <br/><br/>

                        <b>Google Play Store</b> uygulamasi alttaki fotoğrafta gösterilen uygulama simgesine sahip olan uygulamadır.
                    </Text>
                    <br/>
                    <Image src={playStore}  alt="Google Play Store Search"
                           borderRadius="md"/>
                    <br/><br/>
                    <br/><br/>
                </>
            )}

            {stepIndex === 3 && (
                <>
                    <Heading as='h1' size='lg' mb={4}>VPN uygulamasını indirin</Heading>
                    <Text>İlk sonucu tıklayın, <strong>'VPN Super Unlimited Proxy'</strong> uygulamasını indirin.</Text>
                    <Image src="https://source.unsplash.com/400x300/?vpn" alt="VPN App" borderRadius="md" />
                </>
            )}

            {stepIndex === 4 && (
                <>
                    <Heading as='h1' size='lg' mb={4}>VPN'i açın ve Londra sunucusunu seçin</Heading>
                    <Image src="https://source.unsplash.com/400x300/?server" alt="VPN Server" borderRadius="md" />
                </>
            )}

            {stepIndex === 5 && (
                <>
                    <Heading as='h1' size='lg' mb={4}>Google Play Store'a geri dönün</Heading>
                    <Text>'Saudi Visa Bio' uygulamasını arayın. Şimdi görünmelidir.</Text>
                    <Image src="https://source.unsplash.com/400x300/?playstore" alt="Google Play Store" borderRadius="md" />
                </>
            )}

            {stepIndex === 6 && (
                <>
                    <Heading as='h1' size='lg' mb={4}>Uygulamayı indirin</Heading>
                    <Text>Uygulamayı indirin ve açarak talimatları takip edin.</Text>
                    <Image src="https://source.unsplash.com/400x300/?app" alt="App Download" borderRadius="md" />
                </>
            )}

            {stepIndex > 0 && (
                <Box display="flex" justifyContent="space-between" width="100%" mt={4}>
                    <Button onClick={prevStep} isDisabled={stepIndex === 0} style={{ background: "transparent"}}>
                        Geri
                    </Button>
                    <Button onClick={nextStep} isDisabled={stepIndex === 6} style={{ background: "darkgreen", color: "white"}}>
                        İleri
                    </Button>
                </Box>
            )}
        </Box>
    );
};