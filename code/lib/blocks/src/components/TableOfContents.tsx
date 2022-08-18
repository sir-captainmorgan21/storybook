import React, { FC, useEffect, useRef, useState } from 'react';
import { styled, Theme } from '@storybook/theming';

export interface TableOfContentsProps {
  children?: React.ReactChild;
  heading: string;
}

const TOCLayout = styled.div(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: '1 auto',
}));

const TOCContainer = styled.div(({ theme }: { theme: Theme }) => ({
  padding: theme.layoutMargin * 2,
  borderRadius: theme.appBorderRadius,
  borderLeft: `4px solid ${theme.color.secondary}`,
  minWidth: 200,
}));

const TOCContent = styled.div(({ theme }: { theme: Theme }) => ({
  padding: theme.layoutMargin,
  flexGrow: 1,
}));

const TOCHeading = styled.div(({ theme }: { theme: Theme }) => ({
  color: theme.color.darkest,
  marginBottom: theme.layoutMargin,
}));

const TOCItemButton = styled.button(({ theme }: { theme: Theme }) => ({
  background: 'none',
  color: theme.color.dark,
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  marginBottom: 4,
}));

const TOCUl = styled.ul(({ theme }: { theme: Theme }) => ({
  padding: 0,
  margin: 0,
}));

const TOCLi = styled.li(({ theme }: { theme: Theme }) => ({
  display: 'block',
}));

export const TableOfContents: FC<TableOfContentsProps> = (props) => {
  const { children, heading } = props;
  const [headers, setHeaders]: [HTMLHeadingElement[], React.Dispatch<React.SetStateAction<any[]>>] =
    useState([]);

  const contentRef = useRef<HTMLDivElement>();

  const handleClick = (element: HTMLHeadingElement) => {
    element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setHeaders(Array.from(contentRef.current.querySelectorAll('h2')));
  }, []);

  return (
    <TOCLayout>
      <TOCContent ref={contentRef} className="page-content">
        {children}
      </TOCContent>
      <TOCContainer>
        <TOCHeading>{heading}</TOCHeading>
        <TOCUl>
          {headers.map((element: HTMLHeadingElement) => {
            return (
              <TOCLi>
                <TOCItemButton onClick={() => handleClick(element)}>
                  {element.innerHTML}
                </TOCItemButton>
              </TOCLi>
            );
          })}
        </TOCUl>
      </TOCContainer>
    </TOCLayout>
  );
};
