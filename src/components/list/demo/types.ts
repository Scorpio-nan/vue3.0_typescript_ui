import { PropType } from 'vue-demi';

export interface Hero {
  id: number;
  name: string;
  level: number;
  position: string;
}

export const HeroProps = {
  modelValue: {
    type: Object as PropType<Hero>,
    required: true,
    default: () => ({}),
  },
};
