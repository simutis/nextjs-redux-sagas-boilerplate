import Link from 'next/link'
import { connect } from 'react-redux'
import styled from 'styled-components';
import Counter from './Counter'
import Clock from './Clock'

const Wrapper = styled.div`
  padding: 20px;
`

function Page({
    error,
    lastUpdate,
    light,
    linkTo,
    NavigateTo,
    placeholderData,
    title,
  }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </Wrapper>
  )
}

export default connect(state => state)(Page)
