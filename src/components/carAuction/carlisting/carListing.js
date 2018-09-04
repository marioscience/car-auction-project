import React from 'react';
import CountDown from './countdown/countDown';
import AuctionBids from './auctionBids/auctionBids';

class CarListing extends React.Component {
    constructor (props) {
        super(props);

        this.placeBid = this.placeBid.bind(this);
    }

    placeBid() {
        // in the render, show the last bids, order them by date, and if the list is empty show 0 as the bid price
        let bidsLength = this.props.listing.bids.length;
        let newPrice = 250;

        if (bidsLength > 0) {
            newPrice = this.props.listing.bids[bidsLength-1].amount + newPrice;
        }

        this.props.handleNewBid(this.props.listing.id, newPrice);

    }

    // make components for row top, row middle etc. dumb components to show stuff.

    render() {
        return <div className="auction-list-item">
                    <div className="pic-section">
                        <img src={this.props.listing.imageUrl} alt="car listing"/>
                        <span className="detail-link">ver detalhes</span>
                    </div>
                    <div className="info-section">
                        <div className="flex-row-top">
                            <div className="timer-section">
                                <span>TEMPO RESTANTE</span>
                                <CountDown remainingTime={this.props.listing.remainingTime}/>
                            </div>
                            <div className="last-bid-section">
                                <span>ULTIMA OFERTA</span>
                                <AuctionBids bids={this.props.listing.bids} />
                            </div>
                        </div>
                        <div className="flex-row-middle car-info-section">
                            <h3>{this.props.listing.make} {this.props.listing.model}
                                {this.props.listing.version} {this.props.listing.year}</h3>
                        </div>
                        <div className="flex-row-bottom">
                            <div className="year-section">
                                <p>{this.props.listing.year}</p>
                            </div>
                            <div className="km-section">
                                <p>{this.props.listing.km.toLocaleString('pt-BR')} KM</p>
                            </div>
                        </div>
                        <div className="flex-row-place-offer-button">
                            <button title="FAZER OFERTA" onClick={this.placeBid}>FAZER OFERTA</button>
                        </div>
                    </div>
                </div>;
    }
}

export default CarListing;