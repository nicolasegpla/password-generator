import { fn } from '@storybook/test';
import ButtonGenerator from './index';



export default {
    title: 'Components/atoms/ButtonGenerator',
    component: ButtonGenerator,
    args: {
        fnGeneratorPassword: fn(),
    },
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
      },
};

const Template = ({label, ...args}) => {
    return ButtonGenerator({
        label,
        ...args
    })
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'Button-generator'
    
}