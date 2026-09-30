# Morse 词需求与可打性调研（2026-09-30）

数据源：Google Trends MCP（相对热度）、Keywords Everywhere 扩展经 CDP:9223 注入的 SERP
难度/DA、GSC API（sc-domain:morsecodenow.com，service account wang-hjx@advance-age-485316-v6）、
GA4 property 553562584。

## 1. 需求侧：niche 本身健康

`morse code` 与 `qr code generator`、`password generator` 同档热度，是 SKILL.md 标尺 GPTs
（4–6）的 13–20 倍。5 年无下滑，季节性：head 峰在 1 月初，`chart` 峰在 5–6 月。

| 簇 | 代表词 | 相对热度 |
|---|---|---|
| 工具 | `morse code translator` | 44–100（典型 55–70）|
| 定义 | `what is morse code` | 37–100，每日无空窗 |
| 定义 | `what does morse code mean` | 23–41 每日 |
| 模式 | `X in morse code`（整簇） | 53–100 |
| 单词 | `why in morse code` | 38–100 持续 |
| 其他工具变体 | translate morse code / decoder / generator / text-to | 1–14 |
| 图表 | `morse code chart` | 2–3，5–6 月冲 25 |
| 音频 | `morse code audio` | 0–4 |
| 情感词 | goodbye / miss you / i hate you / sorry | ≈0 |

## 2. 可打性（KE 实测 incumbent DA 与难度）

| 词 | SEO | Off-Page | On-Page | incumbent DA | 判定 |
|---|---|---|---|---|---|
| `morse code translator` | 55 | **41** | 80 | **1, 5, 9, 19, 29, 56** | **可打**（blendertimer/morsecodeapp/morseencoder 等小站）|
| `morse code generator` | 44 | **39** | 52 | 19, 27, 29, 31, 50, 56 | 可打 |
| `morse code chart` | — | 49 | 53 | 12, 13, 23, 51, 56 | 可打但量 2–3 |
| `morse code alphabet` | — | 38 | 65 | 3, 13, 36, 51, **97** | 混入 Wikipedia |
| `a in morse code` | 53 | 41 | 75 | 19, 29, 48, 56 | 可打 |
| `sos in morse code` | 60 | 65 | 51 | 5, 56, 81, **97** | 中等 |
| `what is morse code` | 66 | **80** | 39 | **89, 93, 95, 97**（BBC/military/Britannica/Wikipedia）| **锁死** |
| `what does morse code mean` | 66 | **84** | 32 | 81, 89, 92, 95, 97（+Merriam-Webster）| **锁死** |
| `why in morse code` | 67 | 63 | 73 | 19, 56, **91, 93, 97**（Khan/Britannica/Wikipedia）| **锁死** |

**核心张力**：需求量最大的定义簇被百科类 DA 90+ 锁死；唯一"量够大且能赢"的是
`morse code translator`（前页有 DA 1/5/9 的站）。

## 3. 本站实际状态（GSC，6 个月）

```
总曝光 35   总点击 0   不同查询 26   无任何查询 pos < 63
`morse code translator` 本体：0 曝光（仅复合变体出现，pos 63.5–77）
Google 对域名的归类：maker / creator / generator / random / convert 族
GA4 28 天：organic session = 0；105 sessions 里 103 direct，engagement 仅 5.8%（bot 特征）
```

技术面已排除：全站自引用 canonical、`index, follow`、robots.txt 正常、http→https 308 正常、
sitemap 200/61 URL、标题唯一、1400–2600 词/页。

## 4. 页面配置与需求的错配

| 现状 | 问题 |
|---|---|
| 6 页打 `chart`（热 2–3） | 过度；建议留 /chart + /alphabet，american/international 降为小节，pdf 转 /chart 内转化位 |
| 4 个音频页（`audio` 热 0–4） | 3 页可并入词页 |
| 仅 4 个单词页（love/forever/no/help）+ hello/sos | 模式簇是最大簇（53–100），但实测多数扩展词≈0，只 `why` 高却被 Wikipedia 锁死 → **不能靠扩词解决** |
| 无独立 `/text-to-morse-code`、`/morse-code-decoder` | 二者可打（Off 30/未测）但热仅 1–7，增量有限 |

## 5. 结论

选词方向当初没错（模式簇、工具词都是对的），**但域名当前几乎不在 Google 的候选集里**：
6 个月 35 曝光、0 点击、无一词进前 6 页。在 SERP 对手是 DA 1–9 的情况下仍排 80，
说明瓶颈是**站内 rankability（外链为零 + 首页未被判为 translator 候选）**，而不是"词没选好"。

因此不存在低成本"推一把"的机会。可选路径：

- **A 止损**：不再投入，资源转 pbzero 上线冲刺。
- **B 重建 rankability**：外链建设 + 首页针对 translator 重写（On-Page 难度 80 说明 SERP 要更深内容）+
  chart 簇合并减页。周期以月计，且无法验证不失败。
- **C 换 niche**：保留这套 61 页工具站架构，迁到需求/可打性更好的 niche（architecturally portable）。

注：`/morse-code-questions-and-answers` 是 trivia 尖峰（`e in morse code crossword` +11300%）的
错误容器；填字线索求解是另一个形态。
