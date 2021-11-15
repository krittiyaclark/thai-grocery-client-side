import { FC, useEffect, useState } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import CardList from "./CardList";

interface Props {
  children?: React.ReactNode;
  data: object;
  event?: any;
  filterData: object;
}

const Search: FC<Props> = ({ data }) => {
  const [filterData, setFilterData] = useState("");
  const [productEnter, setProductEnter] = useState("");

  console.log(data);

  const handleFilter = (event) => {
    const searchProduct = event.target.value;
    setProductEnter(searchProduct);
    const newFilter = Object.entries(data).filter(([productName, data]) => {
      console.log(data);
      return data.info.toLowerCase().includes(searchProduct.toLowerCase());
    });

    searchProduct === "" ? setFilterData({}) : setFilterData(newFilter);
  };

  //   const clearInput = () => {
  //     setFilterData([]);
  //   };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for Thai Grocery Product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={productEnter}
          onChange={(event) => setFilterData(handleFilter)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          //   onClick={() => handleInput()}
        >
          Button
        </Button>
      </InputGroup>

      <Row>
        <Col md={12}>
          <section>
            <CardList filterData={filterData} />
          </section>
        </Col>
      </Row>
    </>
  );
};

export default Search;
