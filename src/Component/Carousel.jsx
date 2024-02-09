import style from "../CSS/Carousel.module.css"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";

const ServicesCarousel = ()=>{


    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


    return <>
    
        {/* 4 Card */}
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
                rewind: true,
                gap   : '0px',
                type   : 'loop',
                perPage: 4,
                perMove: 3,
                pagination:false,
                autoplay:true,
                speed:700,
                lazyLoad: 'nearby',
                arrows: 2,
                
            }}
            id={style.ServicesCarousel}
        >
            {
                arr.map((e)=>{
                    return <SplideSlide key={e} className={style.Slide}>
                            <Card/>
                        </SplideSlide>
                })
            }
        </Splide>

        {/* card 3 */}
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
                rewind: true,
                gap   : '0px',
                type   : 'loop',
                perPage: 3,
                perMove: 2,
                pagination:false,
                autoplay:true,
                speed:500,
                lazyLoad: 'nearby',
                arrows: 2,
                
            }}
            id={style.ServicesCarousel3}
        >
            {/* 4 Cards */}
            {
                arr.map((e)=>{
                    return <SplideSlide key={e} className={style.Slide}>
                            <Card/>
                        </SplideSlide>
                })
            }
        </Splide>

        {/* card 2 */}
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
                rewind: true,
                gap   : '0px',
                type   : 'loop',
                perPage: 2,
                perMove: 1,
                pagination:false,
                autoplay:true,
                speed:500,
                lazyLoad: 'nearby',
                arrows: 2,
                
            }}
            id={style.ServicesCarousel2}
        >
            {/* 4 Cards */}
            {
                arr.map((e)=>{
                    return <SplideSlide key={e} className={style.Slide}>
                            <Card/>
                        </SplideSlide>
                })
            }
        </Splide>

        {/* card 1 */}
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
                rewind: true,
                gap   : '0px',
                type   : 'loop',
                perPage: 1,
                perMove: 1,
                pagination:false,
                autoplay:true,
                speed:500,
                lazyLoad: 'nearby',
                arrows: 2,
                
            }}
            id={style.ServicesCarousel1}
        >
            {/* 4 Cards */}
            {
                arr.map((e)=>{
                    return <SplideSlide key={e} className={style.Slide}>
                            <Card/>
                        </SplideSlide>
                })
            }
        </Splide>

    </>  

}

export default ServicesCarousel;




