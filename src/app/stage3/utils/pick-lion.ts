import type { PhaseValueType } from '@/app/stage3/xstate/conversationMachine';

import Leo2_11 from '@/app/stage3/animationData/leo_2-11_normal_smile1.json';
import Leo2_12 from '@/app/stage3/animationData/leo_2-12_normal_happy.json';
import Leo2_13 from '@/app/stage3/animationData/leo_2-13_normal_sigle_hand.json';

export const pickLionType = (currentPhaseInfo: PhaseValueType) => {
  if (currentPhaseInfo.question === 'carbonFootprint') {
    if (currentPhaseInfo.round === 3 || currentPhaseInfo.round === 7 || currentPhaseInfo.round === 8 || currentPhaseInfo.round === 9) {
      return Leo2_12;
    }
    if (currentPhaseInfo.round === 2 || currentPhaseInfo.round === 9) {
      return Leo2_13;
    }

    return Leo2_11;
  }
  if (currentPhaseInfo.question === 'greenBuilding') {
    if (currentPhaseInfo.round === 7) {
      return Leo2_12;
    }

    if (currentPhaseInfo.round === 5 || currentPhaseInfo.round === 10) {
      return Leo2_13;
    }

    return Leo2_11;
  }
  if (currentPhaseInfo.question === 'dashboard') {
    if (currentPhaseInfo.round === 6) {
      return Leo2_12;
    }

    if (currentPhaseInfo.round === 3 || currentPhaseInfo.round === 9) {
      return Leo2_13;
    }

    return Leo2_11;
  }
  
  if (currentPhaseInfo.question === 'solarPower') {
    if (currentPhaseInfo.round === 5 || currentPhaseInfo.round === 8) {
			return Leo2_12;
		}

    if (currentPhaseInfo.round === 3 || currentPhaseInfo.round === 7) {
      return Leo2_13;
    }

    return Leo2_11;
  }
  
  if (currentPhaseInfo.question === 'rainRecycle') {
    if (currentPhaseInfo.round === 6) {
      return Leo2_12;
    }

    if (currentPhaseInfo.round === 2 || currentPhaseInfo.round === 8) {
      return Leo2_13;
    }

    return Leo2_11;
  }

  if (currentPhaseInfo.question === 'aquaponics') {
    if (currentPhaseInfo.round === 6 || currentPhaseInfo.round === 10) {
      return Leo2_12;
    }

    if (currentPhaseInfo.round === 2 || currentPhaseInfo.round === 9) {
      return Leo2_13;
    }

    return Leo2_11;
  }
};
