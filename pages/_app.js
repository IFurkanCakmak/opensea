import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

/**
 * chain ID 4 represents the rinkeby network
 * 'injected' connector is a web3 connection method used by metamask
 */



const supportedChainIds = [4]
const connectors = {
  injected: {},

}


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
    supportedChainIds={supportedChainIds}
    connectors={connectors}
>
  <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
