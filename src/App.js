import { Step, Steps, useSteps } from "chakra-ui-steps"

import { VStack} from "@chakra-ui/react"

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
]

const App = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <VStack width="100%">
      <Steps activeStep={activeStep} orientation="vertical" alignSelf="center">
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
    </VStack>
  )
}
export default App;