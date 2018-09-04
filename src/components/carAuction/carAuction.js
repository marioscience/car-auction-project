import React from 'react';
import CarListing from './carlisting/carListing';

import './carAuction.css';

const serviceUrl = "http://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json";

class CarAuction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};

        fetch(serviceUrl)
            .then((response) => response.json())
            .then((results) => {
                // Considering these are lists rendered in the UI they are not massive.
                // These sorting can be optimized if needed.
                let sortedResults = this.sortAuctionItemsByRemainingTime(results);
                sortedResults = sortedResults.map((item) => {
                    item.bids = this.sortBidsByCreatedDate(item.bids);
                    return item;
                });
                console.log(sortedResults);
                return this.setState({data: sortedResults})
            }) //state set synchronously.
            .catch((error) => console.log(error));

        this.addNewBid = this.addNewBid.bind(this);
    }

    sortBidsByCreatedDate(bids) {
        // make sure bids are ordered by latest date to display the latest.
        return bids.sort((prev, next) => {
            let placedDatePrev = new Date(prev.createdAt);
            let placedDateNext = new Date(next.createdAt);

            if (placedDateNext < placedDatePrev) return 1;
            if (placedDatePrev < placedDateNext) return -1;
            return 0;
        });
    }

    sortAuctionItemsByRemainingTime(auctions) {
        // make sure auctions are ordered by remaining time.
        return auctions.sort((prev, next) => {
            let placedDatePrev = prev.remainingTime;
            let placedDateNext = next.remainingTime;

            if (placedDateNext < placedDatePrev) return 1;
            if (placedDatePrev < placedDateNext) return -1;
            return 0;
        });
    }

    addNewBid(listingId, newBidAmount) {
        this.setState((prevState, props) => {
            let newBid = {"amount": newBidAmount,
                "dealership": "Instacarro",
                "createdAt": (new Date()).toISOString(),
                "channel": "Web"};

            let newData = prevState.data.map((item) => {
                if (item.id === listingId) {
                    item.bids = item.bids.concat(newBid);
                }
                return item;
            });


            return {data: newData};
        });
    }

    render() {
        let listings = this.state.data.map((listing) => {
            return <CarListing key={listing.id} listing={listing} handleNewBid={this.addNewBid} />;
        });

        return <div className="auction-section">
                    {listings}
                </div>;
    }
}

export default CarAuction;