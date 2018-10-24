import { MenuItem, Select, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import { Col, Row } from "react-flexbox-grid";

import Pagination from "material-ui-flat-pagination";

import * as React from "react";
import { connect } from "react-redux";

import { Product } from "../model/model";
import { IRootState } from "../reducers";

import { IPaginate } from "../actions/constant";
import { paginateProducts } from "../actions/product";

import {
  PaginationSetting,
  paginationStyles,
  WhiteSpace,
  Divider
} from "../components/StyledComponents";

import ProductContainer from "../components/ProductContainer";

export interface IProps {
  classes: any;
  products: Product[];
  product_total: number;
  paginateProducts: ({ start, limit }: IPaginate) => void;
}

export class HomePage extends React.Component<IProps> {
  public state = {
    limit: 8,
    offset: 0
  };

  public handleLimitChange = (event: any) => {
    this.setState({
      offset: 0,
      limit: event.target.value
    });

    this.props.paginateProducts({
      start: 0,
      limit: event.target.value
    });
  };

  public handlePagination(offset: number) {
    this.setState({ offset });

    this.props.paginateProducts({
      start: offset,
      limit: this.state.limit
    });
  }

  public componentDidMount() {
    this.props.paginateProducts({
      start: this.state.offset,
      limit: this.state.limit
    });
  }

  public render() {
    const { classes, product_total, products } = this.props;

    const { paperRoot, ...paginationClasses } = classes;

    const paperClasses = {
      root: paperRoot
    };

    const Products = products.map((product: Product) => (
      <ProductContainer key={product.id} product={product} />
    ));

    return (
      <div>
        <Typography id="title" variant="h5">
          All Products
        </Typography>

        <PaginationSetting>
          <div>
            <Typography id="product_total" variant="caption">
              {`${product_total} Products`}
            </Typography>
          </div>
          <div>
            <Select
              disableUnderline={true}
              value={this.state.limit}
              name="limit"
              onChange={this.handleLimitChange}
            >
              <MenuItem value={8}>8 per page</MenuItem>
              <MenuItem value={16}>16 per page</MenuItem>
              <MenuItem value={20}>20 per page</MenuItem>
            </Select>
          </div>
        </PaginationSetting>

        <Divider weight={1} />

        <Row>{Products}</Row>

        <WhiteSpace height={30} />
        <Row end="xs">
          <Pagination
            limit={this.state.limit}
            offset={this.state.offset}
            total={product_total}
            classes={paginationClasses}
            currentPageColor="inherit"
            previousPageLabel={"< Previous page"}
            nextPageLabel={"Next page >"}
            onClick={(e, offset) => this.handlePagination(offset)}
            otherPageColor="inherit"
            reduced={true}
          />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {
    products: state.products,
    product_total: state.pagination.product_total
  };
}

export default withStyles(paginationStyles)(
  connect(
    mapStateToProps,
    {
      paginateProducts
    }
  )(HomePage)
);
