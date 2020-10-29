const dev={
    apiUrl: "http://192.168.8.103:3001/api",
}
const prod={
    apiUrl:"https://api-dot-maiddb.df.r.appspot.com/api"
}
console.log("process.env ", process.env );
console.log("process.env.NODE_ENV ", process.env.NODE_ENV );
console.log("process.env.REACT_APP_STAGE ", process.env.REACT_APP_STAGE );
const config = process.env.NODE_ENV === 'production' ? prod:dev;

export default {
    filePath: "/file",
    recordPerPage: 25,
    ...config
}

