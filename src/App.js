import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './App.css';
function App() {
  return (
    <div className='App'>
      <div className='bg-light p-5 rounded '>
        <Container className='text-center'>
          <h1>Is It A Good Time To Buy Bitcoin?</h1>
          <h6>The 21 million Bitcoin question</h6>
        </Container>
      </div>
      <Container>
        <Container className='mt-5 ml-55 mr-55'>
          <p className='paragraph-padding'>
            {' '}
            I've written a more technical piece that explains how this tool is
            calculated and suggests some changes to make it easier to
            understand. If you're interested in diving deeper,{' '}
            <a
              href='https://medium.com/datadriveninvestor/bitcoins-power-law-oscillator-the-code-a-summary-and-a-suggested-improvement-b78b59a2bc9c'
              target='_blank'
              // rel='noopener noreferrer'
            >
              give it a read!
            </a>
          </p>
          <p className='paragraph-padding'>
            The chart below represents a tool that helps us understand if
            Bitcoin's price is too high or too low compared to its historical
            patterns. Think of it like a gauge. It looks at Bitcoin's current
            price and compares it to where it's expected to be based on past
            data. When the gauge is in the red zone, it might mean Bitcoin is
            getting overvalued, and selling could be a good idea. But when it's
            in the blue zone, it might be a good time to buy because Bitcoin
            could be undervalued.
          </p>
          <Image
            src='https://pythonbtcscript.s3.us-west-1.amazonaws.com/indicator.png'
            alt='Bitcoin Indicator'
            fluid
          />
        </Container>
        <Container className='mt-5'>
          <div className='tldr-section'>
            <p className='paragraph-padding'>
              <h4 className='mb-3'>Too long, didn't read?</h4>
              <Image
                src='/monkey1.jpg'
                fluid
                className='mb-3'
                alt='Monkey'
              ></Image>
            </p>
            <p className='paragraph-padding'>
              {' '}
              Buy when dark blue, sell when dark red.
            </p>
            <p className='paragraph-padding'>
              The Power Law Oscillator is a valuable tool for assessing
              Bitcoin's pricing relative to historical data. It is relatively
              simple. It functions by comparing Bitcoin's actual price to a
              prediction derived from a linear regression line, resulting in an
              oscillator value representing the price difference. This
              oscillator value fluctuates within a specific range, typically
              between -1 and 1, with peaks aligning with market cycle highs.
            </p>
            <p className='paragraph-padding'>
              The plot below shows in which percentile of the oscillator does
              the price of Bitcoin lie at any given time. It can be employed to
              spot opportune moments for buying or selling Bitcoin; for
              instance, the red zone suggests overvaluation and selling, while
              the blue zone indicates buying opportunities and undervaluation.
            </p>
            <p className='paragraph-padding'>
              However, it's important to note that the oscillator is not
              flawless and should not be the sole basis for investment decisions
              (don't sue me!).
            </p>
          </div>
        </Container>
      </Container>

      <footer className='text-center'>
        <p className='paragraph-padding'>
          &copy; {new Date().getFullYear()} Bitcoin Indicator App
        </p>
      </footer>
    </div>
  );
}

export default App;
