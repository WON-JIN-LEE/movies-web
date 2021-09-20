import React from 'react';
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
            // history.goBack();
        }
    }
    render() {
        console.log(this.props);
        const { location: { state } } = this.props;
        const { location: { state: { title,
            year,
            summary,
            poster,
            genres
        }
        } } = this.props;

        if (state) {

            return (
                <section className="detail__container">
                    <div className="detail">
                    <img src={poster} alt={title} title={title} />

                    <div className="detail__data">
                        <h3 className="detail__title">{title}</h3>
                        <h5 className="detail__year">{year}</h5>
                        <ul className="detail__genres">{
                                genres.map(
                                    (genres, index) => (<li key={index} className="detail__genres"># {genres}</li>)
                                )
                            }</ul>
                        <p className="detail__summary">{summary}</p>

                    </div>
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
