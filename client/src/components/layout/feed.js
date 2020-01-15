import React from 'react';

import Genre from './post/genre';
import Author from './post/author'
import Credibility from './post/credibility';
import Title from './post/title';
import Description from './post/description';

const Feed = props => {
    return (
        <section id="feed">
            {props.posts.map(item => (
                <article key={ item.id } >
                    <span>
                        <p>
                            <a href="/" className="genre">{item.genre}</a> by {item.author}
                        </p>
                        <p>Cred: {item.credibility}</p>
                    </span>
                    <a href="/post/{item.id}" style={ title } >
                        <Title title={ item.title } />
                    </a>
                    <Description description={ item.description } />
                </article>
            ))}
        </section>
    )
}

const title = {
    color: 'rgb(61, 61, 61)',
    textDecoration: 'none'
}

export default Feed;