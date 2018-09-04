import React from 'react';

class AuctionBids extends React.Component {
    render() {
        let latestBid;
        let bidsLength = this.props.bids.length;

        if (bidsLength > 0) {
            latestBid = this.props.bids[bidsLength-1];
        } else {
            latestBid = {amount: 0};
        }
        // formatting of currency value acording to required locale.
        return <h2>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                }).format(latestBid.amount)}
               </h2>;
    }
}

export default AuctionBids;