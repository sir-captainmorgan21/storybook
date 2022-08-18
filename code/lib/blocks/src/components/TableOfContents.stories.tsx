import { styled, Theme } from '@storybook/theming';
import React from 'react';
import { TableOfContents } from './TableOfContents';

export default {
  component: TableOfContents,
  title: 'Components/TableOfContents',
};

const Testt = styled.div(({ theme }: { theme: Theme }) => ({
  padding: theme.layoutMargin,
}));

const AddonPanelLayout = styled.div(({ theme }) => ({
  background: theme.background.content,
}));

export const WithHeadings = {
  args: {
    children: (
      <div>
        <h2 style={{ height: '500px' }} id="heading-1">
          Heading 1
        </h2>
        <h2 style={{ height: '500px' }} id="heading-2">
          Heading 2
        </h2>
        <h2 style={{ height: '500px' }} id="heading-3">
          Heading 3
        </h2>
        <h2 style={{ height: '500px' }} id="heading-4">
          Heading 4
        </h2>
      </div>
    ),
    heading: 'Table of Contents',
  },
  decorators: [(storyFn) => <AddonPanelLayout>{storyFn()}</AddonPanelLayout>],
};
