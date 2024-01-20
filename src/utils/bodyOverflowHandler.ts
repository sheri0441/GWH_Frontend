const bodyOverflowHandler = (hideOverflow: boolean) => {
  if (hideOverflow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};

export default bodyOverflowHandler;
