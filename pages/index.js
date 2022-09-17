import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Home() {
  return (
    <>
      <Head>
        <title>PACE Commerce | Commerce for class 11 & 12</title>
        <meta
          name="description"
          content="PACE Commerce is a wing of PACE Institute Pvt. Ltd. A dedicated institution to provide global quality education to the students of Commerce for class 11 & 12, CBSE or Bihar board. The chief mentor for commerce stream is Madhulika ma'am who has a strong command over the subjects and students will definitely fetch high grades under her guidance. Students attending classes regularly and sincerely will get an assurance of satisfactory performance. All the three important subjects of commerce stream i.e. accounts, economics and business studies is taught precisely from the basic beginners level keeping in mind the theory and practical part of all these 3 subjects."
        />
        <meta
          name="keywords"
          content="Commerce classes for class XI,Commerce classes for class 11, tutorials for COMMERCE class 11, Accounts for class 11, commerce coaching near me,commerce tutorials,top commerce classes, Commerce classes for class XII,Commerce classes for class 12,tutorials for COMMERCE class 12,Accounts for class 12,top commerce classes, commerce classes in Kankarbagh, commerce classes in Patna,commerce class,commerce for inter,commerce for CBSE 12,commerce for CBSE 11,Best commerce classes,best commerce classes,commerce classes patna, commerce classes in kankarbag, commerce classes in kankarbagh, commerce class, commerce classes in patna, commerce classes, commerce tutorials, commerce tutorials for class 11, commerce tutorials for class 12, account tutorials for class 11, account tutorials for class 12, commerce for 11, commerce class for 11, commerce for class 11, commerce for class 12, commerce for class 11 & 12, commerce tutorials near me, commerce tutorial, accounts tutorial, economics tutorial, commerce tutor, commerce tutor near me, commerce coaching, commerce coaching in kankarbag, commerce coaching in kankarbagh, commerce coaching in hanuman nagar, commerce coaching in kankarbagh patna, commerce coaching in patna near me, commerce education, commerce career, subject after 10th, subject after 10th class cbse, which subject is best for banking after 10th, which subject is best for business management after 10th, scholarship after 10th, class after 10th, education after 10th, commerce stream, commerce stream career, best commerce tutorials in patna, top commerce tutorials, top commerce coaching, top commerce classes, top teacher for commerce in patna, commerce subject, pace commerce, madhu ma'am commerce, madhulika commerce tutorials, best teacher of commerce in patna"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[50vh] w-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          loop={true}
        >
          <SwiperSlide>
            <div className="slide bg-[url('../public/slide2.jpeg')]"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide bg-[url('../public/slide3.jpeg')]"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide bg-[url('../public/slide1.jpeg')] md:bg-[url('../public/slide4.jpeg')]"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="section">
          <h1 className="section-title">Why choose PACE Commerce?</h1>
          <p className="section-text">
            PACE Commerce is a wing of PACE Institute Pvt. Ltd. A dedicated
            institution to provide global quality education to the students of
            Commerce for class 11 & 12, CBSE or Bihar board. The chief mentor
            for commerce stream is Madhulika ma&apos;am who has a strong command
            over the subjects and students will definitely fetch high grades
            under her guidance. Students attending classes regularly and
            sincerely will get an assurance of satisfactory performance. All the
            three important subjects of commerce stream i.e. accounts, economics
            and business studies is taught precisely from the basic beginners
            level keeping in mind the theory and practical part of all these 3
            subjects.
          </p>
        </div>
        <div className="section mb-10">
          <h1 className="section-title">What is Commerce?</h1>
          <p className="section-text">
            As said by Chesseman, Commerce education is a form of instructions
            that directly as well as indirectly prepares a businessman for his
            calling. It prepares students for socially desirable and personally
            fruitful careers in the field of business and finance. While
            pursuing higher education in Commerce in India, students acquire the
            knowledge of business trade, fluctuations in the market, fiscal
            policies, basics of economics, industrial policies, etc. The
            education imparted to Commerce students tends to equip them with a
            number of specialised skills that help them excel in different
            functional areas of trade, industry and commerce.
          </p>
          <Link href="/commerce">
            <a className="btn bg-gradient-to-br from-green to-blue text-white">
              More on commerce
            </a>
          </Link>
        </div>
        <div className="section">
          <div className="gap-8 md:flex lg:gap-20 justify-items-center items-center">
            <div>
              <h1 className="section-title mb-8">Meet Your Mentor:</h1>
              <div className="section-text lg:text-xl lg:leading-loose">
                Madhulika Madhu Ma&apos;am has been a scholar. She completed her
                M.Com. degree from Delhi University. She is an expert of two
                subjects Accounts and economics. She has been teaching students
                both the subjects as she loves to teach and teaching is her
                passion.
              </div>
            </div>
            <div className="w-full flex justify-center items-center md:justify-start">
              <div className="relative after:absolute after:h-[90%] after:bottom-0 after:w-full after:bg-[#f0f0f0] after:left-0 after:-z-10">
                <div className="relative h-[375px] w-[250px] md:w-[300px] md:h-[450px]">
                  <Image
                    src="/mentor.png"
                    layout="fill"
                    alt="Madhulika Madhu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="section-title">Demo Lectures</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center max-w-[75%] lg:max-w-[85%] mx-auto mt-8">
            <div className="flex justify-center items-center">
              <video
                className="w-full"
                src="/demo1.mp4"
                controls
                width={300}
                loading="lazy"
              ></video>
            </div>
            <div className="flex justify-center items-center">
              <video
                className="w-full"
                src="/demo2.mp4"
                controls
                width={300}
                loading="lazy "
              ></video>
            </div>
            <div className="flex justify-center items-center">
              <video
                className="w-full"
                src="/demo3.mp4"
                controls
                width={300}
                loading="lazy "
              ></video>
            </div>
            <div className="flex justify-center items-center">
              <video
                className="w-full"
                src="/demo4.mp4"
                controls
                width={300}
                loading="lazy "
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
