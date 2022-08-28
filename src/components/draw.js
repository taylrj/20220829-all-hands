import { Text, FlexBox, Image } from 'spectacle'
import React, { useState, useEffect, useCallback } from 'react'
import A from "../assets/about-us/Edit-SherryLee.png"
import B from "../assets/about-us/editor_nicofang.png"
import C from "../assets/about-us/Edit-JasonLiu.png"
import D from "../assets/about-us/Edit-TzewuChang.png"
import E from "../assets/about-us/Edit-CornerHo.png"
import F from "../assets/about-us/Edit-FuNienTsao.png"
import G from "../assets/about-us/Edit-WenTing.png"
import H from "../assets/about-us/Edit-Uyo.png"
import I from "../assets/about-us/Edit-LinHuiChen.png"
import J from "../assets/about-us/Edit-KungTeLien.png"
import K from "../assets/about-us/Edit-chhung.png"
import L from "../assets/about-us/Edit-KeHaoHsiang.png"
import M from "../assets/about-us/Edit-ChenChieh.png"
import N from "../assets/about-us/Edit-DeLunChen.png"
import O from "../assets/about-us/Edit-YangWill.png"
import P from "../assets/about-us/Edit-JungShinHo.png"
import Q from "../assets/about-us/Edit-JillYang.png"
import R from "../assets/about-us/Edit-JeanLan.png"
import S from "../assets/about-us/podcast_wanru.png"
import T from "../assets/about-us/Photo-ChihWeiYu.png"
import U from "../assets/about-us/Photo-TzuLeiYang.png"
import V from "../assets/about-us/Photo-YenTingLin.png"
import W from "../assets/about-us/Photo-HsiaoWeiChen.png"
import X from "../assets/about-us/design_dadawu.png"
import Y from "../assets/about-us/Digi-YuChenHuang.png"
import Z from "../assets/about-us/Edit-EthanKong.png"
import AA from "../assets/about-us/design_hsinyu.png"
import BB from "../assets/about-us/Edit-ShihYunChang.png"
import CC from "../assets/about-us/Edit-SzuHuaChen.png"
import DD from "../assets/about-us/social_yenchen.png"
import EE from "../assets/about-us/Digi-IvoryChia.png"
import FF from "../assets/about-us/foundation-JaneLi.png"
import GG from "../assets/about-us/Marketing-ChenSingIng.png"
import HH from "../assets/about-us/Digi-TalorFang.png"
import II from "../assets/about-us/Digi-AylieChou.png"
import JJ from "../assets/about-us/engineering_schsu.png"
import KK from "../assets/about-us/blankface.png"

const members = [
  A,
  B,
  C,
  D,
  E,
  F,
  G, 
  H,
  I,
  J,
  K, 
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
  AA,
  BB,
  CC,
  DD,
  EE,
  FF,
  GG,
  HH,
  II,
  JJ,
  KK
]

const draw = () => ({
  results: Math.floor(Math.random() * members.length),
})

const ShowDrawing = ({ drawing = false }) => {
  let drawIntervalId
  let slowerIntervalId
  const defaultDelay = 50
  const [current, setCurrent] = useState(0)
  const drawResult = useCallback(() => setCurrent(draw().results), [setCurrent, draw])

  useEffect(() => {
    if (!window) {
      return
    }
     
    if (drawIntervalId) {
      clearInterval(drawIntervalId)
    }  
     
    if (drawing) {
      drawIntervalId = setInterval(drawResult, defaultDelay)
    }

    return () => {
      clearInterval(drawIntervalId)
      clearInterval(slowerIntervalId)
    }
  }, [drawing])

  return (
    <Image src={members[current]} width="300px" />
  )
}


const DrawColleague = () => {
  const [count, setCount] = useState(0)
  const [drawStart, setDrawStart] = useState(false)

  return (
    <FlexBox height="100%" flexDirection="column">
      <ShowDrawing drawing={drawStart} />
      <button 
        onClick={() => setDrawStart(!drawStart)}
        style={{ width: 200, fontSize: 30, marginTop: 120, borderRadius: '5%'}}
      >
        {drawStart ? '停！' : '開始抽！'} 
      </button>
    </FlexBox>
  )
}

export default DrawColleague
