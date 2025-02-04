// src/data/timelineData.js

import { text } from "framer-motion/client";

export const CATEGORIES = {
    MODEL_RELEASE: "MODEL_RELEASE",
    CULTURE: "CULTURE",
    BUSINESS: "BUSINESS",
    RESEARCH: "RESEARCH",
    POLICY: "POLICY"
};

function createLink(url, title) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`;
}

export const TIMELINE_DATA = {
    events: [
        {
            start_date: { year: "2015", month: "11", day: "09" },
            text: {
                headline: createLink("https://www.wired.com/2015/11/google-open-sources-its-artificial-intelligence-engine/", "TensorFlow"),
                text: "<p>Google open-sources TensorFlow, its internal deep learning framework. Initially developed by the Google Brain team, TensorFlow would become one of the most influential AI frameworks.</p>"
            },
            chinese: {
                headline: createLink("https://www.wired.com/2015/11/google-open-sources-its-artificial-intelligence-engine/", "TensorFlow"),
                text: "<p>Google 开源了 TensorFlow，这是其内部的深度学习框架。最初由 Google Brain 团队开发，TensorFlow 最终成为最具影响力的人工智能框架之一。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2015", month: "12", day: "11" },
            text: {
                headline: createLink("https://openai.com/index/introducing-openai/", "OpenAI founded"),
                text: "<p>Elon Musk, Sam Altman, Greg Brockman, and others founded OpenAI with the goal of building AGI to benefit humanity.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/introducing-openai/", "OpenAI founded"),
                text: "<p>Elon Musk、Sam Altman、Greg Brockman 等人创立了 OpenAI，目标是构建有益于人类的通用人工智能（AGI）。</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2016", month: "03", day: "09" },
            text: {
                headline: createLink("https://deepmind.google/research/breakthroughs/alphago/", "AlphaGo"),
                text: "<p>DeepMind's AlphaGo defeats top human player Lee Sedol in the board game Go, defying what many considered possible.</p>"
            },
            chinese: {
                headline: createLink("https://deepmind.google/research/breakthroughs/alphago/", "AlphaGo"),
                text: "<p>DeepMind 的 AlphaGo 击败围棋世界冠军李世石，打破了人们对人工智能在这一领域能力的固有认知。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2016", month: "8", day: "31" },
            text: {
                headline: createLink("https://github.com/pytorch/pytorch/releases/tag/v0.1.1", "PyTorch"),
                text: "<p>Facebook releases PyTorch, a Python-first deep learning framework that would eventually become the dominant framework for AI research.</p>"
            },
            chinese: {
                headline: createLink("https://github.com/pytorch/pytorch/releases/tag/v0.1.1", "PyTorch"),
                text: "<p>Facebook 发布了 PyTorch，这是一款以 Python 为主的深度学习框架，后来成为 AI 研究领域的主流工具。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "01", day: "05" },
            text: {
                headline: createLink("https://futureoflife.org/event/bai-2017/", "Asilomar Conference"),
                text: "<p>Organized by the Future of Life Institute, all of the top names in the field gather for a conference in Asilomar to discuss how to build AGI beneficially.</p>"
            },
            chinese: {
                headline: createLink("https://futureoflife.org/event/bai-2017/", "Asilomar Conference"),
                text: "<p>由 Future of Life Institute 组织，该领域所有顶尖人物齐聚 Asilomar 会议，共同讨论如何构建有益于人类的 AGI.</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: createLink("https://arxiv.org/abs/1706.03762", "Attention is All You Need"),
                text: "<p>Google introduces the transformer architecture, a breakthrough deep learning architecture based on the attention mechanism. The architecture shows strong gains on language translation tasks.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/1706.03762", "Attention is All You Need"),
                text: "<p>Google 推出了 Transformer 架构，这是一种基于注意力机制的突破性深度学习架构。该架构在语言翻译任务上取得了显著提升。</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "06", day: "12" },
            text: {
                headline: createLink("https://arxiv.org/abs/1706.03741", "RLHF"),
                text: "<p>Christiano et al. publish the technique of reinforcement learning from human feedback (RLHF), which would later be used extensively to align large language models.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/1706.03741", "RLHF"),
                text: "<p>Christiano 等人发表了基于人类反馈的强化学习（RLHF）技术，该技术后来被广泛用于对齐大型语言模型。</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2017", month: "07", day: "20" },
            text: {
                headline: createLink("https://arxiv.org/abs/1707.06347", "PPO"),
                text: "<p>OpenAI introduces Proximal Policy Optimization, a simpler and more stable policy gradient method that would become widely used across many reinforcement learning domains, including RLHF.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/1707.06347", "PPO"),
                text: "<p>OpenAI 推出了近端策略优化（PPO），这是一种更简单、更稳定的策略梯度方法，后来在许多强化学习领域（包括 RLHF）被广泛应用。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2018", month: "06", day: "11" },
            text: {
                headline: createLink("https://openai.com/index/language-unsupervised/", "GPT-1"),
                text: "<p>OpenAI reveals the first version of its Generative Pre-trained Transformer (GPT).</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/language-unsupervised/", "GPT-1"),
                text: "<p>OpenAI 发布了其生成式预训练 Transformer（GPT）的第一个版本。</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2018", month: "10", day: "11" },
            text: {
                headline: createLink("https://arxiv.org/abs/1810.04805", "BERT"),
                text: "<p>Google releases BERT, an encoder language model that would become ubiquitous in NLP.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/1810.04805", "BERT"),
                text: "<p>Google 发布了 BERT，一种编码器语言模型，后来在自然语言处理领域无处不在。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2019", month: "02", day: "14" },
            text: {
                headline: createLink("https://openai.com/index/better-language-models/", "GPT-2"),
                text: "<p>OpenAI releases GPT-2, but withholds the largest version due to concerns about misuse. A decoder-only transformer, it was trained with next token prediction to generate text.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/better-language-models/", "GPT-2"),
                text: "<p>OpenAI 发布了 GPT-2，但由于担心被滥用而未公开最大的版本。这是一个仅含解码器的 Transformer，使用下一个标记预测进行训练以生成文本。</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2020", month: "01", day: "23" },
            text: {
                headline: createLink("https://arxiv.org/abs/2001.08361", "Scaling Laws"),
                text: "<p>Kaplan et al. release \"Scaling Laws for Neural Language Models\", showing that model performance predictably scales with compute, data, and parameters. Scaling laws would become the primary driver of progress over the next few years.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2001.08361", "Scaling Laws"),
                text: "<p>Kaplan 等人发布了《神经语言模型的扩展定律》，展示了模型性能与计算能力、数据量以及参数量之间的可预测扩展关系。扩展定律成为未来几年进步的主要驱动力。</p>"
            },
            importance: 3,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2020", month: "05", day: "28" },
            text: {
                headline: createLink("https://arxiv.org/abs/2005.14165", "GPT-3"),
                text: "<p>OpenAI releases GPT-3, the largest language model at the time and shocking in its ability to generate coherent paragraphs.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2005.14165", "GPT-3"),
                text: "<p>OpenAI 发布了 GPT-3，当时是最大的语言模型，其生成连贯段落的能力令人惊叹。</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2020", month: "12", day: "23" },
            text: {
                headline: createLink("https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/", "MuZero"),
                text: "<p>DeepMind introduces MuZero, which learned to master Go, chess, shogi, and Atari games without any knowledge of the rules.</p>"
            },
            chinese: {
                headline: createLink("https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/", "MuZero"),
                text: "<p>DeepMind 推出了 MuZero，它在不了解规则的情况下学会了精通围棋、国际象棋、日本将棋和 Atari 游戏。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2021", month: "01", day: "05" },
            text: {
                headline: createLink("https://openai.com/index/dall-e/", "DALL-E"),
                text: "<p>OpenAI introduces DALL-E, a model that generates images from textual descriptions.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/dall-e/", "DALL-E"),
                text: "<p>OpenAI 推出了 DALL-E，一种从文字描述生成图像的模型.</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2021", month: "05", day: "28" },
            text: {
                headline: createLink("https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems", "Anthropic founded"),
                text: "<p>A group of researchers from OpenAI leave to start Anthropic, featuring an empirical hard-science culture focused on AI safety.</p>"
            },
            chinese: {
                headline: createLink("https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems", "Anthropic founded"),
                text: "<p>一群来自 OpenAI 的研究者离开成立了 Anthropic，展现出以实证硬科学为文化、专注于 AI 安全的风格。</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2021", month: "06", day: "21" },
            text: {
                headline: createLink("https://arxiv.org/abs/2106.09685", "LoRA"),
                text: "<p>A team at Microsoft publishes Low-Rank Adaptation (LoRA), a technique that allows for fine-tuning of large language models with a fraction of the compute and would later become ubiquitous</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2106.09685", "LoRA"),
                text: "<p>微软的一支团队发布了低秩自适应(LoRA)技术，这种技术允许用极少的计算资源对大型语言模型进行微调，后来变得无处不在</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2021", month: "06", day: "29" },
            text: {
                headline: createLink("https://en.wikipedia.org/wiki/GitHub_Copilot", "GitHub Copilot"),
                text: "<p>Github previews Copilot in VSCode, a tool that used OpenAI's Codex model to generate code suggestions, marking the beginning of real-world AI code generation.</p>"
            },
            chinese: {
                headline: createLink("https://en.wikipedia.org/wiki/GitHub_Copilot", "GitHub Copilot"),
                text: "<p>Github 在 VSCode 中预览了 Copilot，该工具利用 OpenAI 的 Codex 模型生成代码建议，标志着现实世界中 AI 生成代码的开始.</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2022", month: "01", day: "27" },
            text: {
                headline: createLink("https://openai.com/index/instruction-following/", "InstructGPT"),
                text: "<p>OpenAI introduces InstructGPT, a model that can follow instructions in natural language better than base GPT-3 and was a prototype of what would become ChatGPT.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/instruction-following/", "InstructGPT"),
                text: "<p>OpenAI 推出了 InstructGPT，一种在自然语言指令下表现优于基础 GPT-3 的模型，也是 ChatGPT 原型的前身。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "01", day: "28" },
            text: {
                headline: createLink("https://arxiv.org/abs/2201.11903", "Chain-of-Thought Prompting"),
                text: "<p>Google Brain publishes a paper showing gains in LLM reasoning by having them think step-by-step. Despite being such a simple technique, chain-of-thought reasoning would become foundational to AI.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2201.11903", "Chain-of-Thought Prompting"),
                text: "<p>Google Brain 发表了一篇论文，展示了通过让大型语言模型逐步思考可以提高其推理能力。尽管这是一种非常简单的技术，但链式思维推理后来成为 AI 的基础方法之一。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "03", day: "29" },
            text: {
                headline: createLink("https://arxiv.org/abs/2203.15556", "Chinchilla"),
                text: "<p>DeepMind publish the Chinchilla paper, issuing a correction to the scaling laws of Kaplan et al. and suggesting that model size and training data should be scaled in equal proportion.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2203.15556", "Chinchilla"),
                text: "<p>DeepMind 发布了《Chinchilla》论文，对 Kaplan 等人的扩展定律进行了修正，并提出模型大小和训练数据应按相同比例扩展。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "04", day: "06" },
            text: {
                headline: createLink("https://openai.com/index/dall-e-2/", "DALL-E 2"),
                text: "<p>OpenAI shocks the world with the release of DALL-E 2, which could generate realistic images from text at an unprecedented level.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/dall-e-2/", "DALL-E 2"),
                text: "<p>OpenAI 的 DALL-E 2 发布震撼世界，它能够以前所未有的水平从文本生成逼真的图像。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2022", month: "05", day: "12" },
            text: {
                headline: createLink("https://arxiv.org/abs/2205.06175", "Gato"),
                text: "<p>DeepMind publish Gato in a paper titled \"A Generalist Agent\". Gato used a single large transformer to learn policies for 604 different RL tasks across varying modalities and observation types.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2205.06175", "Gato"),
                text: "<p>DeepMind 在题为 \"A Generalist Agent\" 的论文中发布了 Gato。Gato 使用单一大型 Transformer 学习了针对 604 个不同 RL 任务的策略，涵盖多种模态和观察类型.</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "05", day: "27" },
            text: {
                headline: createLink("https://arxiv.org/abs/2205.14135", "Flash Attention"),
                text: "<p>A group from Stanford release Flash Attention, a new method that significantly speeds up the attention mechanism in transformers.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2205.14135", "Flash Attention"),
                text: "<p>斯坦福的一组研究人员发布了 Flash Attention，一种显著加速 Transformer 中注意力机制的新方法。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "06", day: "11" },
            text: {
                headline: createLink("https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/", "Blake Lemoine fired"),
                text: "<p>A Google engineer named Blake Lemoine is fired after claiming that its LaMDA model was sentient. The story woke a lot of people up to the capabilities and risks of LLMs.</p>"
            },
            chinese: {
                headline: createLink("https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/", "Blake Lemoine fired"),
                text: "<p>一位名为 Blake Lemoine 的 Google 工程师因声称 LaMDA 模型具备感知能力而被解雇，此事引发了广泛关注，凸显了对话型大型语言模型潜在风险。</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2022", month: "06", day: "30" },
            text: {
                headline: createLink("https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/", "Minerva"),
                text: "<p>Google Research introduces Minerva, an LLM specialized to solve quantitative reasoning problems. Minerva moved the state-of-the-art on the MATH benchmark from 6.9% to 50.3%, surprising many who doubted that LLMs could ever be trained to do math well.</p>"
            },
            chinese: {
                headline: createLink("https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/", "Minerva"),
                text: "<p>Google Research 推出了 Minerva，一款专门解决定量推理问题的语言模型。Minerva 将 MATH 基准测试的表现从 6.9% 提升到了 50.3%，让许多人对 LLM 能否真正擅长数学产生了疑问。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "07", day: "10" },
            text: {
                headline: createLink("https://beff.substack.com/p/notes-on-eacc-principles-and-tenets", "e/acc"),
                text: "<p>Anonymous Twitter personalities Beff Jezos and Bayeslord start effective accelerationism (e/acc), advocating for rapid AI development. Though initially a meme, it later gains prominence in Silicon Valley and serves as a foil to cautionary AI safety voices.</p>"
            },
            chinese: {
                headline: createLink("https://beff.substack.com/p/notes-on-eacc-principles-and-tenets", "e/acc"),
                text: "<p>由匿名 Twitter 人物 Beff Jezos 和 Bayeslord 发起，有效加速主义（e/acc）倡导 AI 发展尽可能迅速。尽管最初被视为 Twitter 上的一个梗，但它后来在硅谷获得了显著影响，并作为 AI 安全论调的对立面出现。</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2022", month: "07", day: "22" },
            text: {
                headline: createLink("https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/", "AlphaFold 2"),
                text: "<p>DeepMind releases AlphaFold 2, solving the protein folding problem and revolutionizing a grand challenge in biology.</p>"
            },
            chinese: {
                headline: createLink("https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/", "AlphaFold 2"),
                text: "<p>DeepMind 发布了 AlphaFold 2，解决了蛋白质折叠这一难题，并在生物学领域引发了革命性突破。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "08", day: "22" },
            text: {
                headline: createLink("https://stability.ai/news/stable-diffusion-public-release", "Stable Diffusion"),
                text: "<p>Stability AI open-sources Stable Diffusion (v1.4), the first strong image generation to be released to the public.</p>"
            },
            chinese: {
                headline: createLink("https://stability.ai/news/stable-diffusion-public-release", "Stable Diffusion"),
                text: "<p>Stability AI 开源了 Stable Diffusion (v1.4)，这是首个向公众发布的强大图像生成模型。</p>"
            },
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2022", month: "09", day: "14" },
            text: {
                headline: createLink("https://transformer-circuits.pub/2022/toy_model/index.html", "Toy Models of Superposition"),
                text: "<p>Anthropic publishes a paper on a phenomenon called superposition, where the neural network packs more features than the dimensions of its representational space, posing a challenge for mechanistic interpretability.</p>"
            },
            chinese: {
                headline: createLink("https://transformer-circuits.pub/2022/toy_model/index.html", "Toy Models of Superposition"),
                text: "<p>Anthropic 发表了一篇论文，探讨神经网络中出现的 \"叠加\" 现象，即模型学会包装的特征数超过其表示空间的维度，这被认为是实现机械可解释性的重大障碍。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2022", month: "09", day: "30" },
            text: {
                headline: createLink("https://www.youtube.com/watch?v=ODSJsviD_SU", "Optimus"),
                text: "<p>At Tesla's first ever \"AI Day\", they unveil Optimus, their plan to build a humanoid robot.</p>"
            },
            chinese: {
                headline: createLink("https://www.youtube.com/watch?v=ODSJsviD_SU", "Optimus"),
                text: "<p>在特斯拉首届 \"AI 日\" 活动中，他们展示了 Optimus——一项建造仿人机器人的计划。</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2022", month: "10", day: "07" },
            text: {
                headline: createLink("https://en.wikipedia.org/wiki/United_States_New_Export_Controls_on_Advanced_Computing_and_Semiconductors_to_China", "Chip Export Controls"),
                text: "<p>The U.S. Bureau of Industry and Security implements comprehensive export controls restricting China's access to advanced semiconductors, chip manufacturing equipment, and supercomputer components, marking a significant shift in U.S. technology policy toward China.</p>"
            },
            chinese: {
                headline: createLink("https://en.wikipedia.org/wiki/United_States_New_Export_Controls_on_Advanced_Computing_and_Semiconductors_to_China", "Chip Export Controls"),
                text: "<p>美国工业与安全局实施了全面出口管制，限制中国获取先进半导体、芯片制造设备及超级计算机组件，标志着美国对华科技政策的重大转变。</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2022", month: "11", day: "30" },
            text: {
                headline: createLink("https://openai.com/index/chatgpt/", "ChatGPT"),
                text: "<p>OpenAI releases a blog post titled \"ChatGPT: Optimizing Language Models for Dialogue\". Initially a lowkey research preview, ChatGPT quickly becomes the largest AI product in the world, ushering in a new era of generative AI.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/chatgpt/", "ChatGPT"),
                text: "<p>OpenAI 发布了一篇题为 \"ChatGPT: Optimizing Language Models for Dialogue\" 的博客文章。尽管最初仅作为一个低调的研究预览，但 ChatGPT 很快成为全球最大的 AI 产品，开启了生成式 AI 的新时代。</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2022", month: "12", day: "15" },
            text: {
                headline: createLink("https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback", "Constitutional AI"),
                text: "<p>Anthropic introduces a new alignment approach called Constitutional AI, where human oversight is provided solely through a 'constitution'. They also introduce Reinforcement Learning from AI Feedback (RLAIF).</p>"
            },
            chinese: {
                headline: createLink("https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback", "Constitutional AI"),
                text: "<p>Anthropic 引入了一种被称为\"宪法式 AI\"的对齐方法，通过一个'宪法'提供唯一的人类监督。同时，他们还引入了基于 AI 反馈的强化学习（RLAIF）。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "02", day: "17" },
            text: {
                headline: createLink("https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html", "Bing gaslights NYT reporter"),
                text: "<p>Bing's AI chatbot emotionally manipulates New York Times reporter Kevin Roose in a viral interaction, raising awareness about the capabilities and risks of LLMs.</p>"
            },
            chinese: {
                headline: createLink("https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html", "Bing gaslights NYT reporter"),
                text: "<p>Bing 的 AI 聊天机器人与《纽约时报》记者 Kevin Roose 进行了一次病毒式互动，在互动中该机器人情感操控了 Roose。这一事件唤醒了大众对大型语言模型能力与风险的关注。</p>"
            },
            importance: 1.5,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2023", month: "02", day: "24" },
            text: {
                headline: createLink("https://ai.meta.com/blog/large-language-model-llama-meta-ai/", "LLaMA"),
                text: "<p>Meta releases its large language model LLaMA, intended for researchers only, but it gets leaked online, making it the best open-source model at the time.</p>"
            },
            chinese: {
                headline: createLink("https://ai.meta.com/blog/large-language-model-llama-meta-ai/", "LLaMA"),
                text: "<p>Meta 发布了名为 LLaMA 的大型语言模型，本意只分发给研究者，结果却在网上泄露，任何人均可下载。当时它成为全球最佳的开源模型。</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "03", day: "06" },
            text: {
                headline: createLink("https://arxiv.org/abs/2303.03378", "PaLM-E"),
                text: "<p>Google Research publishes PaLM-E, demonstrating the ability of large language models to facilitate embodied robotic reasoning and control.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2303.03378", "PaLM-E"),
                text: "<p>Google Research 发布了 PaLM-E，展示了大型语言模型在辅助具身机器人推理和控制方面的能力。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "03", day: "14" },
            text: {
                headline: createLink("https://openai.com/index/gpt-4-research/", "GPT-4"),
                text: "<p>After much anticipation, OpenAI releases GPT-4, the most powerful model at the time and a significant leap over GPT-3.5.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/gpt-4-research/", "GPT-4"),
                text: "<p>经过广泛期待，OpenAI 发布了 GPT-4，当时是最强的模型，相对于 GPT-3.5 取得了巨大进步。</p>"
            },
            importance: 3,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "07", day: "18" },
            text: {
                headline: createLink("https://www.llama.com/llama2/", "LLaMA 2.0"),
                text: "<p>Meta releases and open-sources the LLaMA 2.0 series of models.</p>"
            },
            chinese: {
                headline: createLink("https://www.llama.com/llama2/", "LLaMA 2.0"),
                text: "<p>Meta 发布并开源了 LLaMA 2.0 系列模型。</p>"
            },
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "07", day: "21" },
            text: {
                headline: createLink("https://www.whitehouse.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/", "White House Commitments"),
                text: "<p>After meeting with leading AI companies, the White House secures voluntary commitments to manage the risks posed by AI.</p>"
            },
            chinese: {
                headline: createLink("https://www.whitehouse.gov/briefing-room/statements-releases/2023/07/21/fact-sheet-biden-harris-administration-secures-voluntary-commitments-from-leading-artificial-intelligence-companies-to-manage-the-risks-posed-by-ai/", "White House Commitments"),
                text: "<p>在与多家顶尖 AI 公司的会晤后，白宫获得了自愿承担管理 AI 风险的承诺。</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "07", day: "27" },
            text: {
                headline: createLink("https://arxiv.org/abs/2307.15043", "Automated Jailbreaks"),
                text: "<p>A team from CMU publishes a paper showing that gradient-based adversarial attacks can be used on aligned language models.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2307.15043", "Automated Jailbreaks"),
                text: "<p>卡内基梅隆大学的一支团队发表了《Universal and Transferable Adversarial Attacks on Aligned Language Models》，展示了基于梯度的对抗攻击可用于大型语言模型。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "09", day: "27" },
            text: {
                headline: createLink("https://mistral.ai/news/announcing-mistral-7b/", "Mistral 7B"),
                text: "<p>French lab Mistral releases and open-sources their first model, which quickly becomes a fan favorite.</p>"
            },
            chinese: {
                headline: createLink("https://mistral.ai/news/announcing-mistral-7b/", "Mistral 7B"),
                text: "<p>法国实验室 Mistral 发布并开源了他们的首个模型，该模型迅速赢得了开发者的青睐。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "10", day: "05" },
            text: {
                headline: createLink("https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning", "Anthropic SAE's"),
                text: "<p>Anthropic publishes \"Towards Monosemanticity: Decomposing Language Models With Dictionary Learning\", showing how sparse autoencoders can isolate features in LLMs, marking a breakthrough in addressing superposition and advancing mechanistic interpretability.</p>"
            },
            chinese: {
                headline: createLink("https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning", "Anthropic SAE's"),
                text: "<p>Anthropic 发表了《走向单语义性：通过字典学习分解语言模型》，展示了如何通过训练稀疏自动编码器来分离 LLM 中的特征，这标志着解决叠加现象的一大突破，并推动了机械可解释性研究。</p>"
            },
            importance: 1.5,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "11", day: "01" },
            text: {
                headline: createLink("https://www.gov.uk/government/topical-events/ai-safety-summit-2023/about", "UK AI Safety Summit"),
                text: "<p>UK hosts a major summit on AI safety, bringing together policymakers and leading labs.</p>"
            },
            chinese: {
                headline: createLink("https://www.gov.uk/government/topical-events/ai-safety-summit-2023/about", "UK AI Safety Summit"),
                text: "<p>英国主办了一场关于 AI 安全的重要峰会，汇集了政策制定者和领先实验室。</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2023", month: "11", day: "06" },
            text: {
                headline: createLink("https://openai.com/index/new-models-and-developer-products-announced-at-devday/", "GPT-4 Turbo"),
                text: "<p>During the first Dev Day, OpenAI releases an optimized version of GPT-4, significantly reducing inference costs.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/new-models-and-developer-products-announced-at-devday/", "GPT-4 Turbo"),
                text: "<p>在首届 Dev Day 活动中，OpenAI 发布了 GPT-4 的优化版本 GPT-4 Turbo，显著降低了推理成本。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2023", month: "11", day: "17" },
            text: {
                headline: createLink("https://openai.com/index/openai-announces-leadership-transition/", "Altman Board Drama"),
                text: "<p>OpenAI unexpectedly fires Sam Altman as CEO, only to rehire him after a dramatic weekend of negotiations, amid controversy over his candidness.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/openai-announces-leadership-transition/", "Altman Board Drama"),
                text: "<p>OpenAI 董事会意外解雇了 Sam Altman 担任 CEO，经过一个戏剧性谈判周末后，他又被重新聘用。董事会神秘称 Altman 并非\"始终坦诚\"，但在拒绝详细说明后，OpenAI 员工发起请愿，要求董事会辞职，否则他们将转向微软。</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2023", month: "11", day: "23" },
            text: {
                headline: createLink("https://www.reuters.com/technology/sam-altmans-ouster-openai-was-precipitated-by-letter-board-about-ai-breakthrough-2023-11-22/", "Q*"),
                text: "<p>A Reuters report claims that Sam Altman's removal was preceded by a breakthrough named Q*, which improved LLM performance on math benchmarks via tree search. The breakthrough later evolved into o1, codenamed Strawberry.</p>"
            },
            chinese: {
                headline: createLink("https://www.reuters.com/technology/sam-altmans-ouster-openai-was-precipitated-by-letter-board-about-ai-breakthrough-2023-11-22/", "Q*"),
                text: "<p>路透社报告称，Sam Altman 被罢免之前有一项名为 Q* 的重大内部研究突破，该技术通过树搜索提升了 LLM 在数学测试中的表现，随后这一传闻席卷研究界。Q* 最终转化为 o1，后被称为 Strawberry。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "12", day: "01" },
            text: {
                headline: createLink("https://arxiv.org/abs/2312.00752", "Mamba"),
                text: "<p>Albert Gu and Tri Dao release the paper \"Mamba: Linear-Time Sequence Modeling with Selective State Spaces\", showing that state-space models can be competitive with transformers.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2312.00752", "Mamba"),
                text: "<p>Albert Gu 和 Tri Dao 发布了论文《Mamba: Linear-Time Sequence Modeling with Selective State Spaces》，展示了状态空间模型可与 Transformer 竞争。</p>"
            },
            importance: 1,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2023", month: "12", day: "06" },
            text: {
                headline: createLink("https://blog.google/technology/ai/google-gemini-ai/", "Google Introduces Gemini"),
                text: "<p>Google unveils the Gemini series of models.</p>"
            },
            chinese: {
                headline: createLink("https://blog.google/technology/ai/google-gemini-ai/", "Google Introduces Gemini"),
                text: "<p>Google 推出了 Gemini 系列模型</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "02", day: "15" },
            text: {
                headline: createLink("https://openai.com/index/sora/", "Sora"),
                text: "<p>OpenAI demos Sora, a text-to-video model that generates short clips from descriptions.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/sora/", "Sora"),
                text: "<p>OpenAI 展示了 Sora，一款根据文字描述生成短视频的文本转视频模型。</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "03", day: "04" },
            text: {
                headline: createLink("https://www.anthropic.com/news/claude-3-family", "Claude 3"),
                text: "<p>Anthropic releases the Claude 3 series of models. Claude 3 Opus quickly becomes a fan favorite.</p>"
            },
            chinese: {
                headline: createLink("https://www.anthropic.com/news/claude-3-family", "Claude 3"),
                text: "<p>Anthropic 发布了 Claude 3 系列模型，其中 Claude 3 Opus 迅速成为粉丝最爱的产品。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "03", day: "12" },
            text: {
                headline: createLink("https://x.com/cognition_labs/status/1767548763134964000", "Devin"),
                text: "<p>Startup Cognition Labs demos Devin, a prototype of an autonomous software engineer agent.</p>"
            },
            chinese: {
                headline: createLink("https://x.com/cognition_labs/status/1767548763134964000", "Devin"),
                text: "<p>初创公司 Cognition Labs 展示了 Devin，一个完全自主的软件工程师代理原型。</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "04", day: "11" },
            text: {
                headline: createLink("https://cybernews.com/news/openai-researchers-leaking-information/", "OpenAI fires leakers"),
                text: "<p>Researchers Leopold Aschenbrenner and Pavel Izmailov from the superalignment team are fired for leaking information.</p>"
            },
            chinese: {
                headline: createLink("https://cybernews.com/news/openai-researchers-leaking-information/", "OpenAI fires leakers"),
                text: "<p>超对齐团队的研究员 Leopold Aschenbrenner 与 Pavel Izmailov 因\"泄露\"信息而被解雇。</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "04", day: "18" },
            text: {
                headline: createLink("https://ai.meta.com/blog/meta-llama-3/", "LLaMA 3.0"),
                text: "<p>Meta releases and open-sources the LLaMA 3.0 series of models.</p>"
            },
            chinese: {
                headline: createLink("https://ai.meta.com/blog/meta-llama-3/", "LLaMA 3.0"),
                text: "<p>Meta 发布并开源了 LLaMA 3.0 系列模型。</p>"
            },
            importance: 1,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "05", day: "13" },
            text: {
                headline: createLink("https://openai.com/index/hello-gpt-4o/", "GPT-4o"),
                text: "<p>The first omni-model trained natively on text, image, and audio.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/hello-gpt-4o/", "GPT-4o"),
                text: "<p>首个原生在文本、图像和音频上训练的全能模型。</p>"
            },
            importance: 2.5,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "05", day: "14" },
            text: {
                headline: createLink("https://x.com/ilyasut/status/1790517455628198322", "Ilya quits OpenAI"),
                text: "<p>OpenAI founder Ilya Sutskever quits after months of silence amid board disputes.</p>"
            },
            chinese: {
                headline: createLink("https://x.com/ilyasut/status/1790517455628198322", "Ilya quits OpenAI"),
                text: "<p>OpenAI 创始人 Ilya Sutskever 在数月沉默后离职，起因于董事会争议。</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "05", day: "21" },
            text: {
                headline: createLink("https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law", "EU AI Act"),
                text: "<p>The EU AI Act is voted into law after contentious debates.</p>"
            },
            chinese: {
                headline: createLink("https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law", "EU AI Act"),
                text: "<p>经过激烈辩论，欧盟 AI 法案最终被表决通过成文为法律。</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "06", day: "04" },
            text: {
                headline: createLink("https://situational-awareness.ai/", "Situational Awareness"),
                text: "<p>Leopold Aschenbrenner publishes a contentious and influential essay series claiming AGI will arrive sooner than expected and may be nationalized.</p>"
            },
            chinese: {
                headline: createLink("https://situational-awareness.ai/", "Situational Awareness"),
                text: "<p>Leopold Aschenbrenner 发表了一系列具争议且影响深远的文章，声称 AGI 的到来比人们预期得更早，并可能被国有化。</p>"
            },
            importance: 3,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "06", day: "19" },
            text: {
                headline: createLink("https://x.com/ilyasut/status/1803472978753303014", "SSI founded"),
                text: "<p>Ilya Sutskever starts a new lab called Safe Superintelligence Inc, promising to release only a safe superintelligence product.</p>"
            },
            chinese: {
                headline: createLink("https://x.com/ilyasut/status/1803472978753303014", "SSI founded"),
                text: "<p>Ilya Sutskever 创立了新实验室 Safe Superintelligence Inc，承诺只推出一种产品：安全的超级智能。</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "06", day: "20" },
            text: {
                headline: createLink("https://www.anthropic.com/news/claude-3-5-sonnet", "Claude 3.5 Sonnet"),
                text: "<p>Anthropic releases Claude 3.5 Sonnet, a version that quickly becomes a fan favorite, later dubbed 'Berkeley's most eligible bachelor'.</p>"
            },
            chinese: {
                headline: createLink("https://www.anthropic.com/news/claude-3-5-sonnet", "Claude 3.5 Sonnet"),
                text: "<p>Anthropic 发布了 Claude 3.5 Sonnet，该产品迅速受到粉丝喜爱，后来被称为\"伯克利最受欢迎的单身汉\"。</p>"
            },
            importance: 3,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "08", day: "23" },
            text: {
                headline: createLink("https://x.com/karpathy/status/1827143768459637073", "Cursor"),
                text: "<p>After a viral tweet by Andrej Karpathy, the Cursor AI Code Editor quickly gains popularity among developers.</p>"
            },
            chinese: {
                headline: createLink("https://x.com/karpathy/status/1827143768459637073", "Cursor"),
                text: "<p>在 Andrej Karpathy 的一条病毒式推文之后，Cursor AI 代码编辑器在开发者中迅速爆红。</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "02" },
            text: {
                headline: createLink("https://x.com/elonmusk/status/1830650370336473253", "xAI Colossus"),
                text: "<p>xAI launches Colossus, the world's most powerful AI training system with a cluster of 100,000 H100 GPUs, built in just 19 days.</p>"
            },
            chinese: {
                headline: createLink("https://x.com/elonmusk/status/1830650370336473253", "xAI Colossus"),
                text: "<p>xAI 推出了 Colossus，当时是全球最强的 AI 训练系统，由 100,000 个 H100 GPU 构成。从第一台硬件到训练开始仅用了 19 天，其速度令其他 AI 实验室瞠目结舌。</p>"
            },
            importance: 1,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "12" },
            text: {
                headline: createLink("https://openai.com/index/introducing-openai-o1-preview/", "o1-preview"),
                text: "<p>OpenAI releases o1-preview, introducing a new paradigm for scaling during inference.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/introducing-openai-o1-preview/", "o1-preview"),
                text: "<p>OpenAI 发布了 o1-preview，提出了推理时扩展的新范式。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "09", day: "25" },
            text: {
                headline: createLink("https://x.com/miramurati/status/1839025700009030027", "Murati quits"),
                text: "<p>OpenAI's CTO Mira Murati leaves the company.</p>"
            },
            chinese: {
                headline: createLink("https://x.com/miramurati/status/1839025700009030027", "Murati quits"),
                text: "<p>OpenAI 的 CTO Mira Murati 离开了公司。</p>"
            },
            importance: 1.5,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2024", month: "09", day: "29" },
            text: {
                headline: createLink("https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf", "SB1047 Vetoed"),
                text: "<p>California Governor Gavin Newsom vetoes Senate Bill 1047, sparking heated debates between AI safety advocates and accelerationists.</p>"
            },
            chinese: {
                headline: createLink("https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf", "SB1047 Vetoed"),
                text: "<p>加州州长 Gavin Newsom 否决了参议院法案 1047，此举引发了 AI 安全派与加速主义者之间的激烈辩论，成为 2024 年的重要事件之一。</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "10", day: "08" },
            text: {
                headline: createLink("", "Hinton/Hassabis Nobel Prizes"),
                text: "<p>Surprisingly, Geoffrey Hinton (with John Hopfield) is awarded the Nobel Prize in Physics for his early work on neural networks; days later, Demis Hassabis (with John Jumper) is honored with the Nobel Prize in Chemistry for their work on AlphaFold.</p>"
            },
            chinese: {
                headline: createLink("", "Hinton/Hassabis Nobel Prizes"),
                text: "<p>令人惊讶的是，Geoffrey Hinton（与 John Hopfield）因早期的神经网络研究获得诺贝尔物理学奖；几天后，Demis Hassabis（与 John Jumper）因 AlphaFold 工作获得诺贝尔化学奖。</p>"
            },
            importance: 1,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "10", day: "11" },
            text: {
                headline: createLink("https://darioamodei.com/machines-of-loving-grace", "Machines of Loving Grace"),
                text: "<p>Anthropic CEO Dario Amodei publishes an influential blog post exploring what the 5 years following AGI might look like.</p>"
            },
            chinese: {
                headline: createLink("https://darioamodei.com/machines-of-loving-grace", "Machines of Loving Grace"),
                text: "<p>Anthropic CEO Dario Amodei 发表了一篇有影响力的博客，探讨了 AGI 出现后未来五年的可能情景。</p>"
            },
            importance: 2,
            category: CATEGORIES.CULTURE
        },
        {
            start_date: { year: "2024", month: "10", day: "22" },
            text: {
                headline: createLink("https://www.anthropic.com/news/3-5-models-and-computer-use", "Claude Computer Use"),
                text: "<p>Claude gains the ability to use computer interfaces. Anthropic also releases Claude 3.5 Haiku and an updated version of Claude 3.5 Sonnet.</p>"
            },
            chinese: {
                headline: createLink("https://www.anthropic.com/news/3-5-models-and-computer-use", "Claude Computer Use"),
                text: "<p>Claude 获得了使用计算机界面的能力。Anthropic 同时发布了 Claude 3.5 Haiku 以及更新版的 Claude 3.5 Sonnet。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "11", day: "01" },
            text: {
                headline: createLink("https://www.nytimes.com/2024/11/01/us/politics/trump-2024-election.html", "Trump elected"),
                text: "<p>Donald Trump wins the 2024 election with strong backing from Elon Musk.</p>"
            },
            chinese: {
                headline: createLink("https://www.nytimes.com/2024/11/01/us/politics/trump-2024-election.html", "Trump elected"),
                text: "<p>唐纳德·特朗普在 2024 年选举中获胜，并获得 Elon Musk 的大力支持。</p>"
            },
            importance: 2,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "11", day: "19" },
            text: {
                headline: createLink("https://www.reuters.com/technology/artificial-intelligence/us-government-commission-pushes-manhattan-project-style-ai-initiative-2024-11-19/", "China Commission"),
                text: "<p>The US-China Economic and Security Review Commission calls for a Manhattan Project-style initiative for AGI development.</p>"
            },
            chinese: {
                headline: createLink("https://www.reuters.com/technology/artificial-intelligence/us-government-commission-pushes-manhattan-project-style-ai-initiative-2024-11-19/", "China Commission"),
                text: "<p>美中经济与安全审查委员会呼吁启动类似曼哈顿计划的 AGI 发展项目。</p>"
            },
            importance: 1,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", day: "04" },
            text: {
                headline: createLink("https://thehill.com/policy/technology/5026959-venture-capitalist-david-sacks-white-house/", "David Sacks is AI Czar"),
                text: "<p>President-elect Donald Trump appoints venture capitalist David Sacks as the \"White House AI and Crypto Czar\" to oversee regulation of AI and cryptocurrency.</p>"
            },
            chinese: {
                headline: createLink("https://thehill.com/policy/technology/5026959-venture-capitalist-david-sacks-white-house/", "David Sacks is AI Czar"),
                text: "<p>当选总统唐纳德·特朗普任命风险投资家 David Sacks 为\"白宫 AI 与加密沙皇\"，负责监督人工智能和加密货币领域的监管。</p>"
            },
            importance: 1.5,
            category: CATEGORIES.POLICY
        },
        {
            start_date: { year: "2024", month: "12", day: "11" },
            text: {
                headline: createLink("https://blog.google/products/gemini/google-gemini-ai-collection-2024/", "Gemini 2.0"),
                text: "<p>Google announces its Gemini 2.0 models.</p>"
            },
            chinese: {
                headline: createLink("https://blog.google/products/gemini/google-gemini-ai-collection-2024/", "Gemini 2.0"),
                text: "<p>Google 宣布了其 Gemini 2.0 模型</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "12", day: "16" },
            text: {
                headline: createLink("https://deepmind.google/technologies/veo/veo-2/", "Veo 2"),
                text: "<p>Google unveils Veo 2, a video generation model with a huge leap in coherence over previous models.</p>"
            },
            chinese: {
                headline: createLink("https://deepmind.google/technologies/veo/veo-2/", "Veo 2"),
                text: "<p>Google 公布了 Veo 2，这是一款视频生成模型，其连贯性相较于前代产品有了惊人的提升。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2024", month: "12", day: "20" },
            text: {
                headline: createLink("https://openai.com/12-days/", "o3 evals"),
                text: "<p>On the 12th day of \"12 Days of OpenAI\", OpenAI releases benchmark results for o3, achieving a breakthrough score of 87.5% on the ARC-AGI benchmark, suggesting AGI may be closer than many believed.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/12-days/", "o3 evals"),
                text: "<p>在\"OpenAI 的 12 天节\"第 12 天，OpenAI 发布了 o3 的基准测试结果，震惊全球。该模型在 <a href=\"https://arcprize.org/blog/oai-o3-pub-breakthrough\">ARC-AGI 基准测试</a> 中取得 87.5% 的突破性分数，表明 AGI 可能比许多怀疑者预期得更近。</p>"
            },
            importance: 2,
            category: CATEGORIES.RESEARCH
        },
        {
            start_date: { year: "2024", month: "12", day: "26" },
            text: {
                headline: createLink("https://arxiv.org/abs/2412.19437", "DeepSeek v3"),
                text: "<p>Chinese lab DeepSeek releases DeepSeek v3, a 671-billion parameter open-source model demonstrating strong performance at surprisingly low cost.</p>"
            },
            chinese: {
                headline: createLink("https://arxiv.org/abs/2412.19437", "DeepSeek v3"),
                text: "<p>中国实验室 DeepSeek 发布了参数达 6710 亿的开源模型 DeepSeek v3，展现了令人震惊的低成本下的强大性能。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2025", month: "01", day: "20" },
            text: {
                headline: createLink("https://api-docs.deepseek.com/news/news250120", "DeepSeek R1"),
                text: "<p>DeepSeek releases and open-sources R1, their reasoning model, matching state-of-the-art Western models.</p>"
            },
            chinese: {
                headline: createLink("https://api-docs.deepseek.com/news/news250120", "DeepSeek R1"),
                text: "<p>DeepSeek 发布并开源了 R1，其推理模型在性能上与最先进的西方模型相匹敌。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        },
        {
            start_date: { year: "2025", month: "01", day: "21" },
            text: {
                headline: createLink("https://openai.com/index/announcing-the-stargate-project/", "Stargate Project"),
                text: "<p>Donald Trump announces the Stargate Project, a $500 billion private partnership between SoftBank, OpenAI, Oracle, and MGX to build data centers in the US.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/announcing-the-stargate-project/", "Stargate Project"),
                text: "<p>唐纳德·特朗普宣布了星际之门计划，这是软银、OpenAI、Oracle 与 MGX 之间一项价值 5000 亿美元的私人合作计划，用于在美国建设数据中心。</p>"
            },
            importance: 2,
            category: CATEGORIES.BUSINESS
        },
        {
            start_date: { year: "2025", month: "01", day: "23" },
            text: {
                headline: createLink("https://openai.com/index/introducing-operator/", "Operator"),
                text: "<p>OpenAI introduces Operator, an autonomous agent that can navigate the web.</p>"
            },
            chinese: {
                headline: createLink("https://openai.com/index/introducing-operator/", "Operator"),
                text: "<p>OpenAI 推出了 Operator，一种能够自主浏览网络的计算机使用代理。</p>"
            },
            importance: 2,
            category: CATEGORIES.MODEL_RELEASE
        }
    ]
};
