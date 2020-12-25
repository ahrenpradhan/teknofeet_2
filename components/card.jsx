import React, { useState, Component } from 'react';
import { ThemeProvider, Div, Text, Button, Icon, Container } from 'atomize';

const theme = {
    shadows: {
        'new-shadow': '0 16px 24px -2px rgba(0, 0, 0, 0.08)',
    },
};

function ProductCard(props) {
    const { availableforSale, description, images, title, variants } = props.product;
    const [onHover, setOnHover] = useState(false)
    const toggleHover = () => {
        setOnHover(!onHover)
    }
    return (
        <ThemeProvider theme={theme}>
            <Container
                p={{ x: '0rem', y: '0rem' }}
                shadow='new-shadow'
                rounded='lg'
                // d='flex'
                // align='center'
                // justify='center'
                // textColor='medium'
                w='fit-content'
                hoverShadow='4'
                onMouseEnter={toggleHover.bind(this)}
                onMouseLeave={toggleHover.bind(this)}
            >
                <Div h='12rem' rounded={{ tl: 'lg', tr: 'lg' }} w='16rem' bgImg={images[0].src} bgSize='cover' />
                <Div d='flex' w='16rem' align='center' justify='center' p={{ x: '1rem', y: '1rem' }}>
                    <div style={{height:'4rem'}}>
                        <Text tag='h3' textSize='title'>
                            {title || 'No name'}
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </div>
                    {
                        onHover
                            ? (
                                <Button
                                    h='2.5rem'
                                    w='2.5rem'
                                    bg='info700'
                                    hoverBg='info600'
                                    rounded='circle'
                                    // m={{ r: '1rem' }}
                                    shadow='2'
                                // hoverShadow='4'
                                >
                                    <Icon name='Plus' color='white' />
                                </Button>
                            ) : (
                                <Div
                                    h='2.5rem'
                                    w='2.5rem'
                                >
                                    {/* <Text>
                                        {variants[0].price}
                                    </Text>
                                    <Text>
                                        {variants[0].compareAtPrice}
                                    </Text> */}
                                </Div>
                            )
                    }
                </Div>
                <Div
                    d='flex'
                    // h='1rem'
                    p='1rem'
                >
                    <Text
                        textWeight={700}
                        p={{ r: '1rem' }}
                    >
                        {variants[0].price}
                    </Text>
                    <Text
                        textDecor="line-through"
                    >
                        {variants[0].compareAtPrice}
                    </Text>
                </Div>
            </Container>
        </ThemeProvider>
    );
}

export { ProductCard };
