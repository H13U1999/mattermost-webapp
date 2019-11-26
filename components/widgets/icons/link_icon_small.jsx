// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class LinkIconSmall extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    role='img'
                    aria-label='Link icon'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                        stroke='none'
                        strokeWidth='1'
                        fill='currentColor'
                        fillRule='evenodd'
                    >
                        <path d='M6.0625 7.9375C6.1875 8.0625 6.25 8.21875 6.25 8.40625C6.25 8.59375 6.1875 8.76042 6.0625 8.90625C5.9375 9.03125 5.78125 9.09375 5.59375 9.09375C5.40625 9.09375 5.25 9.02083 5.125 8.875C4.6875 8.45833 4.39583 7.96875 4.25 7.40625C4.10417 6.82292 4.10417 6.25 4.25 5.6875C4.39583 5.10417 4.6875 4.60417 5.125 4.1875L7.46875 1.8125C7.90625 1.39583 8.40625 1.11458 8.96875 0.96875C9.55208 0.802083 10.125 0.802083 10.6875 0.96875C11.2708 1.11458 11.7708 1.39583 12.1875 1.8125C12.6042 2.22917 12.8854 2.72917 13.0312 3.3125C13.1979 3.875 13.1979 4.44792 13.0312 5.03125C12.8854 5.59375 12.6042 6.09375 12.1875 6.53125L11.1875 7.53125C11.2083 6.96875 11.125 6.42708 10.9375 5.90625L11.25 5.59375C11.6458 5.19792 11.8438 4.72917 11.8438 4.1875C11.8438 3.625 11.6458 3.14583 11.25 2.75C10.8542 2.35417 10.375 2.15625 9.8125 2.15625C9.27083 2.15625 8.80208 2.35417 8.40625 2.75L6.0625 5.125C5.66667 5.5 5.46875 5.96875 5.46875 6.53125C5.46875 7.07292 5.66667 7.54167 6.0625 7.9375ZM7.9375 5.125C8.0625 4.97917 8.21875 4.90625 8.40625 4.90625C8.59375 4.90625 8.75 4.97917 8.875 5.125C9.3125 5.54167 9.60417 6.04167 9.75 6.625C9.89583 7.1875 9.89583 7.76042 9.75 8.34375C9.60417 8.90625 9.3125 9.39583 8.875 9.8125L6.53125 12.1875C6.09375 12.6042 5.58333 12.8854 5 13.0312C4.4375 13.1979 3.86458 13.1979 3.28125 13.0312C2.71875 12.8854 2.22917 12.6042 1.8125 12.1875C1.39583 11.7708 1.10417 11.2812 0.9375 10.7188C0.791667 10.1354 0.791667 9.5625 0.9375 9C1.10417 8.41667 1.39583 7.90625 1.8125 7.46875L2.8125 6.46875C2.79167 7.03125 2.875 7.57292 3.0625 8.09375L2.75 8.40625C2.35417 8.80208 2.15625 9.28125 2.15625 9.84375C2.15625 10.3854 2.35417 10.8542 2.75 11.25C3.14583 11.6458 3.61458 11.8438 4.15625 11.8438C4.71875 11.8438 5.19792 11.6458 5.59375 11.25L7.9375 8.875C8.33333 8.5 8.53125 8.04167 8.53125 7.5C8.53125 6.9375 8.33333 6.45833 7.9375 6.0625C7.8125 5.9375 7.75 5.78125 7.75 5.59375C7.75 5.40625 7.8125 5.25 7.9375 5.125Z'/>
                    </g>
                </svg>
            </span>
        );
    }
}
