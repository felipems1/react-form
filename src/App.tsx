import { RoutesMain } from "./routes/routes";
import { FormProvider } from './contexts/FormContext'

const App = () => {
  return (
    <FormProvider>
      <RoutesMain />
    </FormProvider>
  )
}

export default App;