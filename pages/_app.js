import Header from '../components/Header';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
:root {
    /* colors */
    --clr-dark: 230 35% 7%;
    --clr-light: 231 77% 90%;
    --clr-white: 0 0% 100%;

    /* font sizes */
    --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
    --fs-800: 3.5rem;
    --fs-700: 1.5rem;
    --fs-600: 1rem;
    --fs-500: 1rem;
    --fs-400: 0.9375rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;

    /* font-families */
    --ff-serif: 'Bellefair', serif;
    --ff-sans-cond: 'Barlow Condensed', sans-serif;
    --ff-sans-normal: 'Barlow', sans-serif;
}

@media (min-width: 35em) {
    :root {
        --fs-800: 5rem;
        --fs-700: 2.5rem;
        --fs-600: 1.5rem;
        --fs-500: 1.25rem;
        --fs-400: 1rem;
    }
}

@media (min-width: 45em) {
    :root {
        /* font-sizes */
        --fs-800: 6.25rem;
        --fs-700: 3.5rem;
        --fs-600: 2rem;
        --fs-500: 1.75rem;
        --fs-400: 1.125rem;
    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
picture {
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-weight: 400;
}

[hidden] {
    display: none;
}


/* set up the body */
body {
    font-family: var(--ff-sans-normal);
    font-size: var(--fs-400);
    color: hsl(var(--clr-white));
    background-color: hsl(var(--clr-dark));
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
}

#__next {
    display: grid;
    grid-template-rows: min-content 1fr;
    height: 100vh;
}

/* make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Form elements */
input,
button,
textarea,
select {
    font: inherit;
}

/* remove animations  */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

`;

function MyApp({ Component, pageProps }) {
    const { pathname } = useRouter();

    useEffect(() => {
        document.body.className = pathname === '/' ? 'home' : pathname.slice(1);
    });

    return (
        <>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
