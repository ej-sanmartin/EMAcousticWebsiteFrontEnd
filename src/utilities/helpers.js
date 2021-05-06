// Helper function to format submissions the way Netlify expects it
const encode = (data) => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export {
    encode,
};