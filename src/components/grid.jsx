import React, { Component } from "react";

class Grid extends Component {

    render() {

        return(
        <div className="grid-container">
            <div className="columns is-multiline">
                <div className="column is-one-fourth">
                    <div>
                        <h1 className="title is-uppercase has-text-primary tracking-wide font-normal">1859
                        </h1>
                        <div className="is-size-6">Darwin theororized that all living creatures came from the same organism, but did not have an explanation as to how this first life was created</div>
                        </div>
                    </div>

                    <div className="column is-one-fourth"><div>
                        <h1 className="title is-uppercase has-text-primary tracking-wide font-normal">1952</h1>
                        <div className="is-size-6">Miller electrically shocked 4 chemicals thought to be present on earth to make amino acids, the "building blocks of life". But the chemicals assumed were wrong and biochemistry found later that living cells were much more complex than bags of chemicals.</div>
                        </div>
                    </div>

                    <div className="column is-one-fourth">
                        <div>
                            <h1 className="title is-uppercase has-text-primary tracking-wide font-normal">2000</h1>
                            <div className="is-size-6">There were two leading ideas on how life was formed - those in the "RNA world" which assumed that self-replicating cells were needed most - and those in the "metabolism-first" camp which assumed life began in hydrothermal vents in the deep sea.  Both ideas were found to have fatal flaws.</div>
                        </div>
                    </div>

                    <div className="column is-one-fourth">
                        <div>
                            <h1 className="title is-uppercase has-text-primary tracking-wide font-normal">2009</h1>
                            <div className="is-size-6">A new theory evolved from Sutherland that cells began all at once versus step-wise. Gradual creation of such complicated cells is now thought to be too difficult, so efforts are going toward how a cell may have been created all at once with just the right chemical mix.
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default Grid;