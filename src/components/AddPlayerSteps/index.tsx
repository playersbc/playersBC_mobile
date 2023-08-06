import { useStepStore } from '../../stores';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';

export * from './Step1'
export * from './Step2'
export * from './Step3'
export * from './Step4'
export * from './Step5'

export function StepperPlayer({ navigate }) {
  const { step } = useStepStore()

  switch (step) {
    case 1:
      return <Step1 />
    case 2:
      return <Step2 />
    case 3:
      return <Step3 />
    case 4:
      return <Step4 />
    case 5:
      return <Step5 navigate={navigate} />
  }
}