import {create} from 'zustand';
import { Step } from '../interfaces/recipes';

interface StepStore {
    steps: Step[];
    addStep: (step: Step) => void;
    removeStep: (id: number) => void;
    updateStep: (step: Step) => void;
    setSteps: (steps: Step[]) => void;
}

export const useStepStore = create<StepStore>((set) => ({
    steps: [],
    addStep: (step) => set((state) => ({
        steps: [...state.steps, step]
    })),
    removeStep: (id) => set((state) => ({
        steps: state.steps.filter(step => step.id !== id)
    })),
    updateStep: (updatedstep) => set((state) => ({
        steps: state.steps.map(step =>
            step.id === updatedstep.id ? updatedstep : step
        )
    })),
    setSteps: (steps: Step[]) => set({steps})
}));