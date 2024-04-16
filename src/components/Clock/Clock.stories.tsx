import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

import { Clock } from './Clock';

export default {
    title: 'Example/Clock',
    component: Clock,
};


export const Base  = () => {
    return <Clock/>
};
