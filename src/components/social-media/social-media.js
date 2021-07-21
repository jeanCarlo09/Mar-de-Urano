import React from 'react';

export const SocialMedia = () => {

    return (
        <div className="pro-details-social mt-0">
            <ul>
                <li>
                    <a href={`//facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
                        <i className="fab fa-facebook" />
                    </a>
                </li>
                <li>
                    <a href={`//pinterest.com/pin/create/button/?url=${window.location.href}`} target="_blank">
                        <i className="fab fa-pinterest-p" />
                    </a>
                </li>
                <li>
                    <a href={`//twitter.com/intent/tweet?text=${window.location.href}`} target="_blank">
                        <i className="fab fa-twitter" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
