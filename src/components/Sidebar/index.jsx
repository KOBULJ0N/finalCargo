/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { MainContext } from '../../Context/Context';
import Block from './style';
import { Link } from 'react-scroll';


export const Kategory = () => {
  const [state, setState] = useContext(MainContext);

  return (
    <Block>
      <Block.Inset>
        
        <div>
          <Link
            activeClass='active'
            spy={true}
            smooth={false}
            to='section1'
            offset={-90}
            duration={200}>
            <Block.Img1 onClick={() => setState(1)} active={state} />
          </Link>
        </div>

        <div>
          <Link
            activeClass='active'
            spy={true}
            to='section2'
            smooth={false}
            offset={-90}
            duration={200}>
            <Block.Img2 onClick={() => setState(2)} active={state} />
          </Link>
        </div>

        <div>
          <Link
            activeClass='active'
            spy={true}
            to='section3'
            smooth={false}
            offset={-90}
            duration={200}>
            <Block.Img3 onClick={() => setState(3)} active={state} />
          </Link>
        </div>

        <div>
          <Link
            activeClass='active'
            spy={true}
            to='section4'
            smooth={false}
            offset={-110}
            duration={200}>
            <Block.Img4 onClick={() => setState(4)} active={state} />
          </Link>
        </div>

        <div>
          <Link
            activeClass='active'
            spy={true}
            to='section5'
            smooth={false}
            offset={-70}
            duration={200}>
            <Block.Img5 onClick={() => setState(5)} active={state} />
          </Link>
        </div>

        <div>
          <Link
            activeClass='active'
            spy={true}
            to='section6'
            smooth={false}
            offset={-40}
            duration={200}>
            <Block.Img6 onClick={() => setState(6)} active={state} />
          </Link>
        </div>

      </Block.Inset>
    </Block>
  );
};

export default Kategory;
