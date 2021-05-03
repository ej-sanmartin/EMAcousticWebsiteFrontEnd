// Helper function to format submissions the way Netlify expects it
const encode = (data) => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=")
}

export {
    encode,
};