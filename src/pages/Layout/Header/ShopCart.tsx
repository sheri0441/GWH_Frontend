import OverLayer from "../../../utils/OverLayer";

interface Props {
  showCart: boolean;
  showCartHandler: Function;
}

const ShopCart = ({ showCart, showCartHandler }: Props) => {
  return (
    <OverLayer
      showOverLayer={showCart}
      overLayerHandler={showCartHandler}
      title={"shopping cart"}
    >
      <p>Hello world!</p>
    </OverLayer>
  );
};

export default ShopCart;
