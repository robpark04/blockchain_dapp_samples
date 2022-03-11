const config = {
  development: {
    RPC_URL: ""
  },
  production: {
    RPC_URL: ""
  }
}

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
export default config[env]