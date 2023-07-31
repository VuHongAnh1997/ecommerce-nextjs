interface ProductCountProps {
  productCount: number;
  setProductCount: Function;
}

const ProductCount: React.FC<ProductCountProps> = ({
  productCount,
  setProductCount,
}) => {
  const onClickProductCount = (type: string) => {
    if (type === "ADD") {
      setProductCount(productCount + 1);
    } else {
      if (productCount >= 1) setProductCount(productCount - 1);
      else setProductCount(0);
    }
  };
  return (
    <div className="flex mt-4">
      <div className="w-20 mr-4">Số lượng</div>
      <div className="flex leading-9">
        <div
          className="w-10 h-10 border text-center cursor-pointer"
          onClick={() => onClickProductCount("SUB")}
        >
          -
        </div>
        <div className="w-10 h-10 border text-center">{productCount}</div>
        <div
          className="w-10 h-10 border text-center cursor-pointer"
          onClick={() => onClickProductCount("ADD")}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default ProductCount;
