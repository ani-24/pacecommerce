import Head from "next/head";

const sections = [
  {
    title: "Why choose PACE?",
    text: [
      `PACE Commerce is a wing of PACE Institute Pvt. Ltd. A dedicated
    institution to provide global quality education to the students of
    Commerce for class 11 & 12, CBSE or Bihar board. The chief mentor
    for commerce stream is Madhulika ma&apos;am who has a strong command
    over the subjects and students will definitely fetch high grades
    under her guidance. Students attending classes regularly and
    sincerely will get an assurance of satisfactory performance. All the
    three important subjects of commerce stream i.e. accounts, economics
    and business studies is taught precisely from the basic beginners
    level keeping in mind the theory and practical part of all these 3
    subjects.`,
    ],
  },
  {
    title: "What is Commerce?",
    text: [
      `As said by Chesseman, Commerce education is a form of instructions
    that directly as well as indirectly prepares a businessman for his
    calling. It prepares students for socially desirable and personally
    fruitful careers in the field of business and finance. While
    pursuing higher education in Commerce in India, students acquire the
    knowledge of business trade, fluctuations in the market, fiscal
    policies, basics of economics, industrial policies, etc. The
    education imparted to Commerce students tends to equip them with a
    number of specialised skills that help them excel in different
    functional areas of trade, industry and commerce.`,
    ],
  },
  {
    title: "Why Commerce?",
    text: [
      `Apart from Humanities and Science, Commerce is a fundamental academic stream in India. The field of commerce deals with trading things of economic value between two or more entities, in other words, exchange of services or goods from a producer to the final consumer. The field of commerce is the most influential and strongest social institution these days. As a branch of knowledge, Commerce education imparts the experience of the business world in all its manifestations. The growing phenomenon of privatisation, globalisation and liberalisation has had an immense impact on the Commerce education`,
    ],
  },
  {
    title: "Scope of Commerce in India",
    text: [
      `In the post-independence era and wake of industrialisation, Commerce education is emerging as one of the most budding and potential pursuits. Most of the Education Commissions that has explored higher education in the post-independence era have held commerce education to provide students with in-depth knowledge of business and its different functional areas. This prepares students to fulfil requirements of the community for industry, commerce and trade purposes.`,
      `In the students&apos; community, commerce education has achieved high position and importance in India. This can be proved by the fact that from 0.36 lakh enrollments in 1950-51 in commerce courses, the enrollments reached over 20 lakh at present with a substantial share of 49% of total students in this sector. This percentage was 17.1% in 1975 and 25% in 2005.`,
    ],
  },
  {
    title: "Importance of Commerce",
    text: [
      `Commerce education helps support the increasing needs of business houses. It has been developed to provide aids to the growing manpower needs in thousands of business enterprises. Commerce education equips students with specialised skills that come useful in tackling problems in different functional areas of commerce, industry and trade.`,
      `The skilled manpower supply is indispensable for the growth of a business. Commerce education has a crucial role in today&apos;s dynamic business environment. The rapidly changing trends privatisation, globalisation and implementation of technology has made tough for organisations to survive the competition in the business world. Consequently, the demand for Commerce education has increased many folds. Business executives need to be trained to update and adapt their skills quickly as per the sudden changes in the external environment.`,
    ],
  },
  {
    title: "Objectives of Commerce",
    text: [
      `The objectives of Commerce education in India include:`,
      `1. Finding out challenges in the commerce education sector`,
      `2. Fighting challenges in commerce education by promoting its importance in business and finance`,
    ],
  },
];

const about = () => {
  return (
    <>
      <Head>
        <title>PACE Commerce - About us</title>
        <meta
          name="keywords"
          content="Commerce classes for class XI,Commerce classes for class 11, tutorials for COMMERCE class 11, Accounts for class 11, commerce coaching near me,commerce tutorials,top commerce classes, Commerce classes for class XII,Commerce classes for class 12,tutorials for COMMERCE class 12,Accounts for class 12,top commerce classes, commerce classes in Kankarbagh, commerce classes in Patna,commerce class,commerce for inter,commerce for CBSE 12,commerce for CBSE 11,Best commerce classes,best commerce classes"
        />
      </Head>
      <div className="container">
        {sections.map((data, index) => (
          <div className="section" key={index}>
            <h1 className="section-title">{data.title}</h1>
            {data.text.map((text, idx) => (
              <div className="section-text" key={idx}>
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default about;
