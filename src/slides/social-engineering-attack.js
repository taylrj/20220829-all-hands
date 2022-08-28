import AppearUnorderItems from './appear-unorder-items'
import Iframe from './iframe-slide'
import ImageWithTitle from './image-with-title'
import Intro from './intro-slide'
import { 
  Appear, 
  Box, 
  FlexBox, 
  Heading, 
  Image, 
  Slide,
  Notes,
} from 'spectacle'

const SocialEngineeringAttack = () => (
  <>
    <Intro 
      title="組織如何防護網路攻擊？"
    />
    <ImageWithTitle 
      source={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Minimum-Tonne.svg/656px-Minimum-Tonne.svg.png"} 
      title="木桶理論"
      width="50%"
      note={() => (
        <>
          <ol>
            <li>組織的資訊安全程度取決於最弱的環節</li>
          </ol>
        </>
      )} 
    />
    <AppearUnorderItems
      title="社交工程攻擊"
      items={[
        "定義：對人進行心理操縱，使其採取行動以達資訊收集、欺詐或系統存取目的的攻擊",
      ]}
    />
    <ImageWithTitle 
      source={"https://i.imgflip.com/1b0now.jpg"} 
      title="網路釣魚"
      width="60%"
      note={() => (
        <>
          <ol>
            <li>網路釣魚</li>
          </ol>
        </>
      )} 
    />
    <ImageWithTitle 
      source={"https://www.kratikal.com/blog/wp-content/uploads/2021/03/533i0g.jpg"} 
      note={() => (
        <>
          <ol>
            <li>一種透過電子郵件、簡訊、即時通訊、網站企圖取得用戶的個人敏感資訊的手法</li>
            <li>但你會說：如果我不貪、不會被利誘的話應該還好吧</li>
          </ol>
        </>
      )} 
    />
    <Iframe
      source="https://phishingquiz.withgoogle.com/?hl=zh-TW"
    />
    <AppearUnorderItems
      title="網路釣魚的目的是什麼？"
      items={[
        "想辦法騙到你的帳號密碼 ➔ 取得帳號的控制權",
        "想辦法讓你開啟、執行或安裝某個檔案 ➔ 取得設備的控制權"
      ]}
      note={() => (
        <>
          勒索軟體：
          <ol>
            <li>控制使用者的電腦或加密資料，隨後要求使用者支付贖金，以恢復正常作業</li>
            <li>微軟報告：勒索軟體的新商業模式</li>
          </ol> 
          這兩種攻擊可能會聯手進行
          <ol>
            <li>先偷到你的帳號密碼，在市場上轉賣給想控制設備的有心人，他們會很容易能控制你的設備，如此一來，想要做到內容置換就是很簡單的事情了</li>
            <li>控制電腦以後順便偷你的帳號密碼，再拿去賣</li>
          </ol> 
        </>
      )}
    />
    <Iframe
      source="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE54L7v"
    />
    <AppearUnorderItems
      title="來自微軟的建議"
      items={[
        "企業應啟用多因素驗證來防止身份（帳密）資料失竊",
        "驗證網路安全工具的配置",
        "移除重覆或不常使用的應用程式",
        "要小心使用 TeamViewer 這種遠端支援工具",
        "確保所有軟體都是最新版本"
      ]}
      note={() => (
        <>
          <ol>
            <li>內網、訪客網路要切開</li>
            <li>不要在公用電腦登入自己的帳號</li>
          </ol>
        </>
      )}
    />
    <AppearUnorderItems
      title="如何保護自己？"
      items={[
        "記得更新、記得更新、記得更新",
        "填入帳號密碼時，使用 1Password 自動帶入",
        "使用網頁版 E-Mail 介面，並儘量用雲端硬碟打開附件，有需要才下載",
        "啟用二階段認證",
      ]}
      note={() => (
        <>
          <ol>
            <li>記得更新：作業系統、瀏覽器、常用軟體</li>
            <li>1Password 會去檢查當前頁面是否為合法、官方的頁面</li>
          </ol>
        </>
      )}
    />
    <AppearUnorderItems
      title="如何保護組織？"
      items={[
        "保護自己就是保護組織",
        "訪客使用訪客網路（twreporter-guest）；員工使用內部網路（twreporter）",
        "避免在公用電腦登入自己的帳號",
        "落實密碼管理，定期更新密碼"
      ]}
      note={() => (
        <>
          <ol>
            <li>加強密碼強度</li>
            <li>1Password密碼遺失時，請找工程部為你重設密碼</li>
          </ol>
        </>
      )}
    />
    <Intro 
      title="一起來啟用二階段認證吧！"
      subtitle="Google Workspace Demo ✨"
    />
  </>
)
export default SocialEngineeringAttack
