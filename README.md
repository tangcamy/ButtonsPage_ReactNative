# 計數器App_(按鈕元件＆切換渲染頁面)
React Native，使用跨平台expo模擬器撰寫計數器 app 程式。

## 按鈕元件
  - 客製化按鈕元件  `CustomButtons`
  - 數字加10 `plusTen`
  - 數字減10 `minusTen`
  - 數字歸零 `CountZero`
  - 切換頁面 `ChangePage`

## 專案渲染
view渲染: `<ModeView/>`

- PageA:
<img src="https://github.com/tangcamy/ButtonsPage_ReactNative/blob/main/src/demo/PageA_加.png" alt="PageB" width="200" height="350" />
- PageB:
<img src="https://github.com/tangcamy/ButtonsPage_ReactNative/blob/main/src/demo/PageB.png" alt="PageB" width="200" height="350" />

## Environment SetUp - 環境建置
  - nvm 安裝 Node.js (20.11.1) - mac 
    - 確認版本`nvm ls`，指定版本`nvm use v20.11.1`
  - "expo": "~50.0.14",
  - "react": "18.2.0",
  - "react-native": "0.73.6",
  - "react-native-web": "~0.19.6",
  - "react-dom": "18.2.0",
  - "@expo/metro-runtime": "~3.1.3"

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/tangcamy/ButtonsPage_ReactNative.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd ButtonsPage_ReactNative
```

3. 安裝 npm 套件，在 Terminal 輸入 

```
npm init  -y 
```

4. 啟動伺服器 指令
```
npx expo start
```



## Contributor - 專案開發人員
> [tangcamy](https://github.com/tangcamy)
