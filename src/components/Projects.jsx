import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {
    return (
        <section className="w-full max-w-full h-max lg:h-dvh lg:min-h-[800px] flex flex-col items-center lg:justify-center">
            <div className="headerProjects w-full h-24 flex items-center justify-center">
                <h3 className=" text-3xl font-bold text-white 2xl:text-5xl 2xl:font-normal">Projetos</h3>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className="w-full flex-1"
            >
                <SwiperSlide>
                    <div className="slide w-full lg:h-full text-[var(--whitePearl)] lg:flex lg:flex-col lg:items-center lg:justify-center">
                        {/* box slide voando */}
                        <div className="boxSlide w-full h-max py-8 min-h-[600px] lg:w-9/10 xl:w-8/10 2xl:w-7/10 lg:h-7/10 2xl:h-8/10 bg-[#243447] lg:rounded-md">
                            <div className="headerSlide h-16 lg:h-1/10 flex items-center justify-center 2xl:h-3/20">
                                <h4 className="text-2xl 2xl:text-5xl">Catalogando</h4>
                            </div>
                            <div className="contentSlide box-border lg:w-full lg:h-9/10 2xl:h-17/20 lg:flex ">
                                {/* Imagem config */}
                                <div className="boxImgProject w-full h-64 lg:w-1/2 lg:h-full flex items-center justify-center">
                                    <img
                                        src="https://i.ibb.co/Z1hDRzq0/mac-Maior.png"
                                        alt="Imagem do projeto Catalogando"
                                        className="w-9/10 sm:w-7/10 md:w-5/10 lg:w-8/10 object-cover"
                                    />
                                </div>
                                {/* Content config */}
                                <div className="boxAboutProject w-full h-max px-4 md:px-12 lg:w-1/2 lg:h-full flex flex-col items-center justify-center">
                                    <ul className="list-none lg:list-disc text-sm sm:text-base font-normal">
                                        <li className="my-4 md:my-5">O Catalogando foi criado com o objetivo de incentivar vendedores locais, criando um catálogo virtual que traz visibilidade à loja física e redes sociais.</li>
                                        <li className="my-4 md:my-5">Sua versão Web foi desenvolvida utilizando React JS e para o aplicativo React Native, ambos utilizam NodeJS + Express para backend, como banco de dados foi utilizado MongoDB</li>
                                        <li className="my-4 md:my-5 lg:my-3">Possuí tanto sua versão site quanto em App</li>
                                    </ul>
                                    <a href="https://catalogando-react.vercel.app/" target="_blank" className="w-7/10 sm:w-md lg:w-xs my-2 sm:my-3 border border-white bg-[#363432] py-3 xl:py-4 rounded-md text-center xl:w-lg">Demo</a>
                                    {/* <a href="" target="_blank" className="w-7/10 sm:w-md lg:w-xs my-2 sm:my-3 border border-white bg-[#161616] py-3 xl:py-4 rounded-md text-center xl:w-lg">GitHub</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Projects;