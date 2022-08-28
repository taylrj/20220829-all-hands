import AppearOrderItems from './appear-order-items'
import ImageWithTitle from './image-with-title'
import Intro from './intro-slide'
import { Slide, FlexBox, Heading, Image } from 'spectacle'

// assets
import Choice from '../assets/choice.png'

const DDoS = () => (
  <>
    <Intro 
      title="什麼是DDoS 攻擊？"
      subtitle="Distributed Denial-of-Service (DDoS)"
    />
    <ImageWithTitle 
      source={"https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-attack/ddos-attack-traffic-metaphor.png"} 
      title="分散式阻斷服務攻擊"
      note={() => (
        <>
          <ol>
            <li>DDoS 攻擊就像高速公路上的意外交通堵塞，阻止常規流量到達目的地</li>
            <li>利用連接到網際網路的機器組成的網路，產生高流量使目標伺服器或其周圍的基礎設施不堪重負，從而阻斷目標伺服器、服務或網路的正常流量</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle 
      source={"https://cf-assets.www.cloudflare.com/slt3lc6tev37/3L6e3OwCgSWOxp79AJUzXs/9ca4e5257060d868bcab65a3012a27bb/osi-model-7-layers_zhTW.svg"} 
      title="DDoS 工作原理"
      note={() => (
        <>
          <ol>
            <li>網際網路的網路連線由許多不同的元件或「層」組成</li>
            <li>DDoS 攻擊可分為好幾種類別</li>
            <li>幾乎所有 DDoS 攻擊都涉及到以流量來淹沒目標裝置或網路，直到耗盡目標的資源來阻斷服務</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle 
      source={"https://cf-assets.www.cloudflare.com/slt3lc6tev37/koKt5UKczRq47xJsexfBV/c1e1b2ab237063354915d16072157bac/7-application-layer.svg"} 
      title="DDoS 工作原理（續）"
      note={() => (
        <>
          <ol>
            <li>單獨來看發生在應用程式層的攻擊</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle 
      source={"https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-botnet/ddos-botnet-attack-cropped.png"} 
      title="發生在應用程式層的 DDoS 攻擊"
      note={() => (
        <>
          <ol>
            <li>在用戶端執行單一 HTTP 請求僅消耗少量計算資源，但目標伺服器上做出回應需要消耗較多資源，因為伺服器往往要進行運算才能創建一個頁面</li>
            <li>難以防禦，因為惡意流量和合法流量可能很難區分開來</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle 
      source={Choice}
      width="auto"
      height="100%"
      note={() => (
        <>
          <ol>
            <li>關鍵問題在於區分攻擊流量和正常流量</li>
          </ol>
        </>
      )} 
    />
    <AppearOrderItems 
      title="如何緩解 DDoS 攻擊？"
      items={[
        "限制伺服器在特定時間範圍能接收的請求數量",
        "將攻擊流量分散",
        "應用程式防火牆"
      ]}
      note={() => (
        <>
          <ol>
            <li>如果知道伺服器能處理的量能，那就拒絕超出能力的請求</li>
            <li>一個人做不來，就再請能做相同事的更多人來幫他分流</li>
            <li>建一座城牆，所有要通行的請求都要留紀錄，再依他的來源地（IP）決定要不要放行</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle
      title="如何緩解 DDoS 攻擊？ - 應用程式防火牆"
      source={"https://www.cloudflare.com/img/learning/ddos/glossary/waf/waf.png"}
      note={() => (
        <>
          你會怎麼設計？
          <ol>
            <li>原則上放行、例外禁止通行</li>
            <li>原則上禁止通行、例外放行</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle
      title="如何緩解 DDoS 攻擊？（續）"
      source={"https://www.cloudflare.com/img/learning/ddos/ddos-mitigation/ddos-mitigation-stages.png"}
      width="100%"
      note={() => (
        <>
          其實這幾種方法不衝突，可以同時使用 
          <ol>
            <li>Routing: 分流</li>
            <li>Detection: 偵測是否為攻擊流量</li>
            <li>Response: 丟掉惡意的攻擊流量</li>
            <li>Adapt: 持續學習辨認攻擊流量的新把戲</li>
          </ol>
        </>
      )} 
    />
  </>
)

export default DDoS
