import PrimaryButton from "../../components/Buttons/PrimaryButton/primaryButton.component";

const Unauthorized = () => {
  return (
    <>
      <h1>You are unauthorized for this page</h1>
      <PrimaryButton
        span="Login"
        functionName={() => (window.location.href = "/")}
      />
    </>
  );
};

export default Unauthorized;
