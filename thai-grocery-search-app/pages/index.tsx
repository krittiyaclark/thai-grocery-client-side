import { FC } from "react";

// import type { NextPage } from "next";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../component/Layout";
import Search from "../component/Search";
import styles from "../styles/Home.module.css";

interface Props {
  children?: React.ReactNode;
  data?: object;
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://thai-grocery-api.herokuapp.com/api/thai-grocery-product`
  );
  const data = await res.json();

  return { props: { data: Object.entries(data) } };
}

const Home: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Thai Grocery Search App</title>
        <meta
          name="description"
          content="Thai Grocery Search App is a search application of Thai grocery with Thai grocery product with brand, info, ingredients, weight, and price."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <Row>
            <Col md={12}>
              <header className="align-middle text-center">
                <h1 className="text-lg">Thai Grocery Search App</h1>
              </header>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={12}>
              <section className="py-5">
                <Search data={data} />
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
