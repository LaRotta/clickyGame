import React, { Component } from "react";
import blueShell from '../images/blueShell.png';
import bowser from '../images/bowser.png';
import chomp from '../images/chomp.jpeg';
import goomba from '../images/goomba.jpeg';
import greenShell from '../images/greenShell.png';
import koopa from '../images/koopa.jpeg';
import luigi from '../images/luigi.jpeg';
import mario from '../images/mario.jpeg';
import peach from '../images/peach.jpeg';
import toad from '../images/toad.jpeg';
import turtle from '../images/turtle.png';
import yoshi from '../images/yoshi.jpeg';


class Photos extends Component {
    render() {
        return (
          <div>

            <img className="image" id="image1" src={blueShell} />
            <img className="image" id="image2" src={bowser} />
            <img className="image" id="image3" src={chomp} />
            <img className="image" id="image4" src={goomba} />
            <img className="image" id="image5" src={greenShell} />
            <img className="image" id="image6" src={koopa} />
            <img className="image" id="image7" src={luigi} />
            <img className="image" id="image8" src={mario} />
            <img className="image" id="image9" src={peach} />
            <img className="image" id="image10" src={toad} />
            <img className="image" id="image11" src={turtle} />
            <img className="image" id="image12" src={yoshi} />

          </div>
        );
      }
    }

export default Photos;
