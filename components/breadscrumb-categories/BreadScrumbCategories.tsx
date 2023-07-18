import PropTypes from "prop-types";
import React from "react";

interface BreadScrumbCategoriesProp {
  categorySelectedId: number;
}

const BreadScrumbCategories: React.FC<BreadScrumbCategoriesProp> = ({
  categorySelectedId,
}) => {
  return <div></div>;
};

BreadScrumbCategories.propTypes = {
  categorySelectedId: PropTypes.number.isRequired,
};

export default BreadScrumbCategories;
