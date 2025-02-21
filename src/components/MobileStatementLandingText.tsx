import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import mainImage from "../assets/kaaba.png";
import playStore from "../assets/play.jpg";
import vpnApp from "../assets/vpn.png";
import googlePlay2 from "../assets/googleplay2.png";

export const MobileStatementLandingText = () => {
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [stepIndex]);

    const nextStep = () => {
        setStepIndex((prev) => Math.min(prev + 1, 10));
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

                </>
            )}

            {stepIndex === 2 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{ color: "darkgreen"}}>2. Adim</span>: Google Play Store'u açın.</Heading>
                    <Text style={{color: "black"}}>
                        Telefonunuzda <b>Google Play Store</b> uygulamasını bulun ve açın.


                        <br/><br/>

                        <b>Google Play Store</b> uygulamasi alttaki fotoğrafta gösterilen uygulama simgesine sahip olan uygulamadır.
                    </Text>
                    <br/>
                    <Image src={playStore}  alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex === 3 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{ color: "darkgreen"}}>3. Adim</span>: VPN uygulamasını arayin.</Heading>
                    <Text>Google Play Store uygulamasinda sag ust tarafta arama dugmesine basarak, "VPN" yazarak arama yapin.

                        <br/><br/>

                        <Image src={googlePlay2}  alt="Google Play Store Search"
                               borderRadius="md"/>
                    </Text>
                </>
            )}

            {stepIndex === 4 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{color: "darkgreen"}}>4. Adim</span>:
                        VPN uygulamasını indirin.</Heading>
                    <Text>
                        Aramayı yaptıktan sonra, çıkan uygulamalar arasında <strong>'VPN Super Unlimited
                        Proxy'</strong> uygulamasının üzerine basın ve yeşil 'Yükle' düğmesine tıklayın.
                    </Text>

                    <Image src={vpnApp} alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex === 5 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{color: "darkgreen"}}>5. Adim</span>:
                        VPN uygulamasını açın.</Heading>
                    <Text>
                        <strong>'VPN Super Unlimited Proxy'</strong> uygulamasının baslatin.

                        <br/><br/>

                        VPN uygulamasinin ana sayfasi alttaki fotograftaki gibi gozukuyor.
                    </Text>

                    <Image src={vpnApp} alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex === 6 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{color: "darkgreen"}}>6. Adim</span>:
                        Londra sunucusuna bağlan.</Heading>
                    <Text>
                        <strong>'VPN Super Unlimited Proxy'</strong> uygulamasınında Ingiltere bayragini bulup.

                        <br/><br/>

                        Asagidaki fotografta gosterildigi gibi, Londra sunucusunu secip, baglan butonuna basin.

                    </Text>

                    <Image src={vpnApp} alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex === 7 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{color: "darkgreen"}}>7. Adim</span>:
                        Google Play Store'a geri donun.</Heading>
                    <Text>
                        <strong>'VPN Super Unlimited Proxy'</strong> uygulamasınında Ingiltere sunucusuna baglandiktan sonra, Google Play Store uygulamasini yeniden acin.

                        <br/><br/>

                        Yeniden arama yapacagiz.

                    </Text>

                    <Image src={vpnApp} alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex === 8 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{color: "darkgreen"}}>8. Adim</span>:
                        Saudi Visa Bio uygulamasini indirin.</Heading>
                    <Text>
                        Google Play Store'da ikinci adimda yaptigimiz gibi, arama yaparak, bu sefer "Saudi Visa Bio" uygulamasini aratiyoruz.

                        <br/><br/>

                        <b>Saudi Visa Bio</b> uygulamasi alttaki fotoğrafta gösterilen uygulama simgesine sahip olan uygulamadır.

                    </Text>

                    <Image src={vpnApp} alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex === 9 && (
                <>
                    <Heading as='h1' size='lg' mb={4} style={{color: "black"}}><span style={{color: "darkgreen"}}>9. Adim</span>:
                        Saudi Visa Bio uygulamasini acin.</Heading>
                    <Text>
                        Saudi Visa Buo uygulamasini acin. Burdan boyle ekranda gozuken talimatlari takip ederek

                        <br/><br/>

                        <b>Saudi Visa Bio</b> uygulamasi alttaki fotoğrafta gösterilen uygulama simgesine sahip olan uygulamadır.

                    </Text>

                    <Image src={vpnApp} alt="Google Play Store Search"
                           borderRadius="md"/>
                </>
            )}

            {stepIndex > 0 && (
                <Box display="flex" justifyContent="space-between" width="100%" mt={4}>
                    <Button onClick={prevStep} isDisabled={stepIndex === 0} style={{ background: "transparent"}}>
                        Geri
                    </Button>
                    <Button onClick={nextStep} isDisabled={stepIndex === 10} style={{ background: "darkgreen", color: "white"}}>
                        İleri
                    </Button>
                </Box>
            )}
        </Box>
    );
};