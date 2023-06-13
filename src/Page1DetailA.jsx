import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);

  const history = useNavigate();

  const onClickBack = () => history(-1);

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
