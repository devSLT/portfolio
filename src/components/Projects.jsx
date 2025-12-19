import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {
    return (
        <section className="w-full max-w-full overflow-hidden h-dvh flex flex-col items-center bg-white">
            <h3 className=" text-2xl font-bold">Projetos</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="bg-white">
                        Teste
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white">
                        Teste2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white">
                        Teste3
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Projects;