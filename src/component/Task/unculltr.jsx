import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import One from './ezgif.webp';
import "swiper/css";
gsap.registerPlugin(ScrollTrigger);
function Unculltr() {
    const videoRef = useRef();

    useEffect(() => {
        gsap.to(videoRef.current, {
            scale: 1.2, // adjust scale for zoom
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });
    }, []);
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <video ref={videoRef} src={One} />
                </SwiperSlide>
                <SwiperSlide>
                    <video ref={videoRef} src={One} />
                </SwiperSlide>
                <SwiperSlide>
                    <video ref={videoRef} src={One} />
                </SwiperSlide>
                <SwiperSlide>
                    <video ref={videoRef} src={One} />
                </SwiperSlide>

            </Swiper>


        </>
    )
}

export default Unculltr