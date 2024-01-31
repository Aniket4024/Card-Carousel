import style from "../CSS/Carousel.module.css"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";

const ServicesCarousel = ()=>{



    return <>
    
        <Splide 
            aria-label="My Favorite Images" 
            options={ {
                rewind: true,
                gap   : '0px',
                type   : 'loop',
                perPage: 4,
                perMove: 4,
                pagination:false,
                autoplay:true,
                speed:500,
                lazyLoad: 'nearby',
                arrows: 2,
                
            }}
            id={style.ServicesCarousel}
            

        >
            
            
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
            <SplideSlide className={style.Slide}>
                <Card/>
            </SplideSlide>
        </Splide>

    </>  

}

export default ServicesCarousel;




