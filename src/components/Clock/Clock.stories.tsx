import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Clock } from './Clock';

export default {
    title: 'Example/Clock',
    component: Clock,
};

type Story = StoryObj<typeof Clock>;


export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
