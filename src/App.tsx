import { RoutesMain } from "./routes/routes";
import { FormProvider } from "./contexts/FormContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <FormProvider>
      <ToastContainer autoClose={2000} />
      <RoutesMain />
    </FormProvider>
  );
};

export default App;
