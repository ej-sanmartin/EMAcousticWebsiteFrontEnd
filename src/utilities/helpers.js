import { detect } from 'detect-browser';
import { isIOS } from 'react-device-detect';

// Helper function to format submissions the way Netlify expects it
const encode = (data) => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const browser = detect();
const createLinkProps = (id) => isIOS || browser.name === 'safari' ? id : null;

export {
    encode,
    createLinkProps
};