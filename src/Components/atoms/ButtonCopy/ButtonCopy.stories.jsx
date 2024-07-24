import { fn } from '@storybook/test';
import ButtonCopy from './index';



export default {
    title: 'Components/atoms/ButtonCopy',
    component: ButtonCopy,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: {
        copyPassword: fn()
    },
    argTypes: {
        bgColor: {
            name: 'bgcolor',
            options: {
                black: 'bg-black',
                withe: 'bg-withe',
                gray: 'bg-slate-400'
            },
            control: {
                type: 'radio',
            }
        },
        size: {
            name: 'sizeButtton',
            options: {sm:'w-10 h-10', md:'w-11 h-11', lg:'w-12 h-12'},
            control: {
                type: 'radio',
            }

        },
        sizeIcon: {
            name: 'sizeIcon',
            options: {sm:'size-6', md:'size-7', lg:'size-8'},
            control: {
                type: 'radio',
            }

        },
        colorIcon: {
            name: 'colorIcon',
            options: ['text-white', 'text-black'],
            control: {
                type: 'radio',
            }

        }
    }
};


const Template = ({...args}) => {
    return ButtonCopy({
        
        ...args
    })
}

export const Primary = Template.bind({})
Primary.args = {
   bgColor: 'bg-slate-400',
   size: 'w-10 h-10',
   sizeIcon: 'size-6'
}