import * as React from 'react'
import styled from 'styled-components'
import s from './styles'

interface UiHeaderProps {
  children: string
}

const ui = {}
ui.Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 48px;
  padding-bottom: 96px;
`
ui.Header = styled.h1`
  position: relative;
  display: inline-block;
  margin-top: 0;
  margin-bottom: 16px;
  color: ${s['color-blue']};
  text-align: center;
  font-size: 64px;
`
ui.HeaderLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + 24px);
  background: ${s['color-sky-blue']};
  width: 48px;
  height: 2px;
`
ui.SubHeader = styled.h3`
  margin: 0;
  font-weight: 400;
  color: ${s['color-dark-silver']};
`

export default function UiHeader({ children }: UiHeaderProps) {
  return (
    <ui.Wrapper>
      <ui.Header>
        {children}
        <ui.HeaderLine />
      </ui.Header>

      <ui.SubHeader>Generate direct-download links from a Google Drive URL.</ui.SubHeader>
    </ui.Wrapper>
  )
}
