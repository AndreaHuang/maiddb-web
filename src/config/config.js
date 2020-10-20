const dev={
    apiUrl: "http://192.168.8.103:3001/api",
}
const prod={
    apiUrl:"https://api-dot-maiddb.df.r.appspot.com/api"
}
const config = process.env.REACT_APP_STAGE === 'production' ? prod:dev;

export default {
    filePath: "/file",
    recordPerPage: 25,
    ...config
}

