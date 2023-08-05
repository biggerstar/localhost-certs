import {cert, key} from './main.js'

export function viteCertsPlugin() {
    return {
        name: "vite-plugin:localhost-certs",
        enforce: "pre",
        config: (config) => {
            if (config.server) {
                config.server.https = {
                    key: key(),
                    cert: cert(),
                }
            }
        }
    }
}
