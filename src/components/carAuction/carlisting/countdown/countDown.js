import React from 'react';

class CountDown extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            remainingTime: props.remainingTime,
            snapshotDate: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    millisecondsToFormattedTime(duration) {
        let seconds = parseInt((duration / 1000) % 60, 10),
            minutes = parseInt((duration / (1000 * 60)) % 60, 10),
            hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);

        hours = (hours < 10) ? "0" + hours : hours;
        hours = (hours < 0) ? 0 : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        minutes = (minutes < 0) ? 0 : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        seconds = (seconds < 0) ? 0 : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    tick() {
        this.setState((prevState) => {
            // time needs to be subtracted right when the update is made. this should roughly be 1000 milliseconds.
            let dateNow = new Date();
            let timeDifferenceInMilliseconds = dateNow.getTime() - prevState.snapshotDate.getTime();

            return ({
                remainingTime: prevState.remainingTime - timeDifferenceInMilliseconds,
                snapshotDate: dateNow
            });
        });
    }

    render() {
        return <h2>{this.millisecondsToFormattedTime(this.state.remainingTime)}</h2>;
    }
}

export default CountDown;