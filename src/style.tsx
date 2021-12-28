import { FC } from "react";
type Props ={
  mainColor:string
  subColor:string
}
const Style:FC<Props> = ({mainColor, subColor}) =>(
  <style>
  {`
    @charset "utf-8";

    /*
     * "Comfortaa" is lisenced under the SIL Open Font License 1.1
     * http://fonts.googleapis.com
     * https://www.google.com/fonts/attribution
     * http://scripts.sil.org/OFL
     */
    
    /* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    
    全体の設定
    
    ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
    body {
      color: #a9a9a9;
      font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo',
        'Noto Sans Japanese', Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
      font-size: 16px;
      line-height: 1.6;
    }
    
    a {
      color: #555;
      text-decoration: none;
    }
    
    a:hover {
      opacity: 0.8;
    }
    
    
    .container,
    .container-fulid {
      overflow: hidden;
    }
    
    /* 見出しを太字に */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold !important;
    }
    
    /* 英字タイトルをWEBフォントに */
    header a,
    .display-4,
    .display-3,
    .lead,
    .circle-badges {
      font-family: 'Comfortaa', cursive;
    }
    
    /* パンくずリスト */
    .breadcrumb {
      background: transparent;
    }
    
    .breadcrumb li + li:before {
      content: '»' !important;
    }
    
    .bg-sub{
      background-color: ${subColor};
    }
    /* ヘッダー営業時間 */
    .top-stitch {
      padding: .5rem 0;
      color: #565656;
      background-color: ${mainColor};
      box-shadow: 0px 0px 0px 10px ${mainColor};
      border-bottom: dashed 2px #fff;
      border-left: dashed 2px #fff;
      border-right: dashed 2px #fff;
      margin-bottom: 10px;
      color: #fff;
      text-align: center;
      font-weight: bold;
    }
    
    .top-stitch p {
      margin: 0;
      padding: 0;
    }
    
    /* ロゴマーク */
    .logo-mark {
      left: 15%;
      top: -50px;
      z-index: 999;
      border-radius: 50%;
      height: 240px;
      width: 240px;
    }
    
    /* ロゴマークの中身 */
    .logo-mark img {
      top: 30%;
      left: 30%;
    }
    
    .main-txt {
      left: 15%;
      bottom: 20px;
    }
    
    /* ギザギザ線 */
    .zigzag {
      position: relative;
      margin: 5% 0;
      padding: 0;
      background-color: ${mainColor};
    }
    
    .zigzag::before,
    .zigzag::after {
      position: absolute;
      width: 100%;
      height: 60px;
      content: "";
    }
    
    .zigzag::before {
      top: -60px;
      background: linear-gradient(45deg, ${mainColor} 30px, transparent 0), linear-gradient(315deg, ${mainColor} 30px, transparent 0);
      background-size: 60px 60px;
    }
    
    .zigzag::after {
      bottom: -60px;
      background: linear-gradient(135deg, ${mainColor} 30px, transparent 0), linear-gradient(225deg, ${mainColor} 30px, transparent 0);
      background-size: 60px 60px;
    }
    
    /* 薄い背景のギザギザ線 */
    .light-zigzag {
      position: relative;
      margin: 5% 0 0;
      padding: 0;
      background-color: #f8f9fa;
    }
    
    .light-zigzag::before,
    .light-zigzag::after {
      position: absolute;
      width: 100%;
      height: 60px;
      content: "";
    }
    
    .light-zigzag::before {
      top: -60px;
      background: linear-gradient(45deg, #f8f9fa 30px, transparent 0), linear-gradient(315deg, #f8f9fa 30px, transparent 0);
      background-size: 60px 60px;
    }
    
    .light-zigzag::after {
      bottom: -60px;
      background: linear-gradient(135deg, #f8f9fa 30px, transparent 0), linear-gradient(225deg, #f8f9fa 30px, transparent 0);
      background-size: 60px 60px;
    }
    
    /* ギザギザ線なし */
    .zigzag-none:after {
      content: none !important;
    }
    
    /* コピーライトのギザギザ線 */
    .zigzag-copy {
      position: relative;
      padding-top: 5%;
      background-color: ${mainColor};
    }
    
    .zigzag-copy::before {
      position: absolute;
      width: 100%;
      height: 60px;
      content: "";
      top: -60px;
      background: linear-gradient(45deg, ${mainColor} 30px, transparent 0), linear-gradient(315deg, ${mainColor} 30px, transparent 0);
      background-size: 60px 60px;
    }
    
    /* ------------------------------
    地図サイズ
    --------------------------------- */
    iframe {
      display: block;
      width: 100%;
      height: 400px;
    }
    
    /* ------------------------------
    フッター
    --------------------------------- */
    .stitch {
      padding: 1rem !important;
      margin: 2em 0 !important;
      color: #565656;
      background-color: ${mainColor};
      box-shadow: 0px 0px 0px 10px ${mainColor};
      border: dashed 2px #fff;
      border-radius: 8px;
    }
    
    .stitch p {
      margin-bottom: .5rem;
    }
    
    /* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    
    トップページ
    
    ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
    
    /* トップ画像 */
    .top-image {
      background-image: url("../img/cafe-image.jpg");
      background-size: cover;
      background-position: center center;
      height: 650px;
      box-shadow: 0px 5px 6px 0px #e2e2e2;
      border-radius: 0;
    }
    
    /* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    
    SAMPLEページ
    
    ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
    
    /* サンプルトップ画像 */
    .main-image {
      background-image: url("../img/cafe-image.jpg");
      background-size: cover;
      background-position: center center;
      height: 350px;
      box-shadow: 0px 5px 6px 0px #e2e2e2;
      border-radius: 0;
    }
    
    /* 曜日 */
    .circle-badges {
      position: absolute;
      top: -30px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #e7bc72;
      text-align: center;
      line-height: 120px;
      color: #fff;
      font-size: 1.5rem;
      z-index: 999;
    }
    
    /* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    
    CONTACTページ
    
    ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
    
    /* 入力フォーム */
    input[type]:focus {
      outline: 0;
      box-shadow: none;
      border: 2px solid orange;
    }
    
    /* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    
    メディアクエリ
    
    ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
    
    /* 中デバイス（タブレット, 992px 未満）
    ============================================== */
    @media screen and (max-width: 991.98px) {
      .logo-mark {
        left: 5%;
      }
    
      .main-txt {
        left: 5%;
      }
    
      .zigzag {
        margin: 10% 0;
      }
    
      .light-zigzag {
        margin: 10% 0 0;
      }
    }
    
    /* END */
    
    /* 小デバイス（横向きモバイル, 768px 未満）
    ============================================== */
    @media screen and (max-width: 767.98px) {
    
      /* ロゴマークを小さく設定 */
      .logo-mark {
        height: 140px;
        width: 140px;
      }
    
      .logo-mark img {
        width: 50%;
      }
    
      .lead {
        font-size: 1rem;
      }
    
      .circle-badges {
        top: -10px;
        width: 100px;
        height: 100px;
      }
    }
    
    /* END */
    
    /* 極小デバイス（縦向きモバイル, 576px 未満）
      ============================================== */
    @media screen and (max-width: 575.98px) {
    
      .display-3,
      .display-4 {
        font-size: 2rem;
      }
    
      .logo-mark {
        left: 5%;
        top: -10px;
      }
    
      .logo-mark img {
        top: 25%;
        left: 25%;
      }
    
      .zigzag,
      .light-zigzag {
        margin: 15% 0;
      }
    
      .stitch img {
        width: 100%;
      }
    }
    
    /* END */
    
  `}
  </style>
)

export default Style