import style from "./LoadingAnimation.module.css";

const LoadingAnimation = () => {
  return (
    <svg viewBox="25 25 50 50" className={style.svg}>
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export default LoadingAnimation;
