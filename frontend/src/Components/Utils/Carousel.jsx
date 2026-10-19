import React, { useState, useEffect } from 'react'
import '../../carousel.css'

const Carousel = ({ title, items, interval = 4000 }) => {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const total = items.length

    const next = () => setIndex((index + 1) % total)
    const prev = () => setIndex((index - 1 + total) % total)

    // auto next (pauses while the mouse is over it)
    useEffect(() => {
        if (paused) return
        const timer = setTimeout(next, interval)
        return () => clearTimeout(timer)
    }, [index, paused])

    // how far a card is from the center: 0 = center, -1 = left, 1 = right
    const getOffset = (i) => {
        let offset = i - index
        if (offset > total / 2) offset -= total
        if (offset < -total / 2) offset += total
        return offset
    }

    return (
        <section
            className="cc"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <h2>{title}</h2>

            <div className="cc__stage">
                {items.map((item, i) => {
                    const offset = getOffset(i)
                    let className = 'cc__card'
                    if (offset === 0) className += ' is-center'
                    if (Math.abs(offset) > 1) className += ' is-hidden'

                    return (
                        <div
                            key={item._id}
                            className={className}
                            style={{ '--o': offset }}
                            onClick={() => setIndex(i)}
                        >
                            <img src={item.images[0].url} alt={item.name} />
                            <p className="cc__name">{item.name}</p>
                            <p className="cc__price">${item.price}</p>
                        </div>
                    )
                })}

                <button className="cc__btn cc__btn--prev" onClick={prev}>‹</button>
                <button className="cc__btn cc__btn--next" onClick={next}>›</button>
            </div>

            <div className="cc__dots">
                {items.map((item, i) => (
                    <button
                        key={item._id}
                        className={i === index ? 'is-active' : ''}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Carousel