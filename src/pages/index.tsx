import React, {useEffect, useState} from 'react';
import {
  ChakraProvider,
  Text,
  Stack,
  Link,
  Button,
  Heading,
  HStack,
  chakra,
  Box,
  Spacer,
  Divider,
  useMediaQuery,
  Modal, ModalContent, ModalCloseButton, ModalBody, VStack, useDisclosure
} from "@chakra-ui/react";
import theme from "../chakra"
import {ChevronDownIcon, ChevronRightIcon, HamburgerIcon} from "@chakra-ui/icons";
import {AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import Head from "@docusaurus/Head";
import {useLocation} from "@docusaurus/router";
import gtag, {install} from 'ga-gtag'

export const menu = [
  {name: 'NESTFi', pathname: '/nest-fi/'},
  {name: 'Developers', pathname: '/developers/'},
  {name: 'Doc', pathname: '/docs/Overview/What-is-NEST-Protocol/'},
  {name: 'Blog', pathname: '/blogs/'},
  {name: 'About', pathname: '/about/'}
]

export default function Home(): JSX.Element {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const [start, setStart] = useState(0)
  const [selectedWork, setSelectedWork] = useState(0)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [scroll, setScroll] = useState(0)
  const location = useLocation();

  const work = [
    {
      type: 'PVM',
      title: `PVM (Probabilistic Virtual Machine) is a class of\nvirtual machine structures based on a library of basic\nfunctions that allow a developer to assemble as many\napplications as he wants - similar to EVM programming`,
      desc: `PVM enables the generation and programming of\nstochastic assets, which is widely used in DeFi, GameFi,\nNFT, etc.`,
      link: '/docs/Concept/PVM/'
    },
    {
      type: 'NEST Oracle',
      title: `The NEST oracle is currently the market's\nonly truly decentralized oracle. The random\ninformation of decentralized price flow is introduced\ninto the chain using the Game Theoretical\nmechanism of arbitrage.`,
      desc: `The NEST token is generated using the NEST\noracle's stochastic information. The NEST token\n serves as the monetary unit for all stochastic assets\nin the NEST ecosystem.`,
      link: '/docs/Concept/NEST-Oracle/'
    },
    {
      type: 'OMM',
      title: `OMM is a new trading and settlement paradigm:\nEveryone trades and settle stochastic assets with\ncontracts rather than individuals.`,
      desc: `OMM addresses the issue of liquidity and settlement.\nNEST tokens can be used to circulate any stochastic\nasset. Any benefit, even if it is greater than the\nexpected value, can be settled.\nThere is no need to match makers and takers, and all\nNEST holders share the same risks and rewards.
`,
      link: '/docs/Concept/OMM/'
    },
  ]

  const developmentPath = [
    {title: `2018.12 v1.0`, desc: `Start! A lending\nprotocol goes live.`},
    {title: '2019.12 v2.0', desc: `NEST oracle V1.0\ngoes live.`},
    {
      title: '2020.07 v3.0',
      desc: `NEST oracle upgraded.\nOpen all oracle tracks\nand supported all\nERC20 Token/ETH price`
    },
    {title: '2021.04 v3.6', desc: `Voting governance\nmodule was added`},
    {title: '2021.11 v4.1', desc: `NEST oracle upgraded.\nAllows anyone\nto build their oracle\nfor their project.`},
    {title: '2021.12 v4.3', desc: `NEST oracle upgraded.\nAllows each channel for\nmultiple quotation pairs.`},
    {title: '2022.07 v5.0', desc: `Merge FORT protocol\nNEST protocol= NEST oracle\n+ OMM +PVM`},
  ]

  useEffect(() => {
    install('G-ELV55124T4');
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NEST Protocol | The most important infrastructure after ETH</title>
        <script src={"https://crypto.com/price/static/widget/index.js"}></script>
      </Head>
      {isDesktop ? (
        <Stack h={'100%'} w={'100vw'} align={"center"}>
          <Stack w={'100%'} maxW={'1920px'} h={'100%'} bgSize={'cover'} bgImage={"image/Home/Home_bg.jpg"}
                 bgPosition={"center"}
                 spacing={0}>
            <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
              <Link href={'/'}>
                <chakra.img
                  src={"/img/logo.svg"}
                  alt="nest"
                  h={'20px'}
                />
              </Link>
              <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'}
                     color={'#003232'}>
                <Link href={'/nest-fi/'}>NESTFi</Link>
                <Link href={'/developers/'}>Developers</Link>
                <Link href={'/docs/Overview/What-is-NEST-Protocol/'}>Doc</Link>
                <Link href={'/blogs/'}>Blog</Link>
                <Link href={'/about/'}>About</Link>
                <Button onClick={() => {
                  gtag('event', 'clickApp', {
                    'from': 'desktop header'
                  })
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}>
                  App
                </Button>
              </Stack>
            </Stack>
            <Stack pt={'140px'} pb={'292px'}>
              <Stack spacing={'28px'}>
                <Heading fontSize={'50px'} textAlign={"center"}>NEST PROTOCOL<br/>THE MOST
                  IMPORTANT<br/>INFRASTRUCTURE<br/>AFTER ETH</Heading>
                <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NEST Protocol is the stochastic computer
                  based on PVM,<br/>enables the generation and programming of stochastic assets.</Text>
                <HStack justify={"center"}>
                  <Button w={'160px'} minH={'44px'} fontSize={'25px'} onClick={() => {
                    gtag('event', 'clickApp2', {
                      'from': 'desktop page'
                    })
                    window.open('https://finance.nestprotocol.org/', '_blank')
                  }}>
                    App
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Stack px={['20px', '40px', '80px', '160px']}>
              <Stack direction={"row"} bg={'rgba(255, 255, 255, 0.7)'} px={'20px'} py={'92px'} borderRadius={'20px'}>
                // listen to scroll event
                <Stack align={"center"} h={'600px'} overflow={"scroll"} w={'full'}
                       onScroll={(e) => {
                          // @ts-ignore
                         const scrollTop = e.target.scrollTop;
                         setScroll(scrollTop);
                       }}>
                  <Heading fontSize={'50px'} textAlign={"center"}>What is stochastic assets?</Heading>
                  <chakra.img src={'/image/Home/01-icon-01@2x.png'} w={'210px'} alt={''} py={'50px'}/>
                  <Stack pb={'100px'} align={"center"}>
                    <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                          textAlign={"center"}>Stochastic Asset is an on-chain asset that can be issued and destroyed in
                      response to random information flows</Text>
                  </Stack>
                  <Stack pb={'100px'} align={"center"}>
                    <chakra.img src={'/image/Home/01-icon-04@2x.png'} w={'105px'} alt={''} pb={'50px'}/>
                    <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                          textAlign={"center"}>Token is information asset</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} w={'600px'}>
                      The blockchain mechanism prevents consensus information (such as wallet balance) from being spent
                      twice. The source of token value and the basis for token becoming an asset is the scarcity of
                      consensus information. As a result, we refer to a token as an information asset that can generate
                      scarce information and is a unit that measures the value of information.
                    </Text>
                  </Stack>
                  <Stack pb={'100px'} align={"center"}>
                    <chakra.img src={'/image/Home/01-icon-05@2x.png'} w={'159px'} alt={''} pb={'50px'}/>
                    <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                          textAlign={"center"}>What is the difference between BTC, ETH and NEST?</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} w={'600px'}>
                      The mechanisms of BTC's UTXO and ETH's EVM both ensure that the quantity of tokens will not increase
                      during the transaction. NEST's PVM extends this scenario by controlling the expected value rather
                      than by controlling the quantity, which will lead to a new paradigm revolution.
                    </Text>
                  </Stack>
                  <Stack align={"center"}>
                    <chakra.img src={'/image/Home/01-icon-06@2x.png'} w={'59px'} alt={''} pb={'50px'}/>
                    <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                          textAlign={"center"}>Why do blockchain need stochastic assets?</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} w={'600px'}>
                      Almost all financial applications can be thought of as the acquisition of stochastic assets with
                      varying risk-return structures. Stochastic assets are a more natural way for building on-chain
                      finance, such as decentralized derivatives.
                    </Text>
                  </Stack>s
                </Stack>
                <Stack align={"center"} h={'600px'} w={'20px'} justifyContent={"center"} spacing={'12px'}>
                  <Box w={'10px'} h={'10px'} bg={scroll >= 0 ? '#EAAA00' : ''} border={scroll >= 0 ? '' : '1px solid #878787'} borderRadius={'full'}/>
                  <Box w={'10px'} h={'10px'} bg={scroll >= 240 ? '#EAAA00' : ''} border={scroll >= 240 ? '' : '1px solid #878787'} borderRadius={'full'}/>
                  <Box w={'10px'} h={'10px'} bg={scroll >= 640 ? '#EAAA00' : ''} border={scroll >= 640 ? '' : '1px solid #878787'} borderRadius={'full'}/>
                  <Box w={'10px'} h={'10px'} bg={scroll >= 1004 ? '#EAAA00' : ''} border={scroll >= 1004 ? '' : '1px solid #878787'} borderRadius={'full'}/>
                </Stack>
              </Stack>
            </Stack>
            <Stack align={"center"}>
              <Heading pt={'138px'} fontSize={'50px'} textAlign={"center"} pb={'57px'}>How does NEST Protocol
                work?</Heading>
              <Stack bg={'rgba(255, 255, 255, 0.7)'} align={"center"} py={'130px'} spacing={'18px'} w={'full'}>
                <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                       onClick={() => setSelectedWork(0)}
                       cursor={'pointer'}>
                  <Text>Program stochastic asset</Text>
                  <Text color={'#00A0E9'}>PVM</Text>
                  <ChevronDownIcon color={'#00A0E9'}/>
                </Stack>
                <HStack align={"end"} spacing={'24px'}>
                  <Stack w={'300px'} align={"end"}>
                    <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                           onClick={() => setSelectedWork(1)} cursor={'pointer'}>
                      <Text>Provide random information flow</Text>
                      <Text color={'#00A0E9'}>NEST Oracle</Text>
                      <ChevronDownIcon color={'#00A0E9'}/>
                    </Stack>
                  </Stack>
                  <Stack pl={'12px'}>
                    <chakra.img src={'/image/Home/01-icon-02@2x.png'} w={'240px'} alt={''}/>
                  </Stack>
                  <Stack align={"start"} w={'300px'}>
                    <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                           onClick={() => setSelectedWork(2)} cursor={'pointer'}>
                      <Text>Generate stochastic assets</Text>
                      <Text color={'#00A0E9'}>OMM</Text>
                      <ChevronDownIcon color={'#00A0E9'}/>
                    </Stack>
                  </Stack>
                </HStack>
                <Stack pt={'50px'} h={'300px'}>
                  <Text fontSize={'25px'} textAlign={"center"} fontWeight={'bold'}>
                    {work[selectedWork].type}
                  </Text>
                  <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} whiteSpace={'break-spaces'}>
                    {work[selectedWork].title}
                  </Text>
                  <Text textAlign={"center"} color={'#7D7D7D'} fontWeight={'600'} fontSize={'15px'}
                        whiteSpace={'break-spaces'}>
                    {work[selectedWork].desc}
                    <Link color={'#00A0E9'} href={work[selectedWork].link}> Learn more <ChevronRightIcon/></Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack py={'138px'} spacing={'48px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>Development path</Heading>
              <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>The NEST community always insists<br/>on
                decentralization and innovation</Text>
              <HStack px={'45px'} align={"start"}>
                <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'} transform={'rotate(180deg)'}
                            opacity={start === 0 ? 0.5 : 1}
                            cursor={"pointer"}
                            onClick={() => {
                              if (start > 0) {
                                setStart(start - 4)
                              }
                            }}/>
                <Stack w={'full'} spacing={'-36px'} align={"center"}>
                  <Stack h={'44px'} w={'full'} justify={"center"} px={'15px'}>
                    <Divider h={'1px'} color={'#C9C9C9'}/>
                  </Stack>
                  <HStack px={'45px'} justify={"space-around"} w={'full'} align={"start"}>
                    {developmentPath.slice(start, start + 5).map((item, index) => (
                      <Stack key={index} align={"center"} w={'200px'} h={'180px'}>
                        <chakra.img src={'/image/Home/01-icon-03.png'} h={'24px'} w={'36px'} alt={''} mb={'22px'}/>
                        <Text fontSize={'17px'} fontWeight={'bold'}>{item.title}</Text>
                        <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>{item.desc}</Text>
                      </Stack>
                    ))}
                  </HStack>
                </Stack>
                <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'} cursor={"pointer"}
                            opacity={start + 4 > developmentPath.length ? 0.5 : 1}
                            onClick={() => {
                              if (start < developmentPath.length - 4) {
                                setStart(start + 4)
                              }
                            }}/>
              </HStack>
            </Stack>
            <Stack bg={'rgba(255, 255, 255, 0.7)'} py={'90px'}>
              <Stack spacing={'28px'}>
                <Heading fontSize={'50px'} textAlign={"center"}>More</Heading>
                <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>Over 1 MILLION community members, Join
                  us</Text>
              </Stack>
              <HStack justify={"center"} alignItems={"start"} spacing={'120px'} py={'62px'} color={'#00A0E9'}
                      fontWeight={'600'}>
                <Stack spacing={'20px'}>
                  <Stack align={"center"}>
                    <AiOutlineTwitter fontSize={'48px'} color={'#003232'}/>
                  </Stack>
                  <Link href={'https://twitter.com/NEST_Protocol'} isExternal>@NEST_Protocol <ChevronRightIcon/></Link>
                  <Link href={'https://twitter.com/NESTDAOSupport'}
                        isExternal>NEST Roundtable <ChevronRightIcon/></Link>
                </Stack>
                <Stack spacing={'20px'}>
                  <Stack align={"center"}>
                    <FaTelegramPlane fontSize={'48px'} color={'#003232'}/>
                  </Stack>
                  <Link href={'https://t.me/NEST_Community'} isExternal>
                    <HStack align={"center"}>
                      <chakra.img src={'/image/Home/icon_8.svg'} w={'17px'} h={'16px'}/>
                      <Text color={'#00A0E9'} fontWeight={'600'}>@NEST_Community</Text>
                      <ChevronRightIcon color={'#00A0E9'}/>
                    </HStack>
                  </Link>
                  <Link href={'https://t.me/nest_chat'} isExternal>
                    <HStack align={"center"}>
                      <chakra.img src={'/image/Home/icon_7.svg'} w={'17px'} h={'16px'}/>
                      <Text color={'#00A0E9'} fontWeight={'600'}>@nest_chat</Text>
                      <ChevronRightIcon color={'#00A0E9'}/>
                    </HStack>
                  </Link>
                </Stack>
                <Stack spacing={'20px'}>
                  <Stack align={"center"}>
                    <AiOutlineGithub fontSize={'48px'} color={'#003232'}/>
                  </Stack>
                  <Link href={'/developers/'}>For developers <ChevronRightIcon/></Link>
                </Stack>
              </HStack>
              <Stack spacing={'60px'} align={"center"}>
                <HStack spacing={'100px'}>
                  <Stack w={'130px'} align={"center"}>
                    <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                      <chakra.img src={'/image/Home/01-icon-coinbase.png'} h={'34px'} alt={''}/>
                    </Link>
                  </Stack>
                  <Stack w={'130px'} align={"center"}>
                    <Link href={'https://www.huobi.com/'} isExternal>
                      <chakra.img src={'/image/Home/01-icon-huobiresearch.png'} h={'34px'} alt={''}/>
                    </Link>
                  </Stack>
                  <Stack w={'130px'} align={"center"}>
                    <Link href={'https://www.mexc.com/exchange/NEST_USDT'} isExternal>
                      <chakra.img src={'/image/Home/01-icon-mexc.png'} h={'45px'} alt={''}/>
                    </Link>
                  </Stack>
                </HStack>
                <HStack spacing={'100px'}>
                  <Link w={'130px'} href={'https://www.lbank.info/exchange/nest/usdt'} isExternal>
                    <chakra.img src={'/image/Home/01-icon-LBANK.svg'} h={'45px'} alt={''}/>
                  </Link>
                  <Link w={'130px'} href={'https://www.bibox.com/en/exchange/basic/NEST_USDT'} isExternal>
                    <chakra.img src={'/image/Home/01-icon-Bibox.svg'} h={'45px'} alt={''}/>
                  </Link>
                  <Link w={'130px'} href={'https://www.gate.io/trade/NEST_USDT'} isExternal>
                    <chakra.img src={'/image/Home/01-icon-Gate.svg'} w={'130px'} h={'45px'} alt={''}/>
                  </Link>
                </HStack>
              </Stack>
              <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"} pt={'93px'}>Listed on more than 15
                exchanges</Text>
            </Stack>
            <Stack py={'138px'} align={"center"} spacing={'48px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>Blogs</Heading>
              <HStack spacing={'44px'}>
                <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0} cursor={"pointer"} onClick={() => {
                  window.open('/blog/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST/', '_blank')
                }}>
                  <chakra.img src={'/image/Home/01-card-01@2x.png'} alt={''}/>
                  <Stack spacing={'10px'} p={'20px'} h={'230px'}>
                    <Text fontSize={'18px'} fontWeight={'bold'}>Coinbase Announces Planned Listing of Tokens, Adds $NEST
                      to ‘Experimental Asset’ Label</Text>
                    <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Leading United States-based
                      cryptocurrency</Text>
                    <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>July 25, 2022</Text>
                  </Stack>
                </Stack>
                <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0} cursor={'pointer'} onClick={() => {
                  window.open('/blog/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle/', '_blank')
                }}>
                  <chakra.img src={'/image/Home/01-card-02@2x.png'} alt={''}/>
                  <Stack spacing={'20px'} p={'20px'} h={'230px'}>
                    <Text fontSize={'18px'} fontWeight={'bold'}>NEST Protocol: A New Paradigm of Game Theoretic
                      Oracle</Text>
                    <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Blockchain innovation defined the major
                      part of the last decade, with</Text>
                    <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>Jun 9, 2022</Text>
                  </Stack>
                </Stack>
                <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0} cursor={"pointer"} onClick={() => {
                  window.open('/blog/NEST\'s-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE/', '_blank')
                }}>
                  <chakra.img src={'/image/Home/01-card-03@2x.png'} alt={''}/>
                  <Stack spacing={'20px'} p={'20px'} h={'230px'}>
                    <Text fontSize={'18px'} fontWeight={'bold'}>NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE
                      PAGE</Text>
                    <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Through Crypto.com’s NEST Price Page,
                      you
                      can now directly access NEST’s</Text>
                    <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>May 6, 2022</Text>
                  </Stack>
                </Stack>
              </HStack>
              <Box pt={'20px'}>
                <Button variant={'outline'} onClick={() => {
                  window.open('/blogs/')
                }}>
                  More
                </Button>
              </Box>
            </Stack>
            <Stack spacing={'48px'}>
              <Heading fontSize={'50px'} textAlign={"center"}>Integrations & Partners</Heading>
              <Stack bg={'rgba(255,255,255, 0.7)'} h={'440px'} align={"center"} spacing={'60px'} justify={"center"}>
                <HStack spacing={'80px'}>
                  <Link href={'https://www.huobi.com/en-us/exchange/nest_usdt'} isExternal>
                    <chakra.img src={"/svg/huobi.svg"} h={'45px'} alt={'huobi'}/>
                  </Link>
                  <Link href={'https://www.binance.com/'} isExternal>
                    <chakra.img src={"/svg/binance.svg"} h={'45px'} alt={'binance'}/>
                  </Link>
                  <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                    <chakra.img src={"/svg/Coinbase.svg"} h={'45px'} alt={'Coinbase'}/>
                  </Link>
                  <Link href={'https://polygon.technology/'} isExternal>
                    <chakra.img src={"/svg/polygon.svg"} h={'45px'} alt={'polygon'}/>
                  </Link>
                </HStack>
                <HStack spacing={'80px'}>
                  <Link href={'https://kcc.io/'} isExternal>
                    <chakra.img src={"/svg/kcc.svg"} h={'45px'} alt={'kcc'}/>
                  </Link>
                  <Link href={'https://cointelegraph.com/'} isExternal>
                    <chakra.img src={"/svg/cointelegraph.svg"} h={'45px'} alt={'cointelegraph'}/>
                  </Link>
                  <Link href={'https://cube.network/'} isExternal>
                    <chakra.img src={"/svg/cube.svg"} h={'45px'} alt={'cube'}/>
                  </Link>
                  <Link href={'https://peckshield.com/'} isExternal>
                    <chakra.img src={"/svg/peckshield.svg"} h={'45px'} alt={'peckshield'}/>
                  </Link>
                  <Link href={'https://for.tube/'} isExternal>
                    <chakra.img src={"/svg/fortube.svg"} h={'45px'} alt={'fortube'}/>
                  </Link>
                </HStack>
                <HStack spacing={'80px'}>
                  <Link href={'https://polygon.technology/'} isExternal>
                    <chakra.img src={"/svg/polynetwork.svg"} h={'45px'} alt={'polynetwork'}/>
                  </Link>
                  <Link href={'https://cofix.tech/'} isExternal>
                    <chakra.img src={"/svg/CoFiX.svg"} h={'45px'} alt={'CoFiX'}/>
                  </Link>
                  <Link href={'https://www.parasset.top/'} isExternal>
                    <chakra.img src={"/svg/Parasset.svg"} h={'45px'} alt={'Parasset'}/>
                  </Link>
                  <Link href={'https://www.certik.com/'} isExternal>
                    <chakra.img src={"/svg/certik.svg"} h={'45px'} alt={'certik'}/>
                  </Link>
                </HStack>
              </Stack>
            </Stack>
            <Stack h={'138px'}/>
            <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                    align={"start"}>
              <Stack spacing={'40px'} align={"start"}>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                    App</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Open futures, options NFT here</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs/'}>NEST Blog</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Blogs & news from NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra/'}>NEST Research Academy</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Learn more about NEST</Text>
                </Stack>
              </Stack>
              <Stack spacing={'40px'}>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                    Docs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
                </Stack>
                <Stack spacing={'22px'}>
                  <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
                  <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
                </Stack>
                <HStack spacing={'24px'}>
                  <Link href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol github'}/>
                  </Link>
                  <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Twitter'}/>
                  </Link>
                  <Link href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Telegram'}/>
                  </Link>
                  <Link href={'https://nest-protocol-82041.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Medium'}/>
                  </Link>
                  <Link href={'https://discord.gg/nestprotocol'} isExternal>
                    <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'}
                                alt={'NEST-Protocol Discord'}/>
                  </Link>
                  <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'}
                                alt={'hello@nestprotocol.org'}/>
                  </Link>
                </HStack>
              </Stack>
              <Stack spacing={'40px'} w={'420px'} h={'281px'}>
                <Stack spacing={'10px'}>
                  <Text fontSize={'15px'} fontWeight={'bold'} px={'16px'}>Market price</Text>
                  <chakra.div
                    id="crypto-widget-CoinList"
                    data-transparent="true"
                    data-design="classic"
                    data-coin-ids="2204"
                    w={'100%'}
                  ></chakra.div>
                </Stack>
                <Spacer/>
                <HStack spacing={'22px'}>
                  <Spacer/>
                  <Text fontSize={'14px'} fontWeight={'bold'} color={'#434344'}>@2022 NEST</Text>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      ) : (
        <Stack h={'100%'} bgImage={'/image/Home/01-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
          <HStack w={'full'} px={'24px'} py={'20px'}>
            <Link href={'/'}>
              <chakra.img
                src={"/img/logo.svg"}
                alt="nest"
                h={'20px'}
              />
            </Link>
            <Spacer/>
            <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={"ghost"} _active={{bg: null}}
                    _hover={{bg: null}} aria-label={'menu'}>
              <HamburgerIcon/>
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              size={'full'}
            >
              <ModalContent>
                <ModalCloseButton
                  size={'36px'}
                  mt={'14px'}
                  mx={'11px'}
                />
                <ModalBody p={'22px'}>
                  <VStack alignItems={'center'} pt={'100px'} spacing={'120px'}>
                    <VStack spacing={'17px'}>
                      {menu.map(({name, pathname}) => (
                        <Button
                          key={name}
                          aria-label={name}
                          color={location.pathname.includes(pathname) ? '#EAAA00' : '#003232'}
                          fontWeight={location.pathname.includes(pathname) ? 'bold' : '600'}
                          variant={'ghost'}
                          fontSize={'25px'}
                          _active={{bg: null}}
                          _hover={{bg: null}}
                          p={0}
                          onClick={() => {
                            window.location.pathname = pathname
                            onClose()
                          }}
                        >
                          {name}
                        </Button>
                      ))}

                    </VStack>
                    <Button
                      variant={'solid'}
                      aria-label={'App'}
                      bg={'#EAAA00'}
                      borderRadius={'full'}
                      _active={{bg: null}}
                      _hover={{bg: null}}
                      minH={'44px'}
                      px={'70px'}
                      minW={'120px'}
                      onClick={() => {
                        gtag('event', 'clickApp', {
                          'from': 'phone header'
                        })
                        window.open('https://finance.nestprotocol.org/', '_blank')
                      }}
                    >
                      App
                    </Button>
                  </VStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
          <Stack textAlign={"center"} pt={'150px'} pb={'188px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>NEST PROTOCOL<br/>THE MOST<br/>IMPORTANT<br/>INFRASTRUCTURE<br/>AFTER
              ETH</Text>
            <Text fontSize={'12.5px'} fontWeight={'600'}>NEST Protocol is the stochastic<br/>computer based on PVM,<br/>enables
              the generation and<br/>programming of stochastic assets.</Text>
          </Stack>
          <Stack px={'24px'} pb={'62px'}>
            <Stack align={"center"} textAlign={"center"} bg={'rgba(255,255,255, 0.7)'} py={'58px'} h={'560px'}
                   overflow={"scroll"}
                   borderRadius={'20px'}>
              <Text fontSize={'25px'} fontWeight={'bold'}>What is<br/>stochastic asset?</Text>
              <chakra.img src={'/image/Home/01-icon-01@2x.png'} alt={''} w={'150px'} py={'50px'}/>
              <Stack align={"center"} pb={'100px'}>
                <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>Stochastic Asset is an on-chain asset that can
                  be issued and destroyed in response to random information flows</Text>
              </Stack>
              <Stack align={"center"} pb={'100px'}>
                <chakra.img src={'/image/Home/01-icon-04@2x.png'} alt={''} w={'55px'} pb={'50px'}/>
                <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>Token is information asset</Text>
                <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'}>
                  The blockchain mechanism prevents consensus information (such as wallet balance) from being spent
                  twice. The source of token value and the basis for token becoming an asset is the scarcity of
                  consensus information. As a result, we refer to a token as an information asset that can generate
                  scarce information and is a unit that measures the value of information.
                </Text>
              </Stack>
              <Stack align={"center"} pb={'100px'}>
                <chakra.img src={'/image/Home/01-icon-05@2x.png'} alt={''} w={'80px'} pb={'50px'}/>
                <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>What is the difference between BTC, ETH and
                  NEST?</Text>
                <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'}>
                  The mechanisms of BTC's UTXO and ETH's EVM both ensure that the quantity of tokens will not increase
                  during the transaction. NEST's PVM extends this scenario by controlling the expected value rather than
                  by controlling the quantity, which will lead to a new paradigm revolution.
                </Text>
              </Stack>
              <Stack align={"center"}>
                <chakra.img src={'/image/Home/01-icon-06@2x.png'} alt={''} w={'30px'} pb={'50px'}/>
                <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>Why do blockchain need stochastic assets?</Text>
                <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'}>
                  Almost all financial applications can be thought of as the acquisition of stochastic assets with
                  varying risk-return structures. Stochastic assets are a more natural way for building on-chain
                  finance, such as decentralized derivatives.
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack textAlign={"center"} align={"center"} bg={'rgba(255,255,255,0.7)'} py={'55px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>How does<br/>NEST Protocol work?</Text>
            <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                   onClick={() => setSelectedWork(0)} pt={'50px'}
                   cursor={'pointer'}>
              <Text>Program stochastic asset</Text>
              <Text color={'#00A0E9'}>PVM</Text>
              <ChevronDownIcon color={'#00A0E9'}/>
            </Stack>
            <HStack align={"end"} spacing={'-60px'} pb={'40px'}>
              <Stack w={'150px'} align={"end"} zIndex={'10'}>
                <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                       onClick={() => setSelectedWork(1)} cursor={'pointer'}>
                  <Text textAlign={'center'}>Provide random<br/>information flow</Text>
                  <Text color={'#00A0E9'}>NEST Oracle</Text>
                  <ChevronDownIcon color={'#00A0E9'}/>
                </Stack>
              </Stack>
              <chakra.img pb={'80px'} src={'/image/Home/01-icon-02@2x.png'} w={'160px'} alt={''}/>
              <Stack align={"start"} w={'150px'}>
                <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                       onClick={() => setSelectedWork(2)} cursor={'pointer'}>
                  <Text textAlign={'center'}>Generate<br/>stochastic assets</Text>
                  <Text color={'#00A0E9'}>OMM</Text>
                  <ChevronDownIcon color={'#00A0E9'}/>
                </Stack>
              </Stack>
            </HStack>
            <Text fontSize={'16.5px'} fontWeight={'bold'}>{work[selectedWork].type}</Text>
            <Text w={'80%'} fontSize={'12.5px'} fontWeight={'600'}>{work[selectedWork].title}</Text>
            <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'} color={'#7D7D7D'}>{work[selectedWork].desc} <Link
              href={work[selectedWork].link} isExternal color={'#00A0E9'}>Learn more <ChevronRightIcon/></Link></Text>
          </Stack>
          <Stack textAlign={"center"} align={"center"} py={'62px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>Development<br/>path</Text>
            <Text fontSize={'12.5px'} fontWeight={'bold'}>The NEST community always insists<br/>on decentralization and
              innovation</Text>
            <HStack w={'full'} justify={"center"} py={'50px'} spacing={'-16px'}>
              <chakra.div w={'1px'} h={'880px'} bg={'#C9C9C9'}/>
              <Stack spacing={'32px'}>
                {developmentPath.map((item) => (
                    <HStack key={item.title} textAlign={"start"} align={item.desc !== '' ? "start" : 'center'}
                            spacing={'16px'}>
                      <chakra.img src={'/image/Home/01-icon-03.png'} h={'20px'} w={'30px'} alt={''}/>
                      <Text fontSize={'12.5px'} fontWeight={'bold'}
                            w={item.desc !== '' ? '80px' : ''}> {item.title}</Text>
                      <Text fontSize={'10.5px'} fontWeight={'600'} w={item.desc !== '' ? '160px' : ''}>{item.desc}</Text>
                    </HStack>
                  )
                )}
              </Stack>
            </HStack>
          </Stack>
          <Stack textAlign={"center"} align={"center"} pt={'66px'} bg={'rgba(255,255,255,0.7)'} py={'65px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>More</Text>
            <Text fontSize={'16.5px'} fontWeight={'bold'}>Over 1 MILLION community<br/>members, Join us</Text>
            <Stack pt={'30px'} align={"center"}>
              <AiOutlineTwitter fontSize={'24px'} color={'#003232'}/>
              <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'12.5px'} isExternal
                    href={'https://twitter.com/NEST_Protocol'}>@NEST_Protocol <ChevronRightIcon/></Link>
              <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'12.5px'} isExternal
                    href={'https://twitter.com/NESTDAOSupport'}>@NESTDAOSupport <ChevronRightIcon/></Link>
            </Stack>
            <Stack pt={'30px'} align={"center"}>
              <FaTelegramPlane fontSize={'24px'} color={'#003232'}/>
              <Link href={'https://t.me/NEST_Community'} isExternal>
                <HStack align={"center"}>
                  <chakra.img src={'/image/Home/icon_8.svg'} w={'14px'} h={'14px'}/>
                  <Text fontSize={'12.5px'} fontWeight={'600'} color={'#00A0E9'}>@NEST_Community</Text>
                  <ChevronRightIcon color={'#00A0E9'}/>
                </HStack>
              </Link>
              <Link href={'https://t.me/nest_chat'} isExternal>
                <HStack align={"center"}>
                  <chakra.img src={'/image/Home/icon_7.svg'} w={'14px'} h={'14px'}/>
                  <Text fontSize={'12.5px'} fontWeight={'600'} color={'#00A0E9'}>@nest_chat</Text>
                  <ChevronRightIcon color={'#00A0E9'}/>
                </HStack>
              </Link>
            </Stack>
            <Stack pt={'30px'} align={"center"}>
              <AiOutlineGithub fontSize={'24px'} color={'#003232'}/>
              <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'12.5px'} href={'/developers/'}>For
                developers <ChevronRightIcon/></Link>
            </Stack>
            <HStack pt={'60px'} pb={'30px'}>
              <Stack w={'100px'} align={"center"}>
                <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-coinbase.png'} h={'17px'} alt={''}/>
                </Link>
              </Stack>
              <Stack w={'100px'} align={"center"}>
                <Link href={'https://www.huobi.com/'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-huobiresearch.png'} h={'17px'} alt={''}/>
                </Link>
              </Stack>
              <Stack w={'100px'} align={"center"}>
                <Link href={'https://www.mexc.com/exchange/NEST_USDT'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-mexc.png'} h={'22.5px'} alt={''}/>
                </Link>
              </Stack>
            </HStack>
            <HStack pb={'50px'}>
              <Stack w={'100px'} align={"center"}>
                <Link href={'https://www.lbank.info/exchange/nest/usdt'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-LBANK.svg'} h={'22.5px'} alt={''}/>
                </Link>
              </Stack>
              <Stack w={'100px'} align={"center"}>
                <Link href={'https://www.bibox.com/en/exchange/basic/NEST_USDT'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-Bibox.svg'} h={'22.5px'} alt={''}/>
                </Link>
              </Stack>
              <Stack w={'100px'} align={"center"}>
                <Link href={'https://www.gate.io/trade/NEST_USDT'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-Gate.svg'} w={'100px'} h={'22.5px'} alt={''}/>
                </Link>
              </Stack>
            </HStack>
            <Text fontSize={'12.5px'} fontWeight={'bold'}>Listed on more than 15 exchanges</Text>
          </Stack>
          <Stack align={"center"} py={'62px'}>
            <Text fontSize={'25px'} fontWeight={'bold'}>Blog</Text>
            <Stack px={'24px'} w={'full'} py={'38px'}>
              <Stack bg={"white"} spacing={0} borderRadius={'20px'}>
                <chakra.img src={'/image/Home/01-card-01@2x.png'} alt={''}/>
                <Stack px={'35px'} py={'25px'} cursor={"pointer"} onClick={() => {
                  window.open('/blog/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST', '_blank')
                }}>
                  <Text fontSize={'12.5px'} fontWeight={'bold'}>Coinbase Announces Planned Listing<br/>of Tokens, Adds
                    $NEST to ‘<br/>Experimental Asset’
                    Label</Text>
                  <Text fontSize={'10.5px'} fontWeight={'600'} color={'#878787'}>Leading United States-based <br/>cryptocurrency
                  </Text>
                  <Text fontSize={'10.5px'} fontWeight={'500'} color={'#878787'}>July 25, 2022</Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Button variant={'outline'} onClick={() => {
                window.open('/blogs/')
              }}>More</Button>
            </Stack>
          </Stack>
          <Stack align={"center"} spacing={'38px'}>
            <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"center"}>Integrations &<br/>Partners</Text>
            <Stack bg={'rgba(255,255,255, 0.7)'} w={'full'} align={"center"} spacing={'35px'} py={'100px'}>
              <HStack spacing={'40px'}>
                <Link href={'https://www.huobi.com/en-us/exchange/nest_usdt'} isExternal>
                  <chakra.img src={"/svg/huobi.svg"} h={'25px'} alt={'huobi'}/>
                </Link>
                <Link href={'https://www.binance.com/'} isExternal>
                  <chakra.img src={"/svg/binance.svg"} h={'25px'} alt={'binance'}/>
                </Link>
                <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                  <chakra.img src={"/svg/Coinbase.svg"} h={'25px'} alt={'Coinbase'}/>
                </Link>
              </HStack>
              <HStack spacing={'40px'}>
                <Link href={'https://polygon.technology/'} isExternal>
                  <chakra.img src={"/svg/polygon.svg"} h={'25px'} alt={'polygon'}/>
                </Link>
                <Link href={'https://kcc.io/'} isExternal>
                  <chakra.img src={"/svg/kcc.svg"} h={'25px'} alt={'kcc'}/>
                </Link>
                <Link href={'https://cointelegraph.com/'} isExternal>
                  <chakra.img src={"/svg/cointelegraph.svg"} h={'25px'} alt={'cointelegraph'}/>
                </Link>
              </HStack>
              <HStack spacing={'40px'}>
                <Link href={'https://cube.network/'} isExternal>
                  <chakra.img src={"/svg/cube.svg"} h={'25px'} alt={'cube'}/>
                </Link>
                <Link href={'https://peckshield.com/'} isExternal>
                  <chakra.img src={"/svg/peckshield.svg"} h={'25px'} alt={'peckshield'}/>
                </Link>
                <Link href={'https://for.tube/'} isExternal>
                  <chakra.img src={"/svg/fortube.svg"} h={'25px'} alt={'fortube'}/>
                </Link>
              </HStack>
              <HStack spacing={'40px'}>
                <Link href={'https://polygon.technology/'} isExternal>
                  <chakra.img src={"/svg/polynetwork.svg"} h={'25px'} alt={'polynetwork'}/>
                </Link>
                <Link href={'https://cofix.tech/'} isExternal>
                  <chakra.img src={"/svg/CoFiX.svg"} h={'25px'} alt={'CoFiX'}/>
                </Link>
                <Link href={'https://www.parasset.top/'} isExternal>
                  <chakra.img src={"/svg/Parasset.svg"} h={'25px'} alt={'Parasset'}/>
                </Link>
              </HStack>
              <HStack>
                <Link href={'https://www.certik.com/'} isExternal>
                  <chakra.img src={"/svg/certik.svg"} h={'25px'} alt={'certik'}/>
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <Stack h={'62px'}/>
          <Stack py={'44px'} px={'24px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
                 align={"start"}>
            <Stack spacing={'40px'} align={"start"} w={'full'}>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
                  App</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Open futures, options NFT here</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs'}>NEST Blog</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Blogs & news from NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/nra'}>NEST Research Academy</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Learn more about NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/PVM-Technical-Reference/'}>Developer
                  Docs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
              </Stack>
              <Stack spacing={'22px'}>
                <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs'}>FAQs</Link>
                <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
              </Stack>
              <Stack spacing={'10px'} w={'full'}>
                <Text fontSize={'15px'} fontWeight={'bold'}>Market price</Text>
                <chakra.div
                  id="crypto-widget-CoinList"
                  data-transparent="true"
                  data-design="classic"
                  data-coin-ids="2204"
                  w={'100%'}
                ></chakra.div>
              </Stack>
              <Stack w={'full'} align={"center"} spacing={'12px'}>
                <HStack spacing={'40px'}>
                  <Link href={'https://discord.gg/nestprotocol'} isExternal>
                    <chakra.img src={'/image/Footer/discord_icon.svg'} color={'#003232'} h={'44px'} w={'44px'}
                                alt={'discord_icon'}/>
                  </Link>
                  <Link href={'https://github.com/NEST-Protocol'} isExternal>
                    <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'} alt={'github_icon'}/>
                  </Link>
                  <Link href={'https://twitter.com/nest_protocol/'} isExternal>
                    <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'} alt={'twitter_icon'}/>
                  </Link>
                </HStack>
                <HStack spacing={'40px'}>
                  <Link href={'https://t.me/nest_chat/'} isExternal>
                    <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'} alt={'telegram_icon'}/>
                  </Link>
                  <Link href={'https://nest-protocol-82041.medium.com/'} isExternal>
                    <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'} alt={'medium_icon'}/>
                  </Link>
                  <Link href={'mailto:hello@nestprotocol.org'} isExternal>
                    <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'} alt={'email_icon'}/>
                  </Link>
                </HStack>
              </Stack>
              <Stack align={"center"} w={'full'}>
                <Text fontSize={'14px'} textAlign={"center"} fontWeight={'bold'} color={'#7D7D7D'}>@2022 NEST</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}
    </ChakraProvider>
  );
}