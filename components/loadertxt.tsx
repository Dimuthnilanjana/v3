import React from 'react'
import styled from 'styled-components'

interface LoaderProps {
  words?: string[]
}

const Loadertxt: React.FC<LoaderProps> = ({
  words = [],
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <p>I'm</p>
          <div className="words">
            {words.map((word, index) => (
              <span key={index} className="word">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    // --bg-color: #111;
    // background-color: var(--bg-color);
    border-radius: 1.25rem;
  }

  .loader {
    color: rgb(124, 124, 124);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
    box-sizing: content-box;
    height: 40px;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }

  .words::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #956afa;
    animation: spin_4991 6s infinite;
  }

  @keyframes spin_4991 {
    10% {
      transform: translateY(-102%);
    }
    25% {
      transform: translateY(-100%);
    }
    35% {
      transform: translateY(-202%);
    }
    50% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(-302%);
    }
    75% {
      transform: translateY(-300%);
    }
    85% {
      transform: translateY(-402%);
    }
    100% {
      transform: translateY(-400%);
    }
  }
`

export default Loadertxt