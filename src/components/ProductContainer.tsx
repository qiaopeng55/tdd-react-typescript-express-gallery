import { Typography } from "@material-ui/core";
import * as React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Product } from "../model/model";
import { CardContainer, Divider } from "./StyledComponents";

const ProductContainer = ({ product }: { product: Product }) => (
  <Col lg={3} md={4} sm={6} xs={12}>
    <CardContainer>
      <div className="image">
        <img src={product.product_image} />
      </div>

      <Divider />
      <div className="text__area">
        <Typography variant="body1">
          {product.id} {product.product_name}
        </Typography>
        <Typography variant="caption">{product.description}</Typography>
        <Typography variant="subtitle2">{product.price}</Typography>
      </div>
    </CardContainer>
  </Col>
);

export default ProductContainer;
